const cacheName = 'v1';
const startupResources = [
    '/',
    'fonts/montserrat-regular.woff2',
    'fonts/muli-latin-400.woff2',
    'fonts/muli-latin-700.woff2',
    'css/main.min.css'
];

const cachableExtensions = [
    '.png',
    '.jpg',
    '.jpeg',
    '.svg',
    '.webp',
    '.css',
    '.js'
];

const cachableDestinations = [
    'image',
    'script',
    'style'
];

const notFoundResponse = new Response('Network error happened', {
    status: 408,
    headers: { 'Content-Type': 'text/plain' }
});

const getResponseFromNetwork = async req => {
    try {
        const responseFromNetwork = await fetch(req);
        // noinspection ES6MissingAwait
        putInCache(req, responseFromNetwork.clone());
        return responseFromNetwork;
    } catch (err) {
        return undefined;
    }
};

const addResourcesToCache = async resources => {
    const cache = await caches.open(cacheName);
    await cache.addAll(resources);
};

const putInCache = async (req, res) => {
    const cache = await caches.open(cacheName);
    await cache.put(req, res);
};

const cacheFirst = async req => {
    // From Cache
    const responseFromCache = await caches.match(req);
    if (responseFromCache) {
        return responseFromCache;
    }

    // From Network
    return (await getResponseFromNetwork(req)) ?? notFoundResponse;
};

const networkFirst = async req => {
    // From Network
    const responseFromNetwork = await getResponseFromNetwork(req);
    if (responseFromNetwork) {
        return responseFromNetwork;
    }

    // From Cache
    const responseFromCache = await caches.match(req);
    return responseFromCache ?? notFoundResponse;
};

const enableNavigationPreload = async () => {
    if ('navigationPreload' in self.registration) {
        await self.registration.navigationPreload.enable();
    }
};

self.addEventListener('activate', event => {
    event.waitUntil(enableNavigationPreload());
});

self.addEventListener('install', event => {
    event.waitUntil(addResourcesToCache(startupResources));
});

self.addEventListener('fetch', event => {
    const { request } = event;

    const isCachableDestination = cachableDestinations.includes(request.destination);
    const isCachableExtension = cachableExtensions.some(ext => request.url.endsWith(ext));
    if (isCachableDestination || isCachableExtension) {
        event.respondWith(cacheFirst(request));
    } else {
        event.respondWith(networkFirst(request));
    }
});


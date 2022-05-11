(async () => {
    const isSwAvailable = 'serviceWorker' in navigator;
    if (!isSwAvailable) {
        return;
    }

    try {
        await navigator.serviceWorker.register('/sw.js', {scope: '/'});
    } catch (err) {
        console.error(`Registration failed with ${err}`);
    }
})();
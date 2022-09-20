console.log("Llega?");
if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/sw.js')
} else {
    console.log("No u.u");
}
self.addEventListener('install', (event) => {
    console.log('SW: install');
});

self.addEventListener('fetch', (event) => {
    // if (event.request.url.includes('.css')) {
    //     console.log(event.request.url);

    //     const resp = new Response(
    //         `body {
    //             color: red;
    //             background-color: black;
    //         }`,{
    //             headers:{
    //                 'Content-Type':'text/css'
    //             },
    //         }
    //     );
    //     event.respondWith(resp);
    // }
    if (event.request.url.includes('.jpg')) {
        event.respondWith(fetch('./images/perrito2.jpg'));
    }
});
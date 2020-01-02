importScripts('./js/workbox-sw.prod.v2.1.2.js');
const staticAssets = [
    './',
    './css/animate.css',
    './css/style.css',
    './css/animate.css',
    './js/jquery-3.4.1.slim.min.js',
    './js/gmqrcode.min.js',
    './js/script.js',
    './img/bg-app.png',
    './img/gv-logo.png',
    './img/global-app-bg.png',
    './img/icons/*',

];

const wb = new WorkboxSW();
wb.precache(staticAssets);

//wb.router.registerRoute('https://jsonplaceholder.typicode.com/(.*)', wb.strategies.networkFirst());

wb.router.registerRoute(/.*\.(png|jpg|jpeg|gif)/, wb.strategies.cacheFirst({
    cacheName: 'gvapp-images',
    cacheExpiration: { maxEntries: 200, maxAgeSeconds: 12 * 60 * 60 * 60 },
    cacheableResponse: { statuses: [0, 200] }
}));
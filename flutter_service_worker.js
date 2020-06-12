'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "fe1cf4d48ff9fcce5e1b88ecfe9c8e30",
"/": "fe1cf4d48ff9fcce5e1b88ecfe9c8e30",
"main.dart.js": "a042464fc9ffb26a27965ef8976e92b8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8e2ffa0f3ec0a648cfc36b1e7ad3ce04",
"assets/LICENSE": "e480942bb8bccf12b9e5841e41644b2e",
"assets/AssetManifest.json": "272df6e993053f571271533911ae4129",
"assets/FontManifest.json": "0b21c80785e1a30f918e691ef65bcd2e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/eva_icons_flutter/lib/fonts/evaicons.ttf": "b600c99b39c9837f405131463e91f61a",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/images/helado.jpg": "c92329cb8028dcad5531960eca524911",
"assets/assets/images/galleta.jpg": "545f3053653cb203fb7ea51b84efd620",
"assets/assets/ic_img_tokin.png": "385703aef8731f3095bca3052c57f675"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

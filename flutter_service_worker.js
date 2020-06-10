'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "003997c61737dcb60dc32e40d6a81efd",
"/": "003997c61737dcb60dc32e40d6a81efd",
"main.dart.js": "a75d6fb7eb7e4b069e03321a1d25d6cb",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "182a4ba2f608983bc2922212d1f0cd88",
"assets/LICENSE": "e480942bb8bccf12b9e5841e41644b2e",
"assets/AssetManifest.json": "8211e6a87d2ec92b1e2fbef0cbf313b9",
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

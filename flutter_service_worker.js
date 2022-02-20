'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "c725a226a899d27a24c13465b6aeddf3",
"assets/assets/images/1.png": "086310707bd491841f4276245487ca13",
"assets/assets/images/2.png": "66073f4f2497e7524dff5af69a462728",
"assets/assets/images/3.png": "73ddb9ef83ded5dd429cd42eb1bf5709",
"assets/assets/images/4.png": "a9401b1285d1370070acafcc7b52ad94",
"assets/assets/images/back-full-bandage.png": "e8023b122880f34baf51332a3ec4a0ed",
"assets/assets/images/back-full.png": "f592ca1409f6c92d1e3a676afc546478",
"assets/assets/images/bandage.png": "7427971a79b52f2a5587bf88a9f109ba",
"assets/assets/images/bed-no-puzzle.png": "00a1ee9920bb222bd7bd3e6ec4a03cc9",
"assets/assets/images/bed.png": "41ae8a07c776c88e789cd36d554a5c9a",
"assets/assets/images/blue-safe-no-puzzle.png": "f082c11687c6deb6fa45c180df5fdea7",
"assets/assets/images/blue-safe.png": "d1a16f53abb8d1aabfc6c0d5203999bf",
"assets/assets/images/blue.png": "b440b0d2186b9fe2bc98a810639f7947",
"assets/assets/images/closed-blue-safe.png": "84299f9ef05fa695679a061ea0bee2d5",
"assets/assets/images/closed-red-safe.png": "2d3443e2438e7fb9b79193c7e2fd24bc",
"assets/assets/images/computer.png": "45f662a3c8944772d9cb5726193d992e",
"assets/assets/images/desk-no-puzzle.png": "b11115c73cac3de2411d53afe27b4633",
"assets/assets/images/desk.png": "2c1bff78952ebda18e4316d13010f94e",
"assets/assets/images/door.png": "69f148dbed6ef5514b46f3409dc5fa94",
"assets/assets/images/foot.png": "cae8e2a2fc4d261e65003a40fbc0a70f",
"assets/assets/images/front-view.png": "b084aac553e1b4269ad27c5068b64d2f",
"assets/assets/images/green.png": "58854a2b36ecc678f55aa7b9a1930317",
"assets/assets/images/intro.png": "14c5ca986d298aa27aa94373922daefc",
"assets/assets/images/mrsG.png": "9e2b8eb201b8ad006c2194a121d710d1",
"assets/assets/images/neck.png": "52b1c171bb2740d02f261d8bc3952144",
"assets/assets/images/note1.png": "dc31d47e717491154d5a29b6a1d03168",
"assets/assets/images/open-red-safe.png": "a508a382f670c8a7bd9665075ab05691",
"assets/assets/images/opened-blue-safe-empty.png": "43994fd1c39facd71bfdceec8d71c2ee",
"assets/assets/images/opened-blue-safe.png": "c305d00efe7769d7393d18cd00c663b9",
"assets/assets/images/oximeter.png": "036580ca90cceb566074d539985e030d",
"assets/assets/images/prescription.png": "6bf1e6d7ae85e4011e8c1115e8e7080d",
"assets/assets/images/red-safe-no-items.png": "27448888b21650178230e946caf35a8d",
"assets/assets/images/red.png": "ba683bc782f6084dad9010e4bcc161ee",
"assets/assets/images/sanitizer.png": "723233be5c99333da8be61ce5177a676",
"assets/assets/images/sink-no-puzzle.png": "833922921cca2e1377759b0f650f8576",
"assets/assets/images/sink.png": "c50d689f2cc76b6cdd9c95d51e269474",
"assets/assets/images/stethscope.png": "8d767908a3ac1f1edcdec524031c4dc5",
"assets/assets/images/torch.png": "89a941737badc360a7f8f6891bcfc908",
"assets/assets/images/ulcer-staging.png": "71cfbc19d75e723cbf8b77e1e81cb70b",
"assets/assets/images/yellow.png": "877fd89572d11c6986064deb7b1914de",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "ebd4aa66e4b988948d9c2eba3468e1f1",
"canvaskit/canvaskit.js": "f00de1f742223b7cf4cec1c2a0cd9764",
"canvaskit/canvaskit.wasm": "efe4a5da0205bb8d8c5aca7dad981abd",
"canvaskit/profiling/canvaskit.js": "411ee45f5abb57975ee5243310c6953e",
"canvaskit/profiling/canvaskit.wasm": "c6681b1a749ad902eefcba11fed1cb3f",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c2678b6e0cf3c41c8affc288d7590fd6",
"/": "c2678b6e0cf3c41c8affc288d7590fd6",
"main.dart.js": "8c6c3665bbbf81a3eaacc535dc9ce745",
"manifest.json": "1a4cee6ee539f3fe47313f0a0dc136b0",
"version.json": "cec0846efa752771e2f68e6c316e5979"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

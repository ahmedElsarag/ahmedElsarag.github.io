'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "f3723b3e596faa8016f92ca5ae79d2fa",
"assets/assets/demo/banneroffer1.png": "416f98f97585257540350a79703c6da1",
"assets/assets/demo/banneroffer2.png": "ef3c2878997052078db2472156ba5985",
"assets/assets/fonts/PFBagueRoundPro/PFBagueRoundPro-Bold.ttf": "33f60b23a1bdc783c6f72c5b37977294",
"assets/assets/fonts/PFBagueRoundPro/PFBagueRoundPro-Medium.ttf": "55a80522389eb110f50875084efe4d77",
"assets/assets/fonts/PFBagueRoundPro/PFBagueRoundPro-Regular.ttf": "4b26540cfab6f9919e4234b7ea8a3c12",
"assets/assets/fonts/sf-pro-display-cufonfonts/SFPRODISPLAYBOLD.OTF": "644563f48ab5fe8e9082b64b2729b068",
"assets/assets/fonts/sf-pro-display-cufonfonts/SFPRODISPLAYMEDIUM.OTF": "51fd7406327f2b1dbc8e708e6a9da9a5",
"assets/assets/fonts/sf-pro-display-cufonfonts/SFPRODISPLAYREGULAR.OTF": "aaeac71d99a345145a126a8c9dd2615f",
"assets/assets/images/envelope.png": "fd2d54a49af0e6085b4f53c47516e0c4",
"assets/assets/images/eye-slash.png": "22fe92c6e171309fdf6a2bce10080e2d",
"assets/assets/images/iconLang.png": "123f0dc6ddc38f88e2714e4c2b41d2aa",
"assets/assets/images/iconLock.png": "8e07d9ece339f2d02575673c5e1cb00b",
"assets/assets/images/Iconlogout.png": "b7854a7be1b0c9a2c0ea588dffdf9a9d",
"assets/assets/images/iconNotification.png": "dd0524f8b41deb1a8b7f351a3b8ce73e",
"assets/assets/images/iconPayment.png": "ceb2e6bbb24daf624bf2694973ba00d7",
"assets/assets/images/lock.png": "0bef7bb0ba6289bcb6086c166de895fb",
"assets/assets/images/logo-white.png": "2bd1f881f86bdcfc1651e79e14dfc2fc",
"assets/assets/images/logo.png": "ece98d34d989f97f598c5b2b1fe9c7c4",
"assets/assets/images/openmoji_flag-saudi-arabia.png": "cb15332c3d05404c946fe7a64e8c1da9",
"assets/assets/images/placeholder.jpg": "0d76c36102ab7301fb582fe101acb506",
"assets/assets/images/qr.png": "32c1a935e842cb0687a4e12140b05051",
"assets/assets/images/qrSample.png": "b89a65f7aee54922ddd280137f21efa2",
"assets/assets/images/salalogo.png": "c24ee7644acecbe295d36c9578e64b29",
"assets/assets/images/shape.png": "1b23d7457d869f4c4b9c054e6f2fd2ca",
"assets/assets/images/shape2.png": "2e603ea043c5097e0cf6e1100ffb510a",
"assets/assets/images/svg/arrow_back.svg": "672b507ebf9c33df15794a976a4270e7",
"assets/assets/images/svg/card_scan.svg": "7bd99212ee86b8f396dd537c113b74fe",
"assets/assets/images/svg/color_logo.svg": "472e8f5801a11ca12cc866f34380cffe",
"assets/assets/images/svg/games.svg": "e0874a4d7440f2ea3f1aa802920377a0",
"assets/assets/images/svg/home.svg": "4a7507e754babdb384d42cadc2b070ae",
"assets/assets/images/svg/homeShape.svg": "8b4c5634fc65e169efcf2bb31b2b7bbc",
"assets/assets/images/svg/intro1.png": "5cc9aafa46b4a6bc3d6a798caf78107f",
"assets/assets/images/svg/intro2.png": "9dd92fd7aa4e43adc5aa8b047bae05a4",
"assets/assets/images/svg/intro3.png": "38cd4446466fb4f057f8e527e6a42214",
"assets/assets/images/svg/join.svg": "92c98c5da44d57908353e06581b55264",
"assets/assets/images/svg/logo.svg": "09fc4abae0d36bc3828898b088f58fd7",
"assets/assets/images/svg/notification.svg": "f105be811be74f518f85a801e2f434d9",
"assets/assets/images/svg/pattern.svg": "49fa53bf57d2f03d7151f636a95090dd",
"assets/assets/images/svg/pics.png": "22d3391f55a2ed6ce274b5ef601b98cc",
"assets/assets/images/svg/polices.svg": "9c4b18e9e8a5223a80a2b76949c3b6f6",
"assets/assets/images/svg/profile.svg": "cdb649b1edb38874337c7b49e91f06eb",
"assets/assets/images/svg/qr.svg": "3af0851a6eeaa8f554b50f6d87cc867c",
"assets/assets/images/svg/qr_scanner.svg": "e90058e04209a63d915cbeb37abb4e71",
"assets/assets/images/svg/scan.svg": "a6333be60d479628b103dd35dbc40889",
"assets/assets/images/svg/scanner.svg": "ee8c78f5737ac12e0a825cea4fec84b3",
"assets/assets/images/svg/sh.svg": "a66e11abaa11830047f2db00b6f2b860",
"assets/assets/images/svg/shape.png": "c8f7ef9b6854db67960b11cad2e32a96",
"assets/assets/images/svg/shape.svg": "9e5fe2fe7a2bfe489718fdd4a51b41e7",
"assets/assets/images/svg/sync.svg": "e9721ac16ff419c84a5f86db38cd4d3e",
"assets/assets/images/svg/vector.svg": "12b022ca16fee8717ce2905a32182738",
"assets/assets/images/svg/welcom_logo.svg": "c29e5a66c5e12eefa8c48dd422a18564",
"assets/assets/images/userImage.jpg": "3fb39db6f9b49a3de8bcad570025beea",
"assets/FontManifest.json": "9fb1d27902f7f6028efce14d62c88f01",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "5ef0ffff47c50f8946a7cac474fe1cbe",
"assets/packages/awesome_snackbar_content/assets/back.svg": "ba1c3aebba280f23f5509bd42dab958d",
"assets/packages/awesome_snackbar_content/assets/bubbles.svg": "1df6817bf509ee4e615fe821bc6dabd9",
"assets/packages/awesome_snackbar_content/assets/types/failure.svg": "cb9e759ee55687836e9c1f20480dd9c8",
"assets/packages/awesome_snackbar_content/assets/types/help.svg": "7fb350b5c30bde7deeb3160f591461ff",
"assets/packages/awesome_snackbar_content/assets/types/success.svg": "6e273a8f41cd45839b2e3a36747189ac",
"assets/packages/awesome_snackbar_content/assets/types/warning.svg": "cfcc5fcb570129febe890f2e117615e0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/nb_utils/fonts/LineAwesome.ttf": "bcc78af7963d22efd760444145073cd3",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b199b30ccfd11129039f4c3510022fc3",
"/": "b199b30ccfd11129039f4c3510022fc3",
"main.dart.js": "f0b7f5355e170fd7e5b4adc0179060bc",
"manifest.json": "6af42b98d5c13c6d5b28df1dc8c407b1",
"version.json": "ae74bc39c41a7214c201693a2d7cdfa4"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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

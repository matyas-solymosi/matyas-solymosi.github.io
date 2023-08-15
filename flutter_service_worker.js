'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "9dcbc3567102db4d9639bb0c4ed84080",
".git/config": "1ea85ed05385a766dd5262d9660003bc",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "b951e3f97119a24ef280d3c69fe63736",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "7f7ad67bd9b581ea6f4744cbea2aa16b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "809f2436d5e88b1fd0e3b86d678cfbcd",
".git/logs/refs/heads/main": "809f2436d5e88b1fd0e3b86d678cfbcd",
".git/logs/refs/remotes/origin/main": "9ea3a0bf4d057fb0daa06ddafe8e8a59",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/2c306bc58fc65ed3bab02cee50e6cadcf290d9": "6f2aab764e679b027b5b07f299c75d8f",
".git/objects/08/161994f47a0ee6e5c3a9508f23bdd88e6b51f8": "0da8ef455ffe12936fb84cb6d7722cc1",
".git/objects/09/7a11e8bf06094d17bb9904130e967da9e104c6": "13f273f0394f2abb3a6a4480556ad0c3",
".git/objects/0a/4d73fb175361dbfd7434c5b73aa3528db45532": "307cded22e029fc25ff84472aacfc2e9",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0b/f8d3f6eb6545671192063029e5b0cfe56b253b": "f316b75dbfdf26aac23ec936eb9edc1f",
".git/objects/19/13dba31f6be4c5d5186b39e582dcdf60357289": "2a9f21849940542143976a0f996c28d2",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/56867e70c434d8dff86a85ca09e6d942a38257": "27d844aa56b9fd88c276a37ccf62cee6",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/28/6d82353cb38e3922f694aa3f9cf29246ebe8b0": "0235e79ede2201f2d95dde2954c02e99",
".git/objects/2a/6c54fa6ce0c1d413b985528a4e8de5d4a36cce": "cd6a12c83104b9c91119efdb0611de76",
".git/objects/2a/eff1bd6550eec0c508fcef7b29f2d6095d0f33": "430e1ae4b96122ac677f9e1d5fa84ae7",
".git/objects/30/2f375489fb3474df01f6c0d7295a5946bc6c20": "2ecc80d7ac03b0c6bbf7d7fd4d582b63",
".git/objects/30/efd943495ced30b6708775e376f569fb8896a8": "71a23fd416c16e38d16dfe493e8f2710",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/52783cf094b50e73db42eb73229b197d8b4df8": "6a45ae36a11e25001a5ac2dc01a63381",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/3a/6329f4e9dea3a05509cd12cd9574c88605088c": "016aeed922577bdbb9f27c21575651f8",
".git/objects/3c/a2e9a367ddc6bc4a444c4a75b534bc0ba2bfaf": "9cfa61c28a4c3628f4ed74b4a1d27620",
".git/objects/3e/ac245fee4d1adbe97ae3da9706d9547b97b307": "737570cbd4d22bd7fce326e4020344c3",
".git/objects/40/38579a2b4302f99e7dbfe7424f6dd912acc2d9": "a1da3448e5f6d135d7ee51ed7b8073bb",
".git/objects/43/fb792d3a72f6c2dbab89963ee2ab0fb5c518f1": "cd12a0e42c52507c4a46b635b1575190",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/7e9f039799a9e153633cdc61f79b14131de121": "34db11703f15ea4316d385b96aba5338",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4d/ae4967f23c229b73859bb9154888354e235393": "de7a36b11cde3d78684fdff3bd251374",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/53/af7e31272ac3dd7804db5bc6fa3ceba98bea41": "d7c2cc5931c8a6031bc853c44f2ec3b6",
".git/objects/55/a0c197037c7503ce1072d0d1270d3e54d3fb1d": "4c88f74106d5cd8f786f5a0b902310ea",
".git/objects/5c/25635399a6906ccd7da6a892e761003bb0b415": "1bf4a12ccc6ea7f284d4127ed4abc1e5",
".git/objects/5d/60255d22f98166e090009e55c5efc04de58985": "4b9eeb2f29b252b1f242a60ef5ce8c85",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/66/a635f3d0ff74c5f30a1aa6ed9e9fb73657e2f4": "1fe53503cc669f21a8b6e838221d020e",
".git/objects/6a/3485ac8ab1cdf6ce41cdf738a3e4570a6ace97": "5b8c1e480c306003f08b882fecb31a63",
".git/objects/6c/380f467a1ca94b64d753c9fb660c969640e045": "2cebf43cc47176029fff47b5fd505e88",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/70/15c6d3757b56072082b42a3dbfab97a7a6eefc": "d1ec013a3043c2d3d8da6865f678fe35",
".git/objects/72/648ab1f69f09162887b12b680f9e4f3ab9392d": "ed43a4981b88f4049f8a7bbaab82534e",
".git/objects/73/99092d4fa4155ef851780755ed6c25b6e5a660": "3164e9c66ed26a301b1420f030673560",
".git/objects/74/77d208e306a5e655a9e4ec4c57dc42d7b0edc4": "7b161ed38844ef39e7bb0e64cb359793",
".git/objects/76/5df1ddfee42b0c53a3d13332b3fee5e3b9fd07": "771aaeb3992b1603d1b6b28214ed951a",
".git/objects/78/5874945d69fb56f3a4d1d3d5403ae4e043029c": "87abe52f6428ffff86f9c5648e6d2093",
".git/objects/7b/b8198ed2260a11d3193eb78bf7707adc5ebb20": "08ac6587a9e5ead5cc89a6c1868e3eb2",
".git/objects/7e/d96814ee9ec313ab9032e7e6aee1008a2cefe8": "3bc1e82d613a6db590050d1fc28cb968",
".git/objects/86/0d54860fa9e364f2ad4f75c525f88cd7e94367": "863cf31749bdb1c29c39f3f71c0a9877",
".git/objects/86/34cfd9b1b05d3bcd6184c3de076a2b164444bc": "02fc921d498696a4fe740a627efc67d9",
".git/objects/86/bb971747f241c1ddcd4e1e99efb09988736db1": "173f1c85e49a6e92cf391fc25f68feba",
".git/objects/87/675fb8d067b5ab54de11841eef7d636a84112b": "7de3bce2a74049ddff42ca98996eddb3",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/b511f9e05468345a7e0f88bc07c1b3a4de543c": "e7b9938eb88428a7b348b338451524e4",
".git/objects/8c/47546d4fd296ae776cb5479dcb659c50dc61b0": "1692f84153d6fd1f76391c7ebbe6a25e",
".git/objects/8d/0c2c2b8ac48a7e9a0a52eacde6ad28e3b90613": "2f33395cd106d95b6b71533166afe9a6",
".git/objects/8e/155896ea0401fcf1258c76579ff9414313ebe5": "d633b9530d776da19164eaf34cddbac7",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/99/5244cdb46aa1cd8a3f92f9ec2aab384ca89cf5": "1147cac22c60f1f5e47111275e5e0737",
".git/objects/9b/8a636b501bdf4bcc0865a1a56639e54b53598c": "e63a79008ddd2f98e0980c6184c0bc79",
".git/objects/a0/b4e50626cc80e832cda2b49ee0e0b50282f499": "2197685b6b94e6a5f72e415a7dbf0566",
".git/objects/a5/b2439cd847dc6efca915c817b79cf9ac32ed6c": "5dcf6cb95a14f295021841ce10382546",
".git/objects/a6/88449d0bf64ad1f76c7334be3744d7a7492bf0": "a67cd1f937e7aa292735878c489fe99c",
".git/objects/a8/aa71216ea8ca40793f64039e4ea9974b076367": "6df46b253a2ce3d75964b5a4dc3e27ac",
".git/objects/a8/f8b76fb32897c86f0352c32b230e790988596a": "734a017a06c86955f16310b2ce8ba4ef",
".git/objects/aa/d9dd49b3cea65f39ab2c3ec47c51d6b019989f": "f19c9a3f3b0d1d977c9995a5af4f9a98",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b2/e83e4b3e537fe865598ec38f1a117bcb874c04": "770e174af6beba692f2e165fdcc73b25",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/f3a4a4ea150b32141da293706de187a3f7986e": "8285183033299f9078a6c63b8fda1184",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bf/f62efcf254e35ff3ad3395de21db87da6f10ba": "abd59825b2d9e3e4f1ab7080e8877a9b",
".git/objects/c0/32a89579abe3b7247fc11aae32320d640069d0": "7489dbfade25d6b4b09876b18a2a60f4",
".git/objects/c0/c6d78de672b98e6a8b038aeae2617c96f8ee6d": "49d8f04e869f32530f1787a636533ac3",
".git/objects/c1/51c9cd2e168a5798998a284b1606d037a386d0": "b3f464c064cd2790b06c2f8317f56ad6",
".git/objects/ca/0f4b3a0ecf5b97b36ed3a4a7a6a4cb78e31ae7": "e8ca627b8dd2a92fa061c64a83fac9e1",
".git/objects/ca/5ad16ecd95d8bb168982ec5b8c55108f454759": "1c53d56809e73ebd0affb1c1c097ac29",
".git/objects/ca/ccd9d784a71ac9c539c7fc7600349286827815": "5cf1ae197fdf13928eef90b854d5f540",
".git/objects/cc/455bfd62ceec1c556f2dc9682141a4d6677769": "62f0b6554acbeae9bc479d5ba44fd9df",
".git/objects/cf/cb385866c3d6b2031bccb9f7b9e2c468e46afe": "c94b80f819d732df821caf96c98057ba",
".git/objects/d1/c7904d3578732d2ac818c9bf83ac5092cef02b": "4c28fa3d5cd0d26ba8e23dd84c7e3efe",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/406f5b5ee7c916bbd10862b9ee10f755577e8d": "19e9618a7e66409a8b4b3fa692b16e77",
".git/objects/d8/c708fe10aaed11dd59af354ecabbc10539a810": "0dd3aa2115d426dcbdea80370230bae5",
".git/objects/da/0aa4f3be7940aa0e0ad7c0cdfa72f5055b5872": "0c73d81eeb4bf7e4415c419f16cdcccd",
".git/objects/e3/89ba43c4b9ea7f2bbcd833500a8d20ede35368": "9d60af54454904660396950577aabff3",
".git/objects/e6/69dd76ee64deb260c87a609589d20d6503e40c": "87c587c20fd932bd63cc21f3424abb88",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/e7/adc747666a9ec50650d08038185999a9d44e6d": "159f184e2e07ccf9f6a3350482d044c4",
".git/objects/e8/372213d6442379415231ecc120ceb349c30e36": "5e4229a131de412175925d7ff438779a",
".git/objects/e9/35ab7a5efc651f562364134d49232653a9b900": "b8f638ef583d948bd3707872ac6a2c27",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fc/0f322e61617230621468a8090f25edb73110d5": "ecc6495fc2bada51dd28771bea5b58eb",
".git/refs/heads/main": "7aaacc6f44f476724b922d3814ac9457",
".git/refs/remotes/origin/main": "7aaacc6f44f476724b922d3814ac9457",
"assets/AssetManifest.bin": "f948e2dbf2e684aa77b02ea88821ffb0",
"assets/AssetManifest.json": "d119466ddcab8a3ba510eb6ad9d47d88",
"assets/FontManifest.json": "4818d0356e419fe46ad02655c2ee5766",
"assets/fonts/MaterialIcons-Regular.otf": "66592ef5f314134f52d739e2a6cf5ff1",
"assets/NOTICES": "b8ceba51dcc63a0cacbd3d8b47bb15db",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/flutter_octicons/lib/fonts/octicons12.ttf": "8807a315e239d0f26a97b1309e60dbd9",
"assets/packages/flutter_octicons/lib/fonts/octicons16.ttf": "074f8c67c22267519a1f73f5f8aae074",
"assets/packages/flutter_octicons/lib/fonts/octicons24.ttf": "a31e2bfdb2e8d4811366d7838c6f6dbc",
"assets/packages/flutter_octicons/lib/fonts/octicons48.ttf": "549020ca614059cfad5867540c00d1be",
"assets/packages/flutter_octicons/lib/fonts/octicons96.ttf": "9f33978158e60d4e92adadacb4950de2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d7791ef376c159f302b8ad90a748d2ab",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5070443340d1d8cceb516d02c3d6dee7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "658b490c9da97710b01bd0f8825fce94",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e60dc3bac706265abb86ec59008e948b",
"/": "e60dc3bac706265abb86ec59008e948b",
"main.dart.js": "c7a8ad14ca9b0244a1367ae9bb5d4c81",
"manifest.json": "7a59091b35597853aee93031a2503a84",
"version.json": "c55820deab1e844ba953f98b3aa5e9ef"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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

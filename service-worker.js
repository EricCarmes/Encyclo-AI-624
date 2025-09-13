const CACHE_NAME = "notre-dame-audio-v1";
const FILES_TO_CACHE = [
  "index.html",
  "AudioBook_NotreDame_EN.html",
  "style.css",
  "lecteur.js",
  "manifest.json",
  "Couverture_resized.jpg",
  "logo.jpg",
  "mentions_legales.pdf",
  "Introduction.mp3",
  "Chapitre1-1.mp3",
  "Chapitre1-2.mp3",
  "Chapitre1-3.mp3",
  "Chapitre2-1.mp3",
  "Chapitre2-2.mp3",
  "Chapitre2-3.mp3",
  "Chapitre3-1.mp3",
  "Chapitre3-2.mp3",
  "Chapitre3-3.mp3",
  "Chapitre4-1.mp3",
  "Chapitre4-2.mp3",
  "Chapitre4-3.mp3",
  "Chapitre5-1.mp3",
  "Chapitre5-2.mp3",
  "Chapitre5-3.mp3",
  "Chapitre6-1.mp3",
  "Chapitre6-2.mp3",
  "Chapitre6-3.mp3",
  "Chapitre7-1.mp3",
  "Chapitre7-2.mp3",
  "Chapitre7-3.mp3",
  "Chapitre8-1.mp3",
  "Chapitre8-2.mp3",
  "Chapitre8-3.mp3",
  "Conclusion.mp3"
  ];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

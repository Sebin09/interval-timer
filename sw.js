self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('interval-timer').then(function(cache) {
      return cache.addAll([
        './',
        'index.html',
        'manifest.json'
      ]);
    })
  );
});
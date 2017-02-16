var cacheName = 'kidzhy-blog'

var filesCache = [
    '/blog',
    '/blog/2016/12/18/test.html',
    '/blog/2016/12/19/er-wei-shu-zu.html',
    '/blog/2016/12/21/css-grid.html',
    '/blog/2016/12/27/css-grid.html',
    '/blog/2016/12/28/svg-text.html',
    '/blog/2017/02/04/css-grid.html',
    '/blog/2017/02/10/react-router-v4.html',
    'https://cdn.staticfile.org/amazeui/2.7.2/css/amazeui.min.css'
]

self.addEventListener('install',function(e){
    e.waitUntil(
        caches.open(cacheName).then(function(cache){
            return cache.addAll(filesCache)
        })
    )
})

self.addEventListener('activate', function(event) {

    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(cacheNames.map(function(key) {
                if( key !== cacheName) {
                    return caches.delete(key);
                }
            }));
        })
    );
    return self.clients.claim();
});

self.addEventListener('fetch', function(event) {

    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
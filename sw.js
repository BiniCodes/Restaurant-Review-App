//importScripts('/cache-polyfill.js');

// Install and add cache
self.addEventListener('install',function(event){
	event.waitUntil(
		caches.open('v1').then(function(cache) {
			return cache.addAll([
				'/',
				'/css/styles.css',
				'/data/restaurants.json',
				'/img/1.jpg',
				'/img/2.jpg',
				'/img/3.jpg',
				'/img/4.jpg',
				'/img/5.jpg',
				'/img/6.jpg',
				'/img/7.jpg',
				'/img/8.jpg',
				'/img/9.jpg',
				'/img/10.jpg',
				'/js/dbhelper.js',
				'/js/main.js',
				'/js/restaurant_info.js',
				'/index.html',
				'/restaurant.html'
				]);
		})
	);
});


//Pull the request from the cache
// Added with the help of the following resource: https://codelabs.developers.google.com/codelabs/offline/#7
self.addEventListener('fetch', function(event) {
	console.log(event.request.url);
		event.respondWith(
			caches.match(event.request).then(function(response) {
				// Cache hit - return response
		        if (response) {
		          return response;
		        }

		        //Cumulative request
		        //Resource: https://developers.google.com/web/fundamentals/primers/service-workers/

		        //Clone the original request 
		        const fetchRequestClone = event.request.clone();


		        return fetch(fetchRequestClone).then(
		          function(response) {
			            // Check if we received a valid response
			            if(!response || response.status !== 200 || response.type !== 'basic') {
			              return response;
			            }

						//Clone the original response 
		            	const responseToCacheClone = response.clone();

			            caches.open('v1')
			              .then(function(cache) {
			                cache.put(event.request, responseToCacheClone);
			              });

		            	return response;
		          }
		        );
		      })
		    );
		});
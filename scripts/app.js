// defining the app module of the project
angular.module('bandApp', ['ngRoute','bandControllers','bandDirectives',])
.config(function($routeProvider) {
		 
		$routeProvider
			.when('/', {
		  	templateUrl: 'templates/home.html',
		  	controller: 'HomeController'
		  })

			.when('/home', {
		  	templateUrl: 'templates/home.html',
		  	controller: 'HomeController'
		  })

		  .when('/contact', {
		  	templateUrl: 'templates/contact.html',
		  	controller: 'ContactController'
		  })

		  .when('/band', {
		  	templateUrl: 'templates/band.html',
		  	controller: 'ContactController'
		  })

		  .when('/gigs', {
		  	templateUrl: 'templates/gigs.html',
			controller: 'GigsController'
		  })

		  .when('/music', {
		  	templateUrl: 'templates/music.html',
			controller: 'MusicController'
		  })

		  .when("/video", {
			templateUrl: "templates/video.html",
			controller: "VideoController"
		  })

		 /* .when('/about', {
                  templateUrl: 'templates/about.html',
                  controller: 'AboutController'
       	  })*/

		  .when("/error/:message/:status", {
                 templateUrl: "templates/error.html",
                 controller: 'ErrorController'
          })
          
      	  .otherwise({
		  	redirectTo: '/'
		  });
	});
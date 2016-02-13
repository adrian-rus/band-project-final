angular.module('bandControllers',[])
// declaring all page controllers

.controller('HomeController',function($scope) {

   $scope.title = 'Home';  

})
.controller('BandController',function($scope) {

   $scope.title = 'Band';  
})
.controller('MusicController',function($scope) {

   $scope.title = 'Music';  
})
.controller('VideoController',function($scope) {

   $scope.title = 'Video';  
})
.controller('GigsController',function($scope) {

   $scope.title = 'Gigs';  
})
.controller('ContactController',function($scope) {

   $scope.title = 'Contact';  
})

// declaring error page controller

.controller('ErrorController',function($scope, $routeParams) {
   $scope.message = $routeParams.message;
   $scope.status = $routeParams.status;
})


//declaring navigation controller
.controller('NavController', function($scope){
  $scope.title='';
})

//declaring footer controller
.controller('FooterController',function($scope){
  $scope.title='';
})

.controller('SongsController', function($scope){
  $scope.title='';
});
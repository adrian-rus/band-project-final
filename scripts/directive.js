angular.module('bandDirectives',[])
.directive('bandNav', function(){
	return {
		restrict: 'E',
		scope:{
			band: '=nav'
		},
		templateUrl: 'templates/directives/nav.html'
	}
})
.directive('bandFooter', function(){
  return {
    restrict: 'E',
    scope:{
      band: '=footer'
    },
    templateUrl: 'templates/directives/footer.html'
  }
})
.directive('bandSocial', function(){
  return {
    restrict: 'E',
    scope:{
      band: '=social'
    },
    templateUrl: 'templates/directives/social.html'
  }
})
.directive('albumSongs', function(){
  return{
    restrict: 'E',
    scope:{
      song: '=song'
    },
    templateUrl: 'templates/directives/songs.html'
  }
})

.directive('bandNews', function(){
  return{
    restrict: 'E',
    scope:{
      news: '=news'
    },
    templateUrl: 'templates/directives/news.html'
  }
});

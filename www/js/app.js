var app = angular.module('routing', ['ui.router']);

app.config(function($stateProvider) {

  var feedState = {
    name: 'feed',
    url: '/feed',
    templateUrl: 'templates/tiwtter.html'
  }
  var loginState = {
    name: 'login',
    url: '/login',
    templateUrl: 'templates/enter.html'
  }
  $stateProvider.state(feedState);
  $stateProvider.state(loginState);
});
// Controller via angular JSON
/*app.controller("FeedController", function($scope,$http){
  var tweets;
  $http.get('ayb.json').then(function(a) {
      $scope.tweets = a.data;
  });*/
  // Controller via php JSON
  app.controller('FeedController', function ($scope, $http) {
    $http.get('http://localhost:8888/feed.php').then(function(s) {
    $scope.tweets = s.data;
  });
});

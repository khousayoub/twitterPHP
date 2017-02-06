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
    templateUrl: 'templates/sign.html'
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
    $http.get('http://localhost:8888/api/feed.php').then(function(s) {
    $scope.tweets = s.data;
    });
  });

  app.controller("form", ['$scope', '$http', function($scope, $http) {
        $scope.url = 'http://localhost:8888/api/signin.php';
        $scope.submit = function() {
                $http.post($scope.url, {"user": $scope.user, "pwd": $scope.pwd}).
                    success(function(data, status) {
                            console.log(data);
                            $scope.status = status;
                            $scope.data = data;
                            $scope.result = data;
                        })
        }
    }]);

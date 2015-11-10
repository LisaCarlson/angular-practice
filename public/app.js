    angular.module('MyApp', ['ngRoute'])
      .controller('HomeController', function($scope, $http) {

      })
      .controller('ChatController', function ($scope, $http) {
        $http.get('https://api.github.com/zen').then(function(response){
          $scope.zenData = response.data;
        });
        $http.get('https://still-tundra-8387.herokuapp.com/messages').then(function(response){
          $scope.messages = response.data;
        });
        $scope.submit = function () {
          var dataObj = {
            name : $scope.name,
            content : $scope.message,
          };  
          $http.post('https://still-tundra-8387.herokuapp.com/messages', {message: dataObj}).then(function(response){
              console.log(response.data)
          }, function(){
              console.log('error');
          });
          $scope.name='';
          $scope.message='';
        }
      })
      .controller("MovieController", function ($scope, $http) {
        $scope.search = function() {
          $http.get('http://www.omdbapi.com/?s=' + $scope.title.toLowerCase() + '&r=json').then(function (response) {
            $scope.movies = response.data.Search;
          });
        }
      })
      .config(function($routeProvider, $locationProvider) {
        $routeProvider
          .when('/', {
            templateUrl: '/partials/home.html',
            controller: 'HomeController'
          })
          .when('/movies', {
            templateUrl: '/partials/movies.html',
            controller: 'MovieController'
          })
          .when('/chat', {
            templateUrl: '/partials/chat.html',
            controller: 'ChatController'
          })
          .when('/page-not-found', {
            templateUrl: '/partials/error.html'
          })
          .otherwise({
            redirectTo: '/page-not-found'
          });
        $locationProvider.html5Mode(true);
      })
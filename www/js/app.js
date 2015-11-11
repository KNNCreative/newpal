angular.module('starter', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('main', {
      url: '/main',
      templateUrl: 'templates/main.html',
      controller: 'AppController'
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/main');
})

.controller('AppController', function($scope) {
  $scope.new_pal = function() {
    console.log('getting new pal...');
  }
})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

  });
})

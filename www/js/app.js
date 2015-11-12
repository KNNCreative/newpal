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
  // var apiKey = '45404892';
  // var sessionId = '2_MX40NTQwNDg5Mn5-MTQ0NzI4NTkyMTAzOX5wSWtpcVhkNWF1N3FoSlV4NnA0MUxld0x-UH4';
  // var token = 'T1==cGFydG5lcl9pZD00NTQwNDg5MiZzaWc9OGZkNzY3MTg1NjJhN2ZkYzFmODQ2NjE1YjRiNTYxYmNjODJlNzlmOTpyb2xlPXB1Ymxpc2hlciZzZXNzaW9uX2lkPTJfTVg0ME5UUXdORGc1TW41LU1UUTBOekk0TlRreU1UQXpPWDV3U1d0cGNWaGtOV0YxTjNGb1NsVjRObkEwTVV4bGQweC1VSDQmY3JlYXRlX3RpbWU9MTQ0NzI4NTkzMyZub25jZT0wLjM3NjY2Njc2ODEzNjMwOTE3JmV4cGlyZV90aW1lPTE0NDk4Nzc5MTImY29ubmVjdGlvbl9kYXRhPQ==';
  //
  // OTSession.init(apiKey, sessionId, token);
  // $scope.streams = OTSession.streams;

  $scope.new_pal = function() {
    console.log('getting new pal...');

    var apiKey = '45404892';
    var sessionId = '2_MX40NTQwNDg5Mn5-MTQ0NzI4NTkyMTAzOX5wSWtpcVhkNWF1N3FoSlV4NnA0MUxld0x-UH4';
    var token = 'T1==cGFydG5lcl9pZD00NTQwNDg5MiZzaWc9OGZkNzY3MTg1NjJhN2ZkYzFmODQ2NjE1YjRiNTYxYmNjODJlNzlmOTpyb2xlPXB1Ymxpc2hlciZzZXNzaW9uX2lkPTJfTVg0ME5UUXdORGc1TW41LU1UUTBOekk0TlRreU1UQXpPWDV3U1d0cGNWaGtOV0YxTjNGb1NsVjRObkEwTVV4bGQweC1VSDQmY3JlYXRlX3RpbWU9MTQ0NzI4NTkzMyZub25jZT0wLjM3NjY2Njc2ODEzNjMwOTE3JmV4cGlyZV90aW1lPTE0NDk4Nzc5MTImY29ubmVjdGlvbl9kYXRhPQ==';
    console.log('getting new pal 2222222222...');

    var publisher = TB.initPublisher(apiKey,'publisher');
    console.log('getting new pal 333333333333...');

    var session = TB.initSession( apiKey, sessionId );
    console.log('getting new pal 444444444...');

    session.on({
      streamCreated: function( event ){
        console.log('before subscribe after stream created.....');
        session.subscribe(event.stream, 'subscriber', {insertMode: 'append'});
      }
    });

    session.updateViews();

    // console.log('before subscribe on the fly.....');
    // session.subscribe(event.stream, 'subscriber', {insertMode: 'append'});

    // session.connect(token, function(){
    //   console.log('before publish.....');
    //   session.publish(publisher);
    // });

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

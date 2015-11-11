var app = {
  // Application Constructor
  initialize: function() {
    this.bindEvents();
  },
  // Bind Event Listeners
  //
  // Bind any events that are required on startup. Common events are:
  // 'load', 'deviceready', 'offline', and 'online'.
  bindEvents: function() {
    console.log('bind event...');
    document.addEventListener('deviceready', this.onDeviceReady, false);
  },
  // deviceready Event Handler
  //
  // The scope of 'this' is the event. In order to call the 'receivedEvent'
  // function, we must explicity call 'app.receivedEvent(...);'
  onDeviceReady: function() {
      console.log('devide ready....');
      var apiKey = '45404892';
      var sessionId = '1_MX40NTQwNDg5Mn5-MTQ0NzE5NDEyNjA2Mn5BQ3F4a1ptVUwrY0pzcks1VDJta200N0N-UH4';
      var token = 'T1==cGFydG5lcl9pZD00NTQwNDg5MiZzaWc9NjE2NjNkZWNmN2MwNTk3M2Y2ZDdhNmI0MWVhMGM4NmMyZDBmYjQxNjpyb2xlPXB1Ymxpc2hlciZzZXNzaW9uX2lkPTFfTVg0ME5UUXdORGc1TW41LU1UUTBOekU1TkRFeU5qQTJNbjVCUTNGNGExcHRWVXdyWTBwemNrczFWREp0YTIwME4wTi1VSDQmY3JlYXRlX3RpbWU9MTQ0NzE5OTM5NyZub25jZT0wLjk0MjQ3NjgxMzQyNTYwNDMmZXhwaXJlX3RpbWU9MTQ0NzI4NTc5Nw==';

      // Very simple OpenTok Code for group video chat
      var publisher = TB.initPublisher(apiKey,'pub');

      var session = TB.initSession( apiKey, sessionId );
      session.on({
        streamCreated: function( event ){
            session.subscribe(event.stream, 'sub', {insertMode: 'append'});
        }
      });

      session.connect(token, function(){
        // console.log('session connected.....');
        session.publish(publisher);
      });

  },
  // Update DOM on a Received Event
  receivedEvent: function(id) {
    // console.log('received event ', id);
  }
};

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  var saw = new Wad({source  : 'sawtooth'});

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);

    },
    'mousedown .play': function(){
      saw.play();
    },
    'mouseup .play': function(){
      saw.stop();
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

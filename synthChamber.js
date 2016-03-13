Notes = new Mongo.Collection("notes");

if (Meteor.isClient) {

  var saw = new Wad({source  : 'sawtooth'});

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'mousedown .play': function(){
      var id = Notes.insert({pitch: (Math.random()*(600-60) + 60)});
      Session.set('id', id);
    },
    'mouseup .play': function(){
      Notes.remove(Session.get('id'))
    }
  });

  Notes.find().observeChanges({
    added: function (id, fields) {
      saw.play({pitch: fields.pitch, label: id});
    },
    removed: function (id) {
      saw.stop(id);
    }
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

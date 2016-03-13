# synthCamber
This is a MeteorJS project that uses the phone's accelerator and a js synthesizer library to play music collaboratively

You can see a demo of this working here: http://synthchambertest.meteor.com/

## Lessons learned
The way this works is everytime someone plays a note, it adds it to the Notes collection in the db. There are listeners 
that start/stop playing the sound when the db updates. Because of this, there's quite a bit of lag with when the app updates.

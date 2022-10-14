var Emitter = require('./emitter');

var emtr = new Emitter();

// create two listeners that responds when the event "greet" happens
emtr.on('greet', function() {
    console.log('Somewhere, someone said hello.');
});

emtr.on('greet', function() {
    console.log('A greeting occurred!');
});

// to make it work, when I log the Hello I have to say it to my emitter
// in this case I manually emit the event
console.log('Hello!');
emtr.emit('greet');
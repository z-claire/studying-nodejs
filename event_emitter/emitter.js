/// NOT USED
/// EXAMPLE OF AN EMITTER WRITTEN IN JAVASCRIPT

// I create a constructor so I can create more emitters
function Emitter() {
    this.events = {};
}

// add methods to the prototype of every emitter created

/**
 * Add a listener
 * @param {*} type type of the event I want
 * @param {*} listener function that respond to the event
 */
Emitter.prototype.on = function(type, listener) {
    // add an array property named with the value of "type"
    this.events[type] = this.events[type] || [];
    // push the "listener" function into the array
    this.events[type].push(listener);

    // the result will be:
    // {
    //      onFileSave: [ function(){}, function(){}, ...],
    //      gotSomething: [function(){}, ...], 
    //      ...
    // }
}

/**
 * Say that something happened
 * @param {*} type type of the event happened
 */
Emitter.prototype.emit = function(type) {
    // check if the event happend is a property of the object
    if (this.events[type]) {
        // I loop this property and execute all the function inside it
        this.events[type].forEach(function(listener) {
            listener();
        });
    }
}

// make this available, so I can create as many emitters as I want
module.exports = Emitter;
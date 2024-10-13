// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
    constructor() {
      this.events = {};  
    }
  

    on(eventName, callback) {
      if (!this.events[eventName]) {
        this.events[eventName] = [];  // Create an array for the event if it doesn't exist
      }
      this.events[eventName].push(callback);  // Add the callback to the event's array
    }
  

    trigger(eventName) {
      if (this.events[eventName]) {
        this.events[eventName].forEach(callback => {
          callback();  // Execute each callback registered for the event
        });
      }
    }
  

    off(eventName) {
      delete this.events[eventName];  // Remove the event and all its callbacks
    }
  }
  
module.exports = Events;

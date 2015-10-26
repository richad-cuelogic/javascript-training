// 1. Create an event Bus, the following example demonstrates how it will be used

// var event = new EventBus();

// // add a event listener for an event
// event.on('something',function(data) {
//   console.log(data);
// });

// // trigger the event, second argument will be the data passed
// event.trigger('something',{name : 'Pranay'});

// // stop listening to that event
// event.off('something');


// Define a new event.

function EventTarget(){
    this._listeners = {};
}

EventTarget.prototype = {

    constructor: EventTarget,

    on: function(type, listener){
        if (typeof this._listeners[type] == "undefined"){
            this._listeners[type] = [];
        }

        this._listeners[type].push(listener);
        
    },

    trigger: function(event,data){
        if (typeof event == "string"){
            event = { type: event };
        }
        if (!event.target){
            event.target = this;
        }
        if (typeof data == "object"){
            event.data = data;
        }


        if (!event.type){  //falsy
            throw new Error("Event object missing 'type' property.");
        }

        if (this._listeners[event.type] instanceof Array){
            var listeners = this._listeners[event.type];
            for (var i=0, len=listeners.length; i < len; i++){
                listeners[i].call(this, event);
            }
        }
    },

    off: function(type, listener){
        if (this._listeners[type] instanceof Array){
            var listeners = this._listeners[type];
            for (var i=0, len=listeners.length; i < len; i++){
                if (listeners[i] === listener){
                    listeners.splice(i, 1);
                    break;
                }
            }
        }
    }
};

var target = new EventTarget();
function handleEvent(event){
    console.log(event.type);
};

target.on("something", handleEvent);
target.trigger("something", {name : 'Pranay'});    
target.off("something", handleEvent);
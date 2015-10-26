
function EventBus(){
    this._listeners = {};
}

EventBus.prototype = {

    constructor: EventBus,

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
        if (typeof data == "object"){
            event.data = data;
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

var events = new EventBus();
function handleEvent(event){
   console.log("Event type :",event.type,"Event data :", event.data);
};

events.on("myEvent", handleEvent);
events.trigger("myEvent", {name : 'Pranay'});    
events.off("myEvent", handleEvent);

events.on("myEventRicha", handleEvent);
events.trigger("myEventRicha", {name : 'Richa'});    
events.off("myEventRicha", handleEvent);
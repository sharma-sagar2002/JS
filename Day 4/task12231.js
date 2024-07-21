class EventEmitter {
    // constructor to initialize object
    constructor() {
      this.events = {};
    }

    // adds an new event or pushes new callback to the existing event
    on(eventName, callback) {
        // if event does not exists in the object
      if(!this.events[eventName]) {
        // creating array of a callbacks for a perticular event 
        this.events[eventName] = [];
      }
      // pushing a new callback in the event callbacks array
      this.events[eventName].push(callback);
    }
    
    //calls every callback in the callback array of a particular event 
    emit(eventName, ...args) {
      // if event callback array exists 
      if(this.events[eventName]) {
        this.events[eventName].forEach(callback => callback(args));
      }
    }
    
    // removing a callback from a particular event 
    off(eventName, callback) {
        // removing a particular callback from the event callback array
         if(this.events[eventName]) {
           // this.events[eventName] = this.events[eventName].filter(cb => cb != callback);
           this.events[eventName].splice(this.events[eventName].indexOf(callback),1);
         }
         console.log(this.events);
       }
     }
  
  // creating an object of EventEmitter class
  const emitter = new EventEmitter();
  const cb1= data => {
    console.log("Callback1");
  };
  // adding new event handler
  emitter.on('onClick',cb1);
  

  // executing callbacks on a perticular event 
  emitter.emit('onClick');
  // removing a particular event 
  emitter.off('onClick',cb1);



  const emitter1 = new EventEmitter();
  emitter1.on('test1',(e)=>{
    console.log('test1',e)
    // if(e.idName==='Passport'){
    //     // 
    // }
  })

  emitter1.off('test1',(e)=>{
    console.log('test1',e)
  })

  emitter1.emit('test1',{idName: 'Passport'})


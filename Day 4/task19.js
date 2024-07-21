class LRUCache {
    // constructor to intialize capacity and map
    constructor(capacity) {
      this.cache = [];
      this.capacity = capacity;
    }
    
    get(key) {
      if (!this.cache.find((cache)=>{
           
      })) return -1;
      const v = this.cache.get(key);
      this.cache.delete(key);
      this.cache.set(key, v);
      return this.cache.get(key);
    };
    // adding a new data in the cache 
    put(key, value) {
      // if data exists then modify
      if (this.cache.has(key)) {
        this.cache.delete(key);
      }
      // simply add to the map
      this.cache.set(key, value);
      //checking if the size is full
      if (this.cache.size > this.capacity) {
        this.cache.delete(this.cache.keys().next().value);  // keys().next().value returns first item's key
      }
  
    }
    displayDetails(){
      for(const [key,value] in  this.cache ){
        console.log(key+" "+value);
      }
    }
    
  }
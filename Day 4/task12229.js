// promise implementation
class Promise{

    // onstructor
    constructor(executor) {

        this.status = 'pending'; // shows current status of promise
        this.value= '';  // any value to pass on to the callbacks execution
        this.handlersList = [];
        


// Resolve function implementation
     const resolve = (value) => {

        // if status is pending update it to fullfilled and call the callback for resolve promise
        if(this.status === 'pending') {
            this.status = 'fullfilled';
            this.value = value;
            this.handlersList.forEach(cb => cb.onFulfilled(value))
        }
     };

 // Reject function implementation
     const reject = (value) => {

        if(this.status === 'pending') {
            this.status = 'rejected';
            this.value = value;
            this.handlersList.forEach(cb => cb.onRejected(value))
        }
     };

      // executor function
      executor(resolve,reject);
    }

    // Method to run callbacks for fulfilled and rejection case
    then(onFulfilled, onRejected) {
        return new Promise((resolve,reject) => {
            if(this.status=='fullfilled') {
                setTimeout(()=>{
                    resolve(onFulfilled(this.value))
                })
            }
            else if(this.status=='rejected') {
                setTimeout(()=>{
                    reject(onRejected(this.value))
                })
            } 
            else{
                this.handlersList.push({onFulfilled,onRejected})
            }
        })
    }

}


const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('resolved'), 1000);
});

promise.then(value => console.log(value))
function square(val){
    return val*val;
}

function sqrt(val){
    if(val<0) {
        throw new Error ("Can't find square root of a negative number");
        return ;
    }
    return Math.sqrt(val);
}

function sinVal (val){
    return Math.sin(val);
}
function logVal (val){
    return Math.log10(val);
}
function power (x,y){
    return Math.pow(x,y);
}
function circleArea(rad){
    if(rad<0) {
        throw new Error("Radius can't be negative");
    }
    return Math.PI*rad*rad;
}
//mapper object storing functions with their names
const calcMapper = {
    'square': (val)=>{
      try{
        square(val)
      }
      catch(e){
        console.log(e);
      }
    } , 
    'sqrt': (val)=> {
        try{
           sqrt(val);
        }
        catch(e){
            console.log(e);
        }
    } ,
    'sinVal': (val)=> {
        try{
            sinVal(val)
        }
        catch(e){
            console.log(e);
        }
    },
    'logVal' : (val)=>{
            try{
                logVal(val)
            }
            catch(e){
                console.log(e);
            }
    },
    'power' : (x,y)=> {
        try{
            power(x,y)
        }
        catch(e){
            console.log(e);
        }
    },
    'circleArea' : (rad)=> {
        try{
            circleArea(rad)
        }
        catch{
            console.log(e);
        }
    },

}

//printing the square of any number
console.log(calcMapper.square(2));
//printing circle area of given radius
calcMapper.circleArea(10);
//printing sin of passed radian angle
console.log(calcMapper.sinVal(Math.PI/2));








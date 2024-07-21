//logic 1


var expected = {foo: 5, bar: 6};
var actual = {foo: 5, bar: 6}

let esize=Object.keys(expected).length;
let asize=Object.keys(actual).length;
if(asize!=esize) {
    console.log("Failed, not equal");
    return ;
}
function assertObject(expected , actual){
    for(const key in expected ){
        if(expected [key]!=actual[key]){
            console.log('Failed, not equal');
        }
    }
    console.log("Passed");
}

assertObject(expected,actual);





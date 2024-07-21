https://localhost:400?keyOne=value one&keyTwo=value Two&keyThree=value Three
https://localhost:400?keyOne=value OnekeyTwo=value TwokeyThree=value Three

const queryParams={
    "keyOne": "value One",
    "keyTwo": "value Two",
    "keyThree": "value Three",
  }

// using for-in loop
  let url= 'https://localhost:400'; // /v1/all-user
  let newUrl=url;
// read about, join, reduce
// should be done with above methods
  for(const key in queryParams){
       newUrl+=key+"="+queryParams[key];
  }
  newUrl.slice(0,newUrl.length-1);
  console.log(newUrl)




  




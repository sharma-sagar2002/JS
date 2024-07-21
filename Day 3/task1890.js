const obj={
    "keyOne": "value One",
    "keyTwo": "value Two",
    "keyThree": "value Three",
    "keyFour": {
      "keyA": true,
      "keyB": false,
      "keyC": {
        "keyCOne": "key C one value",
        "keyCTwo": "key C two value",
        "keyCThree": 1234
      }
    }
  }

  const childManipulation = (prevKey, obj) => {
    let newObj = {};
  
    for (let element in obj) {
      if (typeof obj[element] == "object" && Object.keys(obj[element]).length > 1) {
        let newObjKeyName = prevKey + "." + element;
        let data = childManipulation(newObjKeyName, obj[element]);
        
        for (let key in data) {
          newObj[key] = data[key];
        }

      }
     else {
        newObj[prevKey + "." + element] = obj[element];
      }

    }
    return newObj;
  };

 


  const ObjectManipulation = (obj) => {
   // answer object 
    let result = {};
  
    //traversing the original object
    for (let element in obj) {


      // object has object in it 
      if ( typeof obj[element] == "object" && Object.keys(obj[element]).length > 1) {

        // making single level nested object 
        let data = childManipulation(element, obj[element]);
  
        // traverse the return json 
        for (let key in data) {
          // append the json key with the value
          result[key] = data[key];
        }
      }

      // normal json 
      else {
           result[element] = obj[element];
        }

    }
    return result;
  };
  
  const result = ObjectManipulation(obj);
  console.log(result);

//  improve this and use single function
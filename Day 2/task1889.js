const details=[
    {
      "batch_id": "123",
      "name": "Tony",
      "contact": "9872276210"
    },
    {
      "batch_id": "231",
      "name": "Steve",
      "contact": "7876543210"
    },
    {
      "batch_id": "123",
      "name": "Bruce",
      "contact": "6776543210"
    },
    {
      "batch_id": "321",
      "name": "Clint",
      "contact": "8954643210"
    },
    {
      "batch_id": "123",
      "name": "Peter",
      "contact": "7666543210"
    },
    {
      "batch_id": "231",
      "name": "Phil",
      "contact": "8896543210"
    },
    {
      "batch_id": "321",
      "name": "Nick",
      "contact": "9876521210"
    }
  ]


let map =new Map();
details.forEach((detail)=>(map.set(detail.batch_id,true)));
let result = [];
   for(const [key,value] of map){

    // creating array of objects having same id 
   let idBasedArray= details.filter((detail)=> (detail.batch_id==key))
   let newIdBasedArray =[];
  
   for(let i=0;i<idBasedArray.length;i++){
    // removing batch_id from each object 
       let sameIdObj = new Object();
       sameIdObj.name=idBasedArray[i].name;
       sameIdObj.contact=idBasedArray[i].contact;
    // storing objects without batch_id
       newIdBasedArray.push(sameIdObj);
   }
   console.log(newIdBasedArray);
   // creating object having key as batch id and value is array 
   let obj ={};
   obj[key]=newIdBasedArray;
   //pushing into result array
   result.push(obj);
  
 }
   
 console.log(result);

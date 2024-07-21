const convertToFarehneit= (calcius)=>{
     let res= (calcius * (9/5))+32;
     return res;
}
console.log(squareArea)
const convertToCelsius = (farenheit)=>{
  let res = (farenheit-32)*(9/5);
  return res;
}
const squareArea = (side)=>{         //hoisting
     let area=side*side;
     return area;
}

const circleArea = (radius)=>{

}

const calculateArea  =(squareArea,circleArea,val)=>{       //make it generic
      console.log("Area of square is : "+squareArea(val));
      console.log("Area of circle is : "+circleArea(val));
}

const convertor = (convertToCelsius,convertToFarehneit,val)=>{  //make it generic
    console.log(val+" Into Farenheit is : "+convertToFarehneit(val));
    console.log(val+" Into Celsius is : "+convertToCelsius(val));


}

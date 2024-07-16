const convertToFarehneit= (calcius)=>{
     let res= (calcius * (9/5))+32;
     return res;
}

const convertToCelsius = (farenheit)=>{
  let res = (farenheit-32)*(9/5);
  return res;
}
const squareArea = (side)=>{
     let area=side*side;
     return area;
}

const circleArea = (radius)=>{

}

const calculateArea  =(squareArea,circleArea,val)=>{
      console.log("Area of square is : "+squareArea(val));
      console.log("Area of circle is : "+circleArea(val));
}

const convertor = (convertToCelsius,convertToFarehneit,val)=>{
    console.log(val+" Into Farenheit is : "+convertToFarehneit(val));
    console.log(val+" Into Celsius is : "+convertToCelsius(val));


}

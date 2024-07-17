
// spread or rest operator usage 
let arr=['+','-']
function calculatePrice(char a ,...num){           //add the opertor paramter also
    //diff btw spread and rest operators
   console.log(num);
   let sum=0;
   let val=0;
   
   for(let i=0;i<num.length;i++){
    sum+=num[i];
    val-=num[i];
   }

   console.log("The addititon of all the products are : "+sum);
}

calculatePrice('+',10,20,);
calculatePrice();
calculatePrice(10,10,10,10);


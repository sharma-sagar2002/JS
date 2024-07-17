// Calculator Expression
function processExpression(exp){
    let operandSt =[];
    let operatorSt=[];
    for(let i=0;i<exp.length;i++){
        
       // if it is digit
          if( exp[i]>='0'&& exp[i]<='9'){

      //making a multiple digit number
            let num=0;
            while(exp[i]>='0' && exp[i]<='9'){
                num=num*10+(exp[i]-'0');
                i++;
                if(i>exp.length) {
                  break;
                }
           }

           i--;
           operandSt.push(num);

          }


       // open bracket
          else if(exp[i]=='(') {
            operatorSt.push(exp[i]);
          }


      // closing bracket
          else if(exp[i]==')') {
            while(operatorSt[operatorSt.length-1]!='('){
                let result= calculateResult(operandSt,operatorSt);
                 operandSt.push(result);
            }
            operatorSt.pop();
          }

       // operator
           else   {
                
                //checking precedence
                while((findPrecedence(operatorSt[operatorSt.length-1])>findPrecedence(exp[i])) && (operatorSt.length!=0)){
                   let result= calculateResult(operandSt,operatorSt);
                   operandSt.push(result);
                }

                  operatorSt.push(exp[i]);
                    
          }
    }
    
    // Calculating final answer
    while(operatorSt.length!=0){
        let res=calculateResult(operandSt,operatorSt);
        operandSt.push(res);
    }
   //returning final answer
   return operandSt[operandSt.length-1];

}

// checking for operator
function isOperator(ch){
    if(ch=='+'|| ch=='*'|| ch=='/'|| ch=='-'){     //use include
        return true;
    }
    return false;
}

// returning precedence of operators
function findPrecedence(ch){
    if(ch=='^') return 3;                 //do not use if conditions
    if(ch=='/' || ch=='*') return 2;
    if(ch=='+' || ch=='-') return 1;
    return 0;
    
}

// processing 
function calculateResult(operandSt, operatorSt){
    let operator=operatorSt[operatorSt.length-1];
    operatorSt.pop();
    let n1=operandSt[operandSt.length-1];
    operandSt.pop();
    let n2=operandSt[operandSt.length-1];
    operandSt.pop();

    if(operator=='+'){
        return n1+n2;   //review points ['+','-'] use include
    }
    if(operator == '*') {
        return n1*n2;
    }
    if(operator=='/'){
        return n2/n1;
    }
    if(operator == '-') {
        return n2-n1;
    }
  
}
console.log(processExpression("2*(5*(3+6))/15-2"));

console.log(eval("2*(5*(3+6))/15-2"));
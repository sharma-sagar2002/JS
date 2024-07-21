function minReversal(exp){
    let openBraces=0; let closedBraces=0;
     // calculating no of closed and open braces
    for(const brace of exp){
        if(brace==='(') openBraces++;
        else closedBraces++;
    }
    
    // finding of calculating the min reversals to make expression valid 
     return Math.abs(openBraces-closedBraces)/2;
}

// printing min no of reversal needed to make expression balanced 
console.log(minReversal("((()"));
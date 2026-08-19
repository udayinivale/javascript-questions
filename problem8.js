function power(num){
    while(num>1){
        if (num%3!=0){
        return false;
        }
        num=num/3;
    }
    return num===1;
} 
console.log(power(27));
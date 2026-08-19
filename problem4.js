function missingnumber (arr){
    let n = arr.length + 1;
    let expectedsum = n*(n+1)/2;
    let actualsum=0;
    for(let i=0; i<arr.length; i++){
        actualsum = actualsum+arr[i];
    } 
    return expectedsum - actualsum;
}
let numbers = [1,2,3,5,6];
console.log(missingnumber(numbers));
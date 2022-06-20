//1.An array is given, return the sum of all the positives numbers. 
//const input = [ 1, -5, 2, 10, -30, 29, 50];


const input = [ 1, -5, 2, 10, -30, 29, 50];

function SumOfPositiveIntegers(input){

let sum=0;
for(let i=0;i<input.length;i++){
  if(input[i]>0){
    sum=sum+input[i];
  }
}
return sum;
}

let result=SumOfPositiveIntegers(input)
console.log(` ${result} is the sum of positive numbers in the given array`);
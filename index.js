// Function that reverse a string
function reverse(str){
    return(str.split("").reverse().join("")) 
}
// Function that count the number of characters
function countCharacters(string){
    return(string.length)
}
// Function that capitalize the first letter
function capitalize(sentence){
    const capitalizeWord = (word) => {return (word[0].toUpperCase() + word.slice(1).toLowerCase())};
    return sentence.split(" ").map(capitalizeWord).join(" ");
}
// Function that find the minimum and maximum in an array
let numbers = []
function maxAndMin(numbers){
    let max= Math.max(...numbers);
    let min= Math.min(...numbers);
    return (`Max: ${max}, Min: ${min}`)
}
// Function that calculates the sum of all elements in an array.
function sum(arr) {  
    let sum = 0;
    for (let i = 0; i < arr.length; i++)  
    sum += arr[i];  
    return sum;  
}  
// Function that filter elements in an array.
function filterNum(arr){
    if(item){
        item === condition
        return arr.filter(item === condition)
    }
}
// Function that factorial of a number
function factorial(n){
    if(n < 0){
        return "number has to be positive."
    }
    if(n == 0 || n == 1){
        return 1;
    }else{
        return n * factorial(n-1);
    }
}
// Function to check if a number is prime or not.
function numPremier(num) {
    for(let i = 2; i < num; i++)
      if(num%i === 0) return (`${num}: N'est pas un nombre premier`);
    return num > 1;
  }
// Function to generate the Fibonacci sequence 
  function fibonacci(num) {
    if (num == 1)
        return 0;
    if (num == 2)
        return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
}

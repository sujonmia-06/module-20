
function factorial(num){
    fact = 1;
    for (let i = 1; i <= num; i++){
        fact *= i;
    }
    return (fact);
}

let firstFactorial = factorial(20);
console.log("the factorial of 20 is", firstFactorial);

let secondFactorial = factorial(12);
console.log("the factorial of 12 is", secondFactorial);

let thirdFactorial = factorial(15);
console.log("the factorial of 15 is", thirdFactorial);

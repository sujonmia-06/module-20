function factorial(num){
    fact = 1;
    i = 1;
    while (i <= num){
        fact *= i;
        i++;
    }
    return fact;
}

let firstFactorial = factorial(9);
console.log(firstFactorial);

let secondFactorial = factorial(21);
console.log(secondFactorial);

let thirdFactorial = factorial(15);
console.log(thirdFactorial);

function factorial(num){
    fact = 1;
    i = num;
    while (i >= 1){
        fact *= i;
        i--;
    }
    return fact;
}

let first1Factorial = factorial(9);
console.log(first1Factorial);

let second1Factorial = factorial(21);
console.log(second1Factorial);

let third1Factorial = factorial(15);
console.log(third1Factorial);
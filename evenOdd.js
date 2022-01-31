function isEven(num){
    console.log(`is ${num} even number?`)
    if (num % 2 == 0){
        return true;
    }
    return false;
}

let myNum = 825672;
let evenOdd = isEven(myNum);
console.log(evenOdd);
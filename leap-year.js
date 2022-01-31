

function leapYear(year){
    if ( year % 100 != 0 && year % 4 == 0 || year % 400 == 0){
        return true;
    }
    else{
        return false;
    }
}

let myYear = 2028;
let isLeapYear = leapYear(myYear);
console.log(isLeapYear);
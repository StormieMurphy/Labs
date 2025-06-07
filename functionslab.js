// Task 1
function combineStrings(stringOne, stringTwo){
    return stringOne + stringTwo;
};

console.log(combineStrings("Hello ", "world!"));

// Task 2

function addNumbers(valueOne, valueTwo = 15){
    return valueOne + valueTwo;
};

console.log(addNumbers(40,5));
console.log(addNumbers(30));

// Task 3

const combineStringsTwo = (stringOne, stringTwo) => stringOne + stringTwo;
console.log(combineStringsTwo("Hello ", "world!"));
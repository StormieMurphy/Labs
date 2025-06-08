// Task 1
function pemdasEquation(){
    result = 10 + 32 * 12 / 3;
    resultTwo = (30 + 10) + 2 ** 5 * 12 / (1 + 2);
    console.log(result);
    console.log(resultTwo);
};

pemdasEquation();

// Task 2

function assignmentOperators(paramOne, paramTwo){
    paramOne += paramTwo;
    console.log(paramOne);
    paramOne *= paramTwo;
    console.log(paramOne);
    paramTwo %= paramOne;
    console.log(paramTwo);
}

assignmentOperators(5,10);

// Task 3

function comparisonOperators(paramOne, paramTwo){
    const valueOne = paramOne == paramTwo;
    const valueTwo = paramOne != paramTwo;
    const valueThree = paramOne === paramTwo;
    console.log(`${paramOne} is equal value to ${paramTwo} is ${valueOne}, ${paramOne} is not equal to ${paramTwo} is ${valueTwo}, and ${paramOne} is equal in value and type to ${paramTwo} is ${valueThree}.`);
    
};

comparisonOperators(10, "10")
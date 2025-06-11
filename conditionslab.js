// Task 1

function conditionalFunc(paramOne, paramTwo){
    if (paramOne = paramTwo){
        console.log(`${paramOne} is equal to ${paramTwo}.`)
    }
};

conditionalFunc(15, 15);
conditionalFunc(15, "15");
conditionalFunc("dog", "dog");

// Task 2
function gradeEvaluator(grade) {
    switch (grade) {
        case "E":
            console.log("Excellent")
            break;
        case "V":
            console.log("Very Good")
            break;
        case "G":
            console.log("Good");
            break;
        case "A":
            console.log("Average");
            break;
        case "F":
            console.log("Fail");
            break;
        default:
            console.log("Not a valid grade");
            break;
    }

};
gradeEvaluator("E");
gradeEvaluator("V");
gradeEvaluator("G");
gradeEvaluator("A");
gradeEvaluator("F");
gradeEvaluator("abc");
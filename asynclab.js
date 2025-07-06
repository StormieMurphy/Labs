// Task 1
function taskRun (arg) {
        let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof arg == 'number') {
                resolve(arg)
            } else {
                reject("The argument is not a valid number.")
            }
        }, 2000)
    })
    promise.then((arg) => {
    console.log(`The task was ran ${arg} times`);
    }).catch((error) => {
    console.log(error);
    })
    return promise;
}
// taskRun(5);
// taskRun("a");

// Task 2
console.log("Let's start the task");
async function asyncAwaitFunc(arg) {
    try {
        const numTimes = await taskRun(arg);
    } catch (error) {
        console.log(error);
    }
}
// asyncAwaitFunc(5);

// Task 3

for (index = 0; index < 6; index++) {
    asyncAwaitFunc(index);
}
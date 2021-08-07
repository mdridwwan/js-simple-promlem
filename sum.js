function totalNumbers(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum = sum + element;
    }
    return sum;

}
let numbers = [23, 23, 34, 54, 45];
const totalSum = totalNumbers(numbers);
console.log(totalSum);

///////////////////result system/////////////////////
function grateSysteam(marks) {
    switch (true) {
        case (marks >= 80):
            console.log("your result is: A+");
            break;
        case (marks > 80 || marks >= 70):
            console.log('Your Result Is: A');
            break;
        case (marks > 70 || marks >= 60):
            console.log('Your Result is : A-');
            break;
        case (marks > 60 || marks >= 50):
            console.log('Your result is: B');
            break;
        case (marks > 50 || marks >= 40):
            console.log('Your result is: C');
            break;
        case (marks > 40 || marks >= 33):
            console.log('Your result is: D');
            break;
        case (marks > 33 || marks >= 0):
            console.log('Your result is: F');
            break;
        default:
            console.log("Your Result IS Error");
            break;

    }

}
let marks = 1001;
let result = grateSysteam(marks);
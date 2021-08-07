function largestElement(numbers) {
    let largest = numbers[0];
    for (var i = 0; i < numbers.length; i++) {
        let element = numbers[i];
        if (largest < element) {
            largest = element;
        }
    }
    return largest;
}

let numbers = [-10, -29, -39, -30, -49, -22, -70];
const oldest = largestElement(numbers)
console.log("oldest: ", oldest);


const arr = [20, 39, 39, 39, 384, 3];
var min = Math.min.apply(Math, numbers);
console.log(min);
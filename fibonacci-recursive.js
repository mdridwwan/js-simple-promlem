// ith = (i - 1)th + (i - 2)th;

// function recursiveSeries(n) {
//     if (n == 0) {
//         return 0;
//     }
//     if (n == 1) {
//         return 1;
//     }
//     return recursiveSeries(n - 1) + recursiveSeries(n - 2);
// }
// const fiborecursive = recursiveSeries(10);
// console.log(fiborecursive);
function recursiveSeries(n) {
    if (n == 0) {
        return [0];
    }
    if (n == 1) {
        return [0, 1];
    }
    const fibo = recursiveSeries(n - 1);
    fibo[n] = fibo[n - 1] + fibo[n - 2];
    return fibo;
}
const fiborecursive = recursiveSeries(10);
console.log(fiborecursive);
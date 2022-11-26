//Brute force

// const average = (K, arr) => {
//     const result = []

//     for (let i = 0; i < arr.length - K + 1; i++) {
//         let sum = 0.0
//         for (let j = i; j < i + K; j++) {
//             sum += arr[j]
//         }
//         result.push(sum / K)
        
//     }
//     return result
// }



const average = (K, arr) => {
    const result = [];
    let windowSum = 0.0,
        windowStart = 0;

    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        windowSum += arr[windowEnd];

        if (windowEnd >= K - 1) {
            result.push(windowSum / K);
            windowSum -= arr[windowStart];
            windowStart += 1
        }
    }
    return result;
}

const K = 5;
const arr = [1, 3, 2, 6, 9, 1, -1, 4, 1, 8, 2]

console.log(average(K, arr))
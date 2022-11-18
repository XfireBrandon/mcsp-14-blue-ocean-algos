// Given an array of elements

//  Ensure that the array is composed on only unique value
// Find the greatest distance between two values side by side. 

function largestDistance(arr) {
    const newArr = [...new Set(arr)]
    let maxDistance = 0
    let next, current, currentDistance
    
    for(let i = 0; i < newArr.length - 1; i++) {
        next = newArr[i + 1]
        current = newArr[i]
        currentDistance = next - current
        maxDistance = Math.max(currentDistance, maxDistance)
     }
    return maxDistance
}

const arr = [111,222,333,222,444,333,555,444,667,666,777,888,999]
console.log(largestDistance(arr))

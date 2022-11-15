// given an array, return two number that add up to given sum

// test
// [1,2,3,4,5] is the given array
// 9 is the given sum
// should return an array of [4,5]
// if two number do no add up to a given sum, return false

// array solution
function twoSumArr(arr, sum) {
    const pastNumbers = []

    let neededNumber

    for(let elem of arr) {
        neededNumber = sum - elem
        if(!pastNumbers.includes(neededNumber)) {
            pastNumbers.push(elem)
        } else {
            return [neededNumber, elem]
        }
    }
    return false
}

// There is an argument to be made that the #includes method onlyine 16 is an O(n) operation and since it is within a for loop, the time complexity of this solution wout be O(n^2) 

// You can refactor this to use and object instead of an array. Object have O(1) lookups, so the overall algo would be O(n)

// object solution
function twoSumObj(arr, sum) {
    const pastNumbers = {}

    let neededNumber

    for(let elem of arr) {
        neededNumber = sum - elem
        if(!pastNumbers[neededNumber]) {
            pastNumbers[elem] = true
        } else {
            return [neededNumber, elem]
        }
    }
    return false
}


const arr = [1,2,3,4,5] // => [4,5]
const sum = 9

console.log(twoSumObj(arr, sum))
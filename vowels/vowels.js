// given a string, return an object showing how many vowels are in the string

// 'this is the string'
// {
//     a: 0,
//     e: 1,
//     i: 3,
//     o:0,
//     u:0
// }

// function vowels(str) {
//     // your code here
//     const obj = {}
//     const vowels = ['a', 'e', 'i', 'o', 'u']
//     let current;
//     for(let i = 0; i < str.length; i++) {

//         current = str[i].toLowerCase()

//         if(vowels.includes(current)) {
//             if(!obj[current]) {
//                 obj[current] = 1
//             } else {
//                 obj[current]++
//             }
//         }
//     }
//     return obj
// }

// const str = 'this is the test string that I am going to be using'
// console.log(vowels(str))

// function longestWord(str) {
//     // your code here
//     let longest = 0
//     let longestWord;
//     const arr = str.split(' ')
    
//     arr.forEach((elem) => {
//         let currentLength = elem.length
//         if(elem.length > longest) {
//             longest = elem.length
//             longestWord = elem
//         }
//     })
//     return longestWord
// }



// function lettersBetween(start, end) {
//     const obj = createAlphabetObj(str)
//     return obj[end] - obj[start] - 1
// }

// function createAlphabetObj(str) {
//     const obj = {}
//     let count = 1
//     for(let elem of str) {
//         obj[elem] = count
//         count++
//     }
//     return obj
// }
// const str = 'abcdefghijklmnopqrstuvwxyz'
// console.log(lettersBetween('a', 'k'))

// add up a string

const str = '309485903483098490829034327580372805792034590829'

function sum(str) {
    let current
    let sum = 0
    for(let i = 0; i < str.length; i++) {
        current = parseInt(str[i])
        sum += current
    }

    return sum
}

console.log(sum(str))
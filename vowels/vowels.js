// given a string, return an object showing how many vowels are in the string

// 'this is the string'
// {
//     a: 0,
//     e: 1,
//     i: 3,
//     o:0,
//     u:0
// }

function vowels(str) {
    // your code here
    const obj = {}
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let current;
    for(let i = 0; i < str.length; i++) {

        current = str[i].toLowerCase()

        if(vowels.includes(current)) {
            if(!obj[current]) {
                obj[current] = 1
            } else {
                obj[current]++
            }
        }
    }
    return obj
}

const str = 'this is the test string that I am going to be using'
console.log(vowels(str))








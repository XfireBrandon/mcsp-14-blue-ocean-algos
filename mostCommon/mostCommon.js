// Given a string, write a function that returns the most common element

function mostCommon(str) {
    const obj = {}
    let max = 0
    let current, maxElem

    for(let i = 0; i < str.length; i++) {
        current = str[i]
        if(!obj[current]) {
            obj[current] = 1
        } else {
            obj[current]++
        }
    }
    
    for(let key in obj) {
        if(obj[key] > max) {
            max = obj[key]
            maxElem = key
        }
    }
    return maxElem
}


const str = '000111222'
console.log(mostCommon(str))
function lettersBetween(start, end) {
    const obj = createAlphabetObj(str)
    return obj[end] - obj[start] - 1
}

function createAlphabetObj(str) {
    const obj = {}
    let count = 1
    for(let elem of str) {
        obj[elem] = count
        count++
    }
    return obj
}
const str = 'abcdefghijklmnopqrstuvwxyz'
console.log(lettersBetween('a', 'k'))
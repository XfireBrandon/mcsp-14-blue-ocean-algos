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
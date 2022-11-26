function validateInput(str) {
    // create arr
    const arr = []
    for(let char of str) {

        if(char === '(') {
            arr.push(char)
        } else if(arr.length === 0) {
            return false
        } else {
            arr.pop()
        }
    }
    return arr.length === 0
}

const str = ')))))((((('
console.log(validateInput(str))
function freqCounter(str) {
    // your code here. 

    // make empty object
    const obj = {}
    // split string into array
    const arr = str.split('')

    // iterate through the array
    for(let i = 0; i < arr.length; i++) {
        if(!obj[arr[i]]) {
            obj[arr[i]] = 1
        } else {
            obj[arr[i]]++
        }
    }
    return obj
}


const str = '2039480932849032849832908342908'

console.log(freqCounter(str))
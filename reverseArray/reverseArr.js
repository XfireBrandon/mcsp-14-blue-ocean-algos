function reverse(arr) {
    for (let i = 0; i <= Math.floor((arr.length - 1) / 2);  i++) {
        var temp = arr[i]
        arr[i] = arr[arr.length - 1 - i]
        arr[arr.length - 1 - i] = temp

    }
    return arr
}


const arr = [1,2,3,4,5,6]
console.log(arr)
reverse(arr)
console.log(arr)
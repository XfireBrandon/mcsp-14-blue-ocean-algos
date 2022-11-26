function longestWord(str) {
    // your code here
    let longest = 0
    let longestWord;
    const arr = str.split(' ')
    
    arr.forEach((elem) => {
        let currentLength = elem.length
        if(elem.length > longest) {
            longest = elem.length
            longestWord = elem
        }
    })
    return longestWord
}
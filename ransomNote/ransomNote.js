const magazinePage = `This is our fall catolog. We have many different brands of curtains. Low low prices. Customers welcome. Bring your kids, sons and daughters welcome to the store. We will be there early in the evening, so come have fun. It is our business to make sure you get a good deal.`

const note = 'is our fall'



function ransomNote(magazinePage, note) {
    const magArr = magazinePage.split(' ')
    const noteArr = note.split(' ')

    const magObj = {}

    magArr.forEach((word) => {
        if(!magObj[word]) magObj[word] = 0
        magObj[word]++
    })

    let noteIsPossible = true

    noteArr.forEach((word) => {
        if(magObj[word]) {
            magObj[word]--
            if(magObj[word] < 0) noteIsPossible = false
        }
        else 
        noteIsPossible = false
    })
    return noteIsPossible
}

console.log(ransomNote(magazinePage, note))
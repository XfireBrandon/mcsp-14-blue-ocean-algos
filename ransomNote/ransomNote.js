const magazinePage = 'this is some thing in a page'
const note = 'this is some some'


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




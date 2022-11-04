const magazinePage = `This is our fall catolog. We have many different brands of curtains. Low low prices. Customers welcome. Bring your kids, sons and daughters welcome to the store. We will be there early in the evening, so come have fun. It is our business to make sure you get a good deal.`

const note = `We have the daughters. Send the price!`



function ransomNote(magazinePage, note) {
    const magArr = magazinePage.split(' ')
    const noteArr = note.split(' ')

    console.log(magArr)
    console.log(noteArr)
}

ransomNote(magazinePage, note)
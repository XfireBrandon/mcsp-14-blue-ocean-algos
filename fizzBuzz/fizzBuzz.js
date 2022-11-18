// // write fizzbuzz noninclusive to n
// // { fizz: 15, buzz: 35, fizzBuzz: 12}


// function runner(arr) {
//     const objs = []
//     let current
//     for(let i = 0; i < arr.length; i++) {
//         current = arr[i]
//         objs.push(fizzBuzz(current))
//     }
//     return calculateManyAndFew(objs)
// }


// function fizzBuzz(arr) {
//     const objs = []
    
//     arr.forEach((elem) => {
//         const obj = {
//             fizz: 0,
//             buzz: 0,
//             fizzBuzz: 0
//         }

//         for(let i = 0; i < elem; i++) {
//             if(i % 3 === 0 && i % 5 === 0) {
//                 obj.fizzBuzz++
//             } else if(i % 5 === 0) {
//                 obj.buzz++
//             } else if(i % 3 === 0) {
//                 obj.fizz++
//             } 
//         }
//         objs.push(obj)
//     })

//     return calculateManyAndFew(objs)
    
// }

// const arr = [150,212,345,333,2890,4456,2934867,123,321,4765]
// console.log(fizzBuzz(arr))

// function calculateManyAndFew(arr) {
//     const output = {few: 0, many: 0}
//     let current
//     for(let i = 0; i < arr.length; i++) {
//         current = arr[i]
//         if(current.fizzBuzz > 49) {
//             output.many++
//         } else {
//             output.few++
//         }
//     }
//     return output
// }



// // if an n contains > 49 fizzbuzzes, it is consided many otherwise it is considered few
// // create another function that returns if the original n met certain metrics.
// // manyFizzBuzzes
// // fewFizzBuzzes
// // {many: 4, few: 6}

var containsDuplicate = function(nums) {
    const obj = {}
    let current
    for(let i = 0; i < nums.length; i++) {
        current = nums[i]
        if(!obj[current]) {
            obj[current] = 1
        } else {
            return true
        }
    }
    return false
}


const arr = [1,2,3,4,5,6,77,8]
console.log(containsDuplicate(arr))
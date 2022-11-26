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
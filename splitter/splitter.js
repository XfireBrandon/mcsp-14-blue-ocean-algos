function splitter(arr, num) {
    // your code here
    const res = [];
    for (let i = 0; i < arr.length; i += num) {
      const chunk = arr.slice(i, i + num);
      res.push(chunk)
    }
    return res;
}

const arr = [1,2,3,4,5,6,7,8,9,10]
const num = 3
console.log(splitter(arr,num))
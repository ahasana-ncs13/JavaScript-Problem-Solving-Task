let totalsum=0;
let sum=(arr)=>{
    for (let a of arr) {
        // console.log(a)
        totalsum = totalsum+a
    }
     console.log(totalsum)
}
sum([1, 2, 3, 4])
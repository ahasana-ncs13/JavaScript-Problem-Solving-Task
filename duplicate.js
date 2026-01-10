const duplicate=(arr)=>{
    let newarr=[]
    for (let i = 0; i < arr.length; i++) {
        // console.log(i)
        if (!newarr.includes(arr[i])) {
            newarr.push(arr[i])
        }
    }
    console.log(newarr)
}
duplicate([1, 2, 2, 3, 4, 4])
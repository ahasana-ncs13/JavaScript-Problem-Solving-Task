const palindrome=(str)=>{
    const pal = str.split("").reverse().join("")
    if (str===pal) {
       console.log(true) 
    }else{
        console.log(false) 
    }
}
palindrome("hello")
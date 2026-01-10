const capitalize=(str)=>{
    const newWord=[]
    let capital=str.split(" ")
    for (const cap of capital) {
        const word=cap.split("")[0].toUpperCase()+cap.slice(1)
        // console.log(word)
       newWord.push(word)
    }
    console.log(newWord.join(" "))
}
capitalize("hello world")
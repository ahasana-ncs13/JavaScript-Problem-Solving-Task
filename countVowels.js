// const str 
let count =0
const countVowels=(str)=>{
    for (const s of str) {
    if ("aeiou".includes(s)) {
        count++
    }
}
}
countVowels("programming")
console.log(count)

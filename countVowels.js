const str ="programming";
let count =0
const countVowels=()=>{
    for (const s of str) {
    if ("aeiou".includes(s)) {
        count++
    }
}
}
countVowels()
console.log(count)

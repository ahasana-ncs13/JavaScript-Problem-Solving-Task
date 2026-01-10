let newarr = [];
const even = (arr) => {
  for (let a of arr) {
    if (a % 2 === 0) {
      newarr.push(a)
    }
  }
   console.log(newarr);
};
even([1, 2, 3, 4, 5, 6]);

let array = [4, 3, 3, 9, 0, 2];
//length
const len = (arr)=>{
  let count = 0;
arr.forEach(element => {
  count++;
});
return count;
}
console.log("length: "+len(array));


//last
const last = (arr) => {
  let count = 0;
  arr.forEach((element) => {
    count++;
  });
return arr[count - 1];
}
console.log("last: " + last(array));


// but last
const butlast = (arr) => {
  let count = 0;
  arr.forEach((element) => {
    count++;
  });
  return (count > 1 ? (arr[count - 2]) : (null));
};

console.log("but last: " + butlast(array));
console.log("but last(one item): " + butlast([4]));


//reverse
const reverse = (arr) => {
const arr_reversed = [];
arr.forEach((num)=>{
arr_reversed.unshift(num);
})
 return arr_reversed;
};

console.log("reversed: " + reverse(array));


//
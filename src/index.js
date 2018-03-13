module.exports = function longestConsecutiveLength(array) {
  // your solution here
 let count = 1;
  let res = 0;
  function compare(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
};
  array.sort(compare);
  if(array.length < 2) return array.length;
  for(let i = 1, l = array.length; i < l; i++) {
    if(array[i] === array[i - 1] + 1) {
      count += 1;
    } else if(array[i] === array[i - 1]) {
      continue;
    } else {
      res = Math.max(res, count);
      count = 1;
    }
  }
return res;
}

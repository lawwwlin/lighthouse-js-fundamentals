const lastIndexOf = function (array, value) {
  let index = -1;
  if (array.length !== 0) {
    for (let i = array.legnth-1; i >= 0; i--) {
      if (array[i] == value) {
        index = i;
        console.log(index);
        break;
      }
    }
  }
  return index;
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);
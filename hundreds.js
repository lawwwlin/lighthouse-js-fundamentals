const howManyHundreds = function (num) {
  let ans = 0;
  while (num > 100) {
    num = num - 100;
    ans++;
  }
  return ans;
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);
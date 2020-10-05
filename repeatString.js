//STRING BEARS REPEATING

const repeatString = (str, num) => {
  let number = str;
  while (num > 1) {
    number += str;
    num--;
  }
  return number;
};

console.log(repeatString("abc", 3));

module.exports = {
  repeatString,
};

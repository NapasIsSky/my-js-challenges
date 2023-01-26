function limitString(str) {
  const strArr = str.split("");
  let result = [];

  for (let i = 0; i < strArr.length; i++) {
    if (i < 2) {
      result.push(strArr[i]);
    } else if (result[result.length - 2] !== strArr[i]) {
      result.push(strArr[i]);
    }
  }

  return result.join("");
}

console.log(limitString("xxxttooopppp"));
console.log(limitString("xxxtooopppp"));
console.log(limitString("uuutooopp"));

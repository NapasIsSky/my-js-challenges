function myfunction(a, b) {
  let result = [];

  function matchSetValue(value1, value2, set) {
    result.push(value1);
  }

  a.forEach(matchSetValue);

  return (
    result.find((x) => (typeof x === "string" ? x.search[String(b)] !== -1 : x === b)) !== undefined
  );
}

console.log(myfunction(new Set([1, 2, 3]), 2));
console.log(myfunction(new Set([123]), 2));
console.log(myfunction(new Set(["1", "2", "3"]), "2"));
console.log(myfunction(new Set(["123"]), "2"));

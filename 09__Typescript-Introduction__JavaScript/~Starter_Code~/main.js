const addNumbers = (a, b) => a + b;

const sumWithNumbers = addNumbers(4, 3);
const sumWithMixed = addNumbers(4, "3");
const sumWithStrings = addNumbers("4", "3");

console.log("SUM w/ Numbers:", sumWithNumbers, "~>", typeof sumWithNumbers);
console.log("SUM w/ Mixed:", sumWithMixed, "~>", typeof sumWithMixed);
console.log("SUM w/ Strings:", sumWithStrings, "~>", typeof sumWithStrings);

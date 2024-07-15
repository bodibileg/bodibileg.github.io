function max(a, b) {
  return a > b ? a : b;
}

function maxOfThree(a, b, c) {
  let max = a;
  if (b > max) max = b;
  if (c > max) max = c;
  return max;
}

function isVowel(string) {
  const VOWELS = "AEIOUaeiou";
  if (
    typeof string === "string" &&
    string.length === 1 &&
    VOWELS.includes(string)
  ) {
    return true;
  } else return false;
}

function sum(arr) {
  return arr.reduce((prev, cur) => prev + cur, 0);
}

function multiply(arr) {
  return arr.reduce((prev, cur) => prev * cur, 1);
}

function reverse(string) {
  return string.split("").reverse().join("");
}

function findLongestWord(arrOfWords) {
  let max = 0;
  arrOfWords.forEach((word) => {
    if (word.length > max) max = word.length;
  });
  return max;
}

function filterLongWords(arrOfWords, i) {
  return arrOfWords.filter((word) => word.length > i);
}

function myFunctionTest(expected, functionToTest) {
  const result = functionToTest();
  const testResult =
    JSON.stringify(result) === JSON.stringify(expected)
      ? "TEST SUCCEEDED"
      : "TEST FAILED";

  console.assert(
    JSON.stringify(result) === JSON.stringify(expected),
    `Expected ${JSON.stringify(expected)}, but got ${JSON.stringify(result)}`
  );

  return testResult;
}

console.log(
  "Expected output of max(20, 11) is 20 and " +
    myFunctionTest(20, () => max(20, 11))
);

console.log(
  "Expected output of maxOfThree(20, 11, 1) is 20 and " +
    myFunctionTest(20, () => maxOfThree(20, 11, 1))
);

console.log(
  "Expected output of isVowel('o') is true and " +
    myFunctionTest(true, () => isVowel("o"))
);

console.log(
  "Expected output of sum([3, 4, 5, 6]) is 18 and " +
    myFunctionTest(18, () => sum([3, 4, 5, 6]))
);

console.log(
  "Expected output of multiply([3, 4, 5, 6]) is 360 and " +
    myFunctionTest(360, () => multiply([3, 4, 5, 6]))
);

console.log(
  "Expected output of reverse('reverse this') is siht esrever and " +
    myFunctionTest("siht esrever", () => reverse("reverse this"))
);

console.log(
  "Expected output of filterLongWords(['this','is','the','test','sentence'], 3) is ['this','test','sentence'] and " +
    myFunctionTest(["this", "test", "sentence"], () =>
      filterLongWords(["this", "is", "the", "test", "sentence"], 3)
    )
);

const array = [1,3,5,3,3];

const multiplied = array.map(elem => elem * 10);
console.log("Expected output of array.map(elem => elem * 10) is [10, 30, 50, 30, 30] and " + myFunctionTest([10, 30, 50, 30, 30], function() { return multiplied; }));

const allEqualThree = array.map(() => 3);
console.log("Expected output of array.map(() => 3) is [3, 3, 3, 3, 3] and " + myFunctionTest([3, 3, 3, 3, 3], function() { return allEqualThree; }));

const productOfElements = array.reduce((prev, curr) => prev * curr);
console.log("Expected output of array.reduce((prev, curr) => prev * curr) is 135 and " + myFunctionTest(135, function() { return productOfElements; }));

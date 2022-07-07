/**
 * create a function that determines whether all characters in a string are unique or not.
 * Make it case-sensetive
 * @params string
 * @output boolean
 * @example
 *     isUnique('abcde') true
 *     isUnique('89%df#$^a&x') true
 *     isUnique('abcAdef') true
 *     isUnique('abcaef') false
 * @complexity
 *     time complexity => linear, O(n)
 */

function dobleForLoop(str) {
  const start = performance.now();
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        const end = performance.now();
        console.log(`Execution time: ${end - start} ms`);
        return false;
      }
    }
  }
  const end = performance.now();
  console.log(`Execution time: ${end - start} ms`);
  return true;
}

function usingLastIndexOf(str) {
  const start = performance.now();
  for (let i = 0; i < str.length; i++) {
    if (str.lastIndexOf(str[i]) !== i) return false;
  }
  const end = performance.now();
  console.log(`Execution time: ${end - start} ms`);
  return true;
}

function usingSort(str) {
  const start = performance.now();
  const chars = str.split("").sort();
  for (let i = 1; i < str.length; i++) {
    if (chars[i] === chars[i - 1]) {
      const end = performance.now();
      console.log(`Execution time: ${end - start} ms`);

      return false;
    }
  }
  const end = performance.now();
  console.log(`Execution time: ${end - start} ms`);
  return true;
}

function usingSet(string) {
  const start = performance.now();
  const chars = new Set();

  for (let i = 0; i < string.length; i++) {
    const thisChar = string[i];

    if (chars.has(thisChar)) {
      const end = performance.now();
      console.log(`Execution time: ${end - start} ms`);
      return false;
    }
    chars.add(thisChar);
  }
  const end = performance.now();
  console.log(`Execution time: ${end - start} ms`);
  return true;
}

function lastSolution(str) {
  const start = performance.now();
  const res = new Set(str).size === str.length;
  const end = performance.now();
  console.log(`Execution time: ${end - start} ms`);
  return res;
}
const str = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";

dobleForLoop(str);
usingLastIndexOf(str);
usingSort(str);
usingSet(str);
lastSolution(str);

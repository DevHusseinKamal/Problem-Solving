// [1]
/*
    For year = 1905, the output should be
    centuryFromYear(year) = 20;
    For year = 1700, the output should be
    centuryFromYear(year) = 17
*/

function centuryFromYear(year) {
  return Math.ceil(year / 100);
}
console.log(centuryFromYear(1905));

//=========================================
console.log("#".repeat(30));
// [2]
/*
    For inputString = "aabaa", the output should be
    checkPalindrome(inputString) = true;
    For inputString = "abac", the output should be
    checkPalindrome(inputString) = false;
    For inputString = "a", the output should be
    checkPalindrome(inputString) = true.
*/

function checkPalindrome(inputString) {
  let arr = inputString.split("");
  let arrStr = arr.join("");
  // reverse
  let revArr = arr.reverse();
  let revArrStr = revArr.join("");
  if (arrStr === revArrStr) {
    return true;
  } else {
    return false;
  }
}
console.log(checkPalindrome("aabaa"));

//=========================================
console.log("#".repeat(30));
// [3]
/* 
    Given an array of integers, 
    find the pair of adjacent elements that has the largest product and return that product.

    For inputArray = [3, 6, -2, -5, 7, 3], the output should be
    adjacentElementsProduct(inputArray) = 21.
    7 and 3 produce the largest product.
*/

function adjacentElementsProduct(inputArray) {
  let result = 0;
  let maxArr = [];
  for (let i = 1; i < inputArray.length; i++) {
    let maxInt = inputArray[i - 1] * inputArray[i];
    maxArr.push(maxInt);
  }
  let maxNum = Math.max(...maxArr);
  return (result += maxNum);
}
console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));

//=========================================
console.log("#".repeat(30));
// [4]
// Reverse a string
function reverseString(str) {
  let theResult = "";
  for (let i = str.length - 1; i >= 0; i--) {
    theResult += str[i];
  }
  return theResult;
}
console.log(reverseString("hello"));
//=========================================
console.log("#".repeat(30));
// [5]
/*
    Factorialize a Number

    For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
*/
function factorialize(num) {
  let numResult = 1;
  for (let i = num; i > 1; i--) {
    numResult *= i;
  }
  return numResult;
}
console.log(factorialize(5));
//=========================================
console.log("#".repeat(30));
// [6]
/*
    Find the Longest Word in a String
*/
function findLongestWordLength(str) {
  let splitedStr = str.split(" ");
  let longestWord = "";
  for (let i = 0; i < splitedStr.length; i++) {
    if (longestWord.length < splitedStr[i].length) {
      longestWord = splitedStr[i];
    }
  }
  return longestWord.length;
}
console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);
//=========================================
console.log("#".repeat(30));
// [7]
/*
    Return Largest Numbers in Arrays
*/
function largestOfFour(arr) {
  let resultArray = [];
  for (let i = 0; i < arr.length; i++) {
    resultArray.push(Math.max(...arr[i]));
  }
  return resultArray;
}
console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);
//=========================================
console.log("#".repeat(30));
// [8]
/*
    Confirm the Ending

    Check if a string (first argument, str) ends with the given target string (second argument, target).
*/
function confirmEnding(str, target) {
  let lastCharStr = str.slice(str.length - target.length);
  if (lastCharStr === target) {
    return true;
  } else {
    return false;
  }
}
console.log(confirmEnding("Congratulation", "on"));
//=========================================
console.log("#".repeat(30));
// [9]
/*
    Repeat a String Repeat a String

    do not use the built-in .repeat() method.
*/
function repeatStringNumTimes(str, num) {
  let finalResult = "";
  for (let i = 0; i < num; i++) {
    finalResult += str;
  }
  return finalResult;
}
console.log(repeatStringNumTimes("abc", 3));
//=========================================
console.log("#".repeat(30));
// [10]
/*
    Truncate a String

    Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
    Return the truncated string with a ... ending.
*/
function truncateString(str, num) {
  let finalStr = "";
  if (str.length >= num) {
    finalStr = str.slice(0, num);
    if (str.length == num) {
      return str;
    } else {
      return `${finalStr}...`;
    }
  } else if (str.length < num) {
    return str;
  }
}
console.log(
  truncateString(
    "A-tisket a-tasket A green and yellow basket",
    "A-tisket a-tasket A green and yellow basket".length + 2
  )
);
//=========================================
console.log("#".repeat(30));
// [11]
/*
    Finders Keepers

    Create a function that looks through an array arr
    and returns the first element in it that passes a 'truth test'. This means that given an element x,
    the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.
*/
function findElement(arr, func) {
  for (let element of arr) {
    if (func(element)) {
      return element;
    }
  }
}
console.log(findElement([1, 2, 3, 4], (num) => num % 2 === 0));
//=========================================
console.log("#".repeat(30));
// [12]
/*
    Boo who

    Check if a value is classified as a boolean primitive. Return true or false.
    Boolean primitives are true and false.
*/
function booWho(bool) {
  if (typeof bool === "boolean") {
    return true;
  } else {
    return false;
  }
}
console.log(booWho([1, 2, 3]));
//=========================================
console.log("#".repeat(30));
// [13]
/*
    Title Case a Sentence

    Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
    For the purpose of this exercise, you should also capitalize connecting words like the and of.
*/
function titleCase(str) {
  let splitStr = str.split(" ");
  let allStr = "";
  for (let i = 0; i < splitStr.length; i++) {
    allStr +=
      splitStr[i].charAt(0).toUpperCase() +
      splitStr[i].slice(1, splitStr[i].length).toLowerCase() +
      " ";
  }
  return allStr.trim();
  // trim => cuz there is a white space after last word
}
console.log(titleCase("I'm a little tea pot"));
//=========================================
console.log("#".repeat(30));
// [14]
/*
    Slice and Splice

    You are given two arrays and an index.
    Copy each element of the first array into the second array, in order.
    Begin inserting elements at index n of the second array.
    Return the resulting array. The input arrays should remain the same after the function runs.
*/
function frankenSplice(arr1, arr2, n) {
  let arr2Copy = arr2.slice();
  // Why I use slice? to copy arr2 without override it
  arr2Copy.splice(n, 0, ...arr1);
  // Splice not store in variable cuz it customize array directly
  return arr2Copy;
}
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
//=========================================
console.log("#".repeat(30));
// [15]
/*
    Falsy Bouncer

    Remove all falsy values from an array.
    Falsy values in JavaScript are [false, null, 0, "", undefined, and NaN].
    Hint: Try converting each value to a Boolean
*/
function bouncer(arr) {
  return arr.filter((elm) => Boolean(elm));
}
console.log(bouncer([7, "ate", "", false, 9]));
//=========================================
console.log("#".repeat(30));
// [16]
/*
    Where do I Belong

    Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted.
    The returned value should be a number.
    For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
    Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted
    it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
*/
function getIndexToIns(arr, num) {
  let arrNumTwo = [...arr, num].sort((a, b) => a - b);
  return arrNumTwo.indexOf(num);
}
console.log(getIndexToIns([10, 20, 30, 40, 50], 30));
//=========================================
console.log("#".repeat(30));
// [17]
/*
    Mutations

    Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

    For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
    The arguments ["hello", "hey"] should return false because the string hello does not contain a y.
    Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.
*/
function mutation(arr) {
  let arr0 = arr[0].toLowerCase();
  let arr1 = arr[1].toLowerCase();
  for (let i = 0; i < arr1.length; i++) {
    if (arr0.indexOf(arr1[i]) == -1) {
      // MainArray.indexOf(SecondaryArray) => MainArray (if inside it) SecondaryArray
      return false;
    }
  }
  return true;
}
console.log(mutation(["hello", "hey"]));
//=========================================
console.log("#".repeat(30));
// [18]
/*
    Chunky Monkey

    Write a function that splits an array (first argument)
    into groups the length of size (second argument) and returns them as a two-dimensional array.
*/
function chunkArrayInGroups(arr, size) {
  let newArr = [];
  while (arr.length > 0) {
    newArr.push(arr.splice(0, size));
  }
  return newArr;
}
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
//=========================================
console.log("#".repeat(30));
// [19]
/*
    Sum All Numbers in a Range

    We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.
    The lowest number will not always come first.
    For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
*/
function sumAll(arr) {
  let newResult = 0;
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    newResult += i;
  }
  return newResult;
}
console.log(sumAll([1, 4]));
//=========================================
console.log("#".repeat(30));
// [20]
/*
    Diff Two Arrays

    Compare two arrays and return a new array with any items only found in one of the two given arrays,
    but not both. In other words, return the symmetric difference of the two arrays.

    Note: You can return the array with its elements in any order.
*/
function diffArray(arr1, arr2) {
  let newArr = arr1.concat(arr2);
  return newArr.filter(
    (element) => !arr1.includes(element) || !arr2.includes(element)
  );
}
console.log(diffArray([1, 2, 3], [5, 9]));
console.log("#".repeat(30));
//=========================================
console.log("###############################################");
// [21]
/*
    Seek and Destroy

    You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments.
    Remove all elements from the initial array that are of the same value as these arguments.

    Note: You have to use the arguments object.
*/
function destroyer(arr, ...destroy) {
  let survivingElements = [];
  let battleField = Object.values(arguments[0]);
  let elementToDestroy = Object.values(arguments).splice(1);

  for (let i = 0; i < battleField.length; i++) {
    let positionToRecon = battleField[i];
    if (elementToDestroy.indexOf(positionToRecon) === -1) {
      survivingElements.push(positionToRecon);
    }
  }
  return survivingElements;
}
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
/*
    *** Another Solution ***
    function destroyer(arr, ...destroy) {
        return arr.filter(elm => !destroy.includes(elm))
    }
    console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
*/
//=========================================
console.log("#".repeat(30));
// [22]
/*
    One hot summer day Pete and his friend Billy decided to buy a watermelon.
    They chose the biggest and the ripest one, in their opinion. After that the watermelon was weighed,
    and the scales showed w kilos. They rushed home, dying of thirst, and decided to divide the berry,
    however they faced a hard problem.

    Pete and Billy are great fans of even numbers,
    that's why they want to divide the watermelon in such a way that each of the two parts weighs
    even number of kilos, at the same time it is not obligatory that the parts are equal.
    The boys are extremely tired and want to start their meal as soon as possible,
    that's why you should help them and find out,
    if they can divide the watermelon in the way they want.
    For sure, each of them should get a part of positive weight.

    Input
    The first (and the only) input line contains integer number w (1 ≤ w ≤ 100)
    the weight of the watermelon bought by the boys.

    Output
    Print YES, if the boys can divide the watermelon into two parts,
    each of them weighing even number of kilos; and NO in the opposite case.
*/
function watermelon(n) {
  if (n % 2 === 0 && n !== 2) {
    return "YES";
  } else {
    return "NO";
  }
}
console.log(watermelon(4));
//=========================================
console.log("#".repeat(30));
// [23]
/*
    Sometimes some words like "localization" or "internationalization" are so long
    that writing them many times in one text is quite tiresome.

    Let's consider a word too long,
    if its length is strictly more than 10 characters.
    All too long words should be replaced with a special abbreviation.

    This abbreviation is made like this:
    we write down the first and the last letter of a word and between them we write
    the number of letters between the first and the last letters.
    That number is in decimal system and doesn't contain any leading zeroes.

    Thus, "localization" will be spelt as "l10n", and "internationalization» will be spelt as "i18n".

    You are suggested to automatize the process of changing the words with abbreviations.
    At that all too long words should be replaced by
    the abbreviation and the words that are not too long should not undergo any changes.

    Input
    The first line contains an integer n (1 ≤ n ≤ 100). Each of the following n lines contains one word. All the words consist of lowercase Latin letters and possess the lengths of from 1 to 100 characters.

    Output
    Print n lines. The i-th line should contain the result of replacing of the i-th word from the input data.
*/
function biggestNum(n) {
  let result = "";
  if (n.length > 4) {
    result =
      n.charAt(0) + n.slice(1, n.length - 1).length + n.charAt(n.length - 1);
  }
  return result;
}
console.log(biggestNum("internationalization"));
//=========================================
console.log("#".repeat(30));
// [24]
function findElm(sortedArr, element, offset) {
  let startIndex = 0;
  let endIndex = sortedArr.length - 1;

  const centerElement = Math.floor((endIndex - startIndex) / 2);

  if (element === sortedArr[centerElement]) {
    return centerElement + offset;
  }

  if (element > sortedArr[centerElement]) {
    startIndex = centerElement + 1;
    offset = offset + centerElement + 1;
  } else {
    endIndex = centerElement - 1;
  }

  return findElement(
    sortedArr.slice(startIndex, endIndex + 1),
    element,
    offset
  );
}
console.log(findElm([-3, 5, 6, 8, 99, 150], 99, 0));
//=========================================
console.log("#".repeat(30));
// [25]
function plusMinus(arr) {
  const length = arr.length;
  let positive = 0;
  let zero = 0;
  let negative = 0;

  for (let i = 0; i < length; i++) {
    if (arr[i] < 0) {
      negative++;
    } else if (arr[i] > 0) {
      positive++;
    } else {
      zero++;
    }
  }

  const positivePer = (positive / length).toFixed(6);
  const negativePer = (negative / length).toFixed(6);
  const zeroPer = (zero / length).toFixed(6);

  return `${positivePer}\n${negativePer}\n${zeroPer}`;
}

console.log(plusMinus([1, -1, 3, -3, -4, 0, 9, 12]));
//=========================================
console.log("#".repeat(30));
// [26]
function staircase(n) {
  for (let i = 0; i < n; i++) {
    let result = "";
    for (let j = 0; j < n - i - 1; j++) {
      result += " ";
    }

    for (let k = 0; k < i + 1; k++) {
      result += "#";
    }

    console.log(result);
  }
}

staircase(6);
//=========================================
console.log("#".repeat(30));
// [27]
function miniMaxSum(arr) {
  let result = 0;
  const check = arr.every((num) => {
    if (num === arr[0]) {
      return true;
    }
  });

  if (check) {
    for (let i = 0; i < arr.length - 1; i++) {
      result += arr[i];
    }
    console.log(result, result);
    return;
  }

  const minInt = Math.min(...arr);
  const maxInt = Math.max(...arr);

  const miniSum = arr.filter((num) => num !== maxInt);
  const maxSum = arr.filter((num) => num !== minInt);

  let min = 0;
  let max = 0;
  for (const num of miniSum) {
    min += num;
  }

  for (const num of maxSum) {
    max += num;
  }

  console.log(min, max);
}

miniMaxSum([5, 5, 5, 5, 5]);
//=========================================
console.log("#".repeat(30));
// [28]
function birthdayCakeCandles(candles) {
  const copiedArr = [...candles];
  let pivotElement = Math.max(...copiedArr);
  let elements = copiedArr.filter((num) => num === pivotElement);

  console.log(elements.length);
}
birthdayCakeCandles([18, 90, 90, 13, 90, 75, 90, 8, 90, 43]);
//=========================================
console.log("#".repeat(30));
// [29]
function timeConversion(s) {
  const format = s.slice(8);
  const time = s.slice(0, 2);
  const remainderTime = s.slice(2, 8);
  let numTime = +time;

  let result = "";
  if (format === "AM") {
    if (numTime === 12) {
      numTime = "00";
    } else if (numTime < 10) {
      numTime = "0" + numTime;
    }
  } else {
    if (numTime !== 12) {
      numTime += 12;
    }
  }

  result = `${numTime}${remainderTime}`;
  console.log(result);
}

timeConversion("04:59:59AM");
//=========================================
console.log("#".repeat(30));
// [30]
function gradingStudents(grades) {
  let copiedGrades = [...grades];
  const result = [];

  for (let i = 0; i < copiedGrades.length; i++) {
    if (
      copiedGrades[i] >= 38 &&
      (copiedGrades[i] % 5 === 3 || copiedGrades[i] % 5 === 4)
    ) {
      copiedGrades[i] += 5 - (copiedGrades[i] % 5);
    }

    result.push(copiedGrades[i]);
  }

  return result;
}

console.log(gradingStudents([73, 67, 38, 33]));
//=========================================
console.log("#".repeat(30));
// [31]
function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let result = [];
  let appleCount = 0;
  let orangeCount = 0;
  for (const apple of apples) {
    const distance = apple + a;
    if (distance >= s && distance <= t) {
      appleCount++;
      result.push(appleCount);
    }
  }

  for (const orange of oranges) {
    const distance = b + orange;
    if (distance <= t && distance >= s) {
      orangeCount++;
      result.push(orangeCount);
    }
  }

  return result;
}
console.log(countApplesAndOranges(2, 3, 1, 5, [2], [-2]));
//=========================================
console.log("#".repeat(30));
// [32]
function kangaroo(x1, v1, x2, v2) {
  let k1 = x1;
  let k2 = x2;
  let max = 10000;

  for (let i = 0; i < max; i++) {
    if (k1 === k2) {
      return "YES";
    }
    k1 += v1;
    k2 += v2;
  }

  return "NO";
}

console.log(kangaroo(0, 3, 4, 2));
//=========================================
console.log("#".repeat(30));
// [33]
function getTotalX(a, b) {
  const maxValue = Math.max(...b);
  let validCount = 0;

  for (let i = 1; i <= maxValue; i++) {
    if (a.every((int) => i % int === 0)) {
      if (b.every((int) => int % i === 0)) {
        validCount++;
      }
    }
  }

  return validCount;
}

console.log(getTotalX([2, 4], [16, 32, 96]));
//=========================================
console.log("#".repeat(30));
// [34]
function breakingRecords(scores) {
  let highScore = 0;
  let lowScore = 0;

  for (let i = 0; i < scores.length; i++) {
    const max = Math.max(...scores.slice(0, i + 1));
    const min = Math.min(...scores.slice(0, i + 1));
    if (scores[i + 1] > scores[i] && scores[i + 1] > max) {
      highScore++;
    } else if (scores[i + 1] < scores[i] && scores[i + 1] < min) {
      lowScore++;
    }
  }

  return `${highScore} - ${lowScore}`;
}

console.log(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]));
//=========================================
console.log("#".repeat(30));
// [35]
function birthday(s, d, m) {
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    const slicedArr = s.slice(i, i + m);
    if (slicedArr.reduce((acc, curr) => acc + curr, 0) === d) {
      result++;
    }
  }

  return result;
}

console.log(
  birthday([2, 5, 1, 3, 4, 4, 3, 5, 1, 1, 2, 1, 4, 1, 3, 3, 4, 2, 1], 18, 7)
);
//=========================================
console.log("#".repeat(30));
// [36]
function divisibleSumPairs(n, k, ar) {
  let result = 0;

  for (let i = 0; i < n - 1; i++) {
    const slicedArr = ar.slice(i + 1, n);
    for (let j = 0; j < slicedArr.length; j++) {
      if ((ar[i] + slicedArr[j]) % k === 0) {
        result++;
      }
    }
  }

  return result;
}

console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]));
//=========================================
console.log("#".repeat(30));
// [37]
function migratoryBirds(arr) {
  let birdsMap = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (birdsMap.has(arr[i])) {
      birdsMap.set(arr[i], birdsMap.get(arr[i]) + 1);
    } else {
      birdsMap.set(arr[i], 1);
    }
  }

  const result = [];
  let highVal = Math.max(...birdsMap.values());

  birdsMap.forEach((value, key) => {
    if (value >= highVal) {
      highVal = value;
      result.push({ key, highVal });
    }
  });

  return result.sort((a, b) => a.key - b.key)[0].key;
}

console.log(migratoryBirds([1, 1, 2, 2, 3]));
//=========================================
console.log("#".repeat(30));
// [38]
function bonAppetit(bill, k, b) {
  const sum = bill.reduce((r, v) => r + v, 0);
  const result = (sum - bill[k]) / 2;
  if (b - result === 0) return "Bon Appetit";
  else return b - result;
}

console.log(bonAppetit([3, 10, 2, 9], 1, 12));
//=========================================
console.log("#".repeat(30));
// [39]
function pageCount(n, p) {
  const result = [];
  let fromStart = 0;
  let fromEnd = 0;
  const divideNumber = Math.round(n / 2);

  for (let i = 0; i <= divideNumber; i++) {
    if (i === divideNumber && n % 2 !== 0) {
      break;
    }

    if (i === divideNumber) {
      result.push({ left: i * 2, right: null });
      break;
    }
    result.push({ left: i * 2, right: 2 * i + 1 });
  }

  for (let i = 0; i < result.length; i++) {
    if (Object.values(result[i]).indexOf(p) > -1) {
      fromStart = i;
    }

    if (Object.values(result[result.length - 1 - i]).indexOf(p) > -1) {
      fromEnd = i;
    }
  }

  return fromStart < fromEnd ? fromStart : fromEnd;
}

console.log(pageCount(5, 4));
//=========================================
console.log("#".repeat(30));
// [40]
function sockMerchant(n, ar) {
  if (!ar || ar.length !== n) return 0;

  let result = 0;
  let sockType = new Map();

  for (let i = 0; i < n; i++) {
    const sock = ar[i];

    if (!sockType.has(sock)) {
      sockType.set(sock, 1);
    } else {
      const newCount = sockType.get(sock) + 1;
      sockType.set(sock, newCount);
    }
  }

  for (const sock of sockType.values()) {
    const dividable = Math.floor(sock / 2);
    result += dividable;
  }

  return result;
}

console.log(sockMerchant(7, [1, 2, 1, 2, 1, 3, 2]));
//=========================================
console.log("#".repeat(30));
// [41]
function countingValleys(steps, path) {
  let result = 0;
  const delta = {
    up: 1,
    down: -1,
    forward() {
      result += this.up;
    },
    backwards() {
      result += this.down;
    },
  };

  const movements = new Map([
    ["U", delta.forward],
    ["D", delta.backwards],
  ]);

  for (let i = 0; i < steps; i++) {
    if (result === 0 && path[i] === "D") {
      delta.backwards();
    }
    movements.get(path[i]).call(delta);
  }

  return Math.abs(result);
}

console.log(countingValleys(10, "DUDDDUUDUU"));
//=========================================
console.log("#".repeat(30));
// [42]
function getMoneySpent(keyboards, drives, b) {
  let max = -1;

  for (let i = 0; i < keyboards.length; i++) {
    let temp = 0;
    for (let j = 0; j < drives.length; j++) {
      if (keyboards[i] + drives[j] <= b) {
        temp = keyboards[i] + drives[j];
        max = temp > max ? temp : max;
      }
    }
  }

  return max;
}

console.log(getMoneySpent([4], [5], 5));
//=========================================
console.log("#".repeat(30));
// [43]
function catAndMouse(x, y, z) {
  let cat1 = z > x ? x - z : z - x;
  let cat2 = y > z ? y - z : z - y;

  if (cat1 < cat2) {
    return "Cat A";
  } else if (cat1 > cat2) {
    return "Cat B";
  } else {
    return "Mouse C";
  }
}

console.log(catAndMouse(18, 19, 82));
//=========================================
console.log("#".repeat(30));
// [44]
function formingMagicSquare(s) {
  const squares = [
    [[6, 1, 8],[7, 5, 3],[2, 9, 4]],
    [[8, 1, 6],[3, 5, 7],[4, 9, 2]],
    [[8, 3, 4],[1, 5, 9],[6, 7, 2]],
    [[4, 3, 8],[9, 5, 1],[2, 7, 6]],
    [[6, 7, 2],[1, 5, 9],[8, 3, 4]],
    [[2, 7, 6],[9, 5, 1],[4, 3, 8]],
    [[2, 9, 4],[7, 5, 3],[6, 1, 8]],
    [[4, 9, 2],[3, 5, 7],[8, 1, 6]],
  ];

  let minCost = 45;

  for (const square of squares) {
    let currCost = 0;
    for (let i = 0; i < square.length; i++) {
      for (let j = 0; j < square[i].length; j++) {
        currCost += Math.abs(s[i][j] - square[i][j]);
      }
    }
    if (currCost < minCost) {
      minCost = currCost;
    }
  }

  return minCost;
}

console.log(
  formingMagicSquare([
    [4, 9, 2],
    [3, 5, 7],
    [8, 1, 5],
  ])
);
//=========================================
console.log("#".repeat(30));
// [45]
function pickingNumbers(a) {
  let copiedArr = a.sort((a, b) => a - b);

  let i = 0;
  let j = 1;

  while (i < copiedArr.length && j < copiedArr.length) {
    if (Math.abs(copiedArr[i] - copiedArr[j]) > 1) {
      i++;
      j++;
    } else {
      j++;
    }
  }

  return Math.abs(i - j);
}

console.log(pickingNumbers([4, 6, 5, 3, 3, 1]));
//=========================================
console.log("#".repeat(30));
// [46]
function climbingLeaderboard(ranked, player) {
  const result = [];
  const setArr = [...new Set(ranked)]; // [100, 50, 40, 20, 10]
  let index = setArr.length - 1; // 4

  for (const score of player) {
    while (index >= 0) {
      if (score >= setArr[index]) {
        index--;
      } else {
        result.push(index + 2);
        break;
      }
    }

    if (index < 0) {
      result.push(1);
    }
  }

  return result;
}

console.log(
  climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120])
);
//=========================================
console.log("#".repeat(30));
// [47]
function hurdleRace(k, height) {
  // Write your code here
  return k >= Math.max(...height) ? 0 : Math.max(...height) - k;
}

console.log(hurdleRace(4, [1, 6, 3, 5, 2]));
//=========================================
console.log("#".repeat(30));
// [48]
function designerPdfViewer(h, word) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const highestIndexArr = [];
  let hight = 0;

  for (let i = 0; i < word.length; i++) {
    let index = alphabet.indexOf(word[i]);
    highestIndexArr.push(index);
  }

  for (let i = 0; i < highestIndexArr.length; i++) {
    if (h[highestIndexArr[i]] > hight) {
      hight = h[highestIndexArr[i]];
    }
  }

  return hight * word.length;
}

console.log(
  designerPdfViewer(
    [
      1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
      5,
    ],
    "abc"
  )
);
//=========================================
console.log("#".repeat(30));
// [49]
function utopianTree(n) {
  let tree = 1;

  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      tree *= 2;
    } else {
      tree++;
    }
  }

  return tree
}

console.log(utopianTree(5));
//=========================================
console.log("#".repeat(30));
// [50]
function angryProfessor(k, a) {
  let numOfStu = 0;

  if (a.filter((num) => num <= 0).length < k) {
    return "YES";
  } else {
    return "NO";
  }
}

console.log(angryProfessor(2, [0, -1, 2, 1]));
//=========================================
console.log("#".repeat(30));
// [51]
function beautifulDays(i, j, k) {
  let result = 0;
  for (let iterable = i; iterable <= j; iterable++) {
    if (
      Math.abs(iterable - +String(iterable).split("").reverse().join("")) %
        k ===
      0
    ) {
      result++;
    }
  }

  return result;
}

console.log(beautifulDays(20, 23, 6));
//=========================================
console.log("#".repeat(30));
// [52]
function viralAdvertising(n) {
  let p = 5;
  let newN = n;
  let result = 0;

  while (newN > 0) {
    p = Math.floor(p / 2);
    result += p;
    p *= 3;
    newN--;
  }

  return result;
}

console.log(viralAdvertising(4));
//=========================================
console.log("#".repeat(30));
// [53]
function saveThePrisoner(n, m, s) {
  return (((m % n) + (s - 1)) % n) || n;
}

console.log(saveThePrisoner(7, 19, 3));
//=========================================
console.log("#".repeat(30));
// [54]
function circularArrayRotation(a, k, queries) {
  let newArr = [...a];
  const result = [];
  for (let i = 0; i < k; i++) {
    let popElm = newArr.pop();
    newArr.unshift(popElm);
  }

  for (let i = 0; i < queries.length; i++) {
    result.push(newArr[queries[i]]);
  }

  return result
}

console.log(circularArrayRotation([3, 4, 5], 2, [1, 2]));
//=========================================
console.log("#".repeat(30));
// [55]
function jumpingOnClouds(c, k) {
  let e = 100;
  for (let i = 0; i < c.length; i = i + k) {
    if (c[i] === 1) {
      e -= 2;
    }
    e -= 1;
    i = i % c.length;
  }

  return e;
}

console.log(jumpingOnClouds([1, 1, 1, 0, 1, 1, 0, 0, 0, 0], 3));
//=========================================
console.log("#".repeat(30));
// [56]
function findDigits(n) {
  const splitedNumber = String(n)
    .split("")
    .map((num) => +num);

  let result = 0;

  for (let i = 0; i < splitedNumber.length; i++) {
    if (n % splitedNumber[i] === 0) {
      result++;
    }
  }

  return result;
}

console.log(findDigits(1012));
//=========================================
console.log("#".repeat(30));
// [57]
function extraLongFactorials(n) {
  let newN = BigInt(n);
  let result = BigInt(1);

  for (let i = newN; i >= 1; i--) {
    result *= i;
  }

  return result.toString();
}

console.log(extraLongFactorials(25));
//=========================================
console.log("#".repeat(30));
// [58]
function appendAndDelete(s, t, k) {
  let sArr = s.split("");
  let tArr = t.split("");
  let count = 0;
  for (let i = 0; i === count && i < s.length; i++) {
    if (sArr[i] === tArr[i]) {
      count++;
    }
  }

  let tMinusCount = t.length - count;
  let sMinusCount = s.length - count;

  let STK = k - (tMinusCount + sMinusCount);

  if (
    tMinusCount + sMinusCount < k &&
    t.length + s.length > k &&
    STK % 2 !== 0
  ) {
    return "No";
  } else if (tMinusCount + sMinusCount <= k) {
    return "Yes";
  } else {
    return "No";
  }
}

console.log(appendAndDelete("hackerhappy", "hackerrank", 9));
//=========================================
console.log("#".repeat(30));
// [59]
function squares(a, b) {
  let count = 0;

  for (let i = 1; i <= Math.sqrt(b); i++) {
    if (Math.pow(i, 2) >= a && Math.pow(i, 2) <= b) {
      count++;
    }
  }

  return count;
}

console.log(squares(1, 1000000000));
//=========================================
console.log("#".repeat(30));
// [60]
function libraryFine(d1, m1, y1, d2, m2, y2) {
  const dateOne = [d1, m1, y1];
  const dateTwo = [d2, m2, y2];

  const daysLate = dateOne[0] - dateTwo[0];
  const monthsLate = dateOne[1] - dateTwo[1];
  const yearsLate = dateOne[2] - dateTwo[2];

  let result = daysLate * 15 + monthsLate * 500 + yearsLate * 10000;

  return result <= 0 ? 0 : result;
}

console.log(libraryFine(2, 6, 2014, 7, 6, 2014));
//=========================================
console.log("#".repeat(30));
// [61]
function cutTheSticks(arr) {
  let copiedArr = [...arr];
  let result = [];

  while (copiedArr.length > 0) {
    result.push(copiedArr.length);

    copiedArr.sort((a, b) => a - b);

    let cut = copiedArr[0];
    copiedArr.reduce((target, value, index) => {
      copiedArr[index] -= cut;

      return target;
    }, []);

    let remove = copiedArr.lastIndexOf(0) + 1;
    copiedArr.splice(0, remove);
  }

  return result;
}

console.log(cutTheSticks([1, 2, 3, 4, 3, 3, 2, 1]));
//=========================================
console.log("#".repeat(30));
// [62]
function repeatedString(s, n) {
  const as = s.split("").filter((c) => c === "a").length;
  const times = parseInt(n / s.length);
  const rest = n % s.length;

  const totalAs =
    times * as +
    s
      .slice(0, rest)
      .split("")
      .filter((c) => c === "a").length;

  return totalAs;
}

console.log(repeatedString("aba", 10));
//=========================================
console.log("#".repeat(30));
// [63]
function jumpingOnCloudsTwo(c) {
  let result = 0;
  for (let i = 0; i < c.length; i++) {
    if (i !== 0 && c[i] === 0) {
      result++;
    }

    if (c[i] === 0 && c[i + 1] === 0 && c[i + 2] === 0) {
      result++;
      i += 2;
    }
  }

  return result;
}

console.log(
  jumpingOnCloudsTwo([
    0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0,
    0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0,
    0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1,
    0, 0, 0, 1, 0, 0, 1, 0, 1, 0,
  ])
);
//=========================================
console.log("#".repeat(30));
// [64]
function equalizeArray(arr) {
  // Write your code here
  const cache = {};

  for (const value of arr) {
    if (cache[value]) {
      cache[value]++;
    } else {
      cache[value] = 1;
    }
  }

  const occur = Object.values(cache);
  const maxValue = Math.max(...occur);

  return arr.length - maxValue;
}

console.log(
  equalizeArray([
    10, 27, 9, 10, 100, 38, 30, 32, 45, 29, 27, 29, 32, 38, 32, 38, 14, 38, 29,
    30, 63, 29, 63, 91, 54, 10, 63,
  ])
);
//=========================================
console.log("#".repeat(30));
// [65]
function whatIsInAName(collection, source) {
  const arr = [];

  const sourceValues = Object.keys(source);
  for (const collect of collection) {
    if (sourceValues.every((value) => collect[value] === source[value])) {
      arr.push(collect);
    }
  }

  return arr;
}

console.log(
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" },
    ],
    { last: "Capulet" }
  )
);
//=========================================
console.log("#".repeat(30));
// [66]
function spinalCase(str) {
  return str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
}

console.log(spinalCase("thisIsSpinalTap"));
//=========================================
console.log("#".repeat(30));
// [67]
function translatePigLatin(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let index = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[0]) > -1) {
      return `${str}way`;
    }

    if (vowels.indexOf(str[i]) > -1) {
      index = i;
      break;
    }
  }

  return `${str.slice(index)}${str.slice(0, index)}ay`;
}

console.log(translatePigLatin("algorithm"));
//=========================================
console.log("#".repeat(30));
// [68]
function myReplace(str, before, after) {
  let splitedStr = str.split(" ");

  for (let i = 0; i < splitedStr.length; i++) {
    if (splitedStr[i] === before) {
      splitedStr[i] =
        before === before.toLowerCase()
          ? after.toLowerCase()
          : `${after.charAt(0).toUpperCase()}${after.slice(1)}`;
    }
  }

  return splitedStr.join(" ");
}

console.log(myReplace("I think we should look up there", "up", "Down"));
//=========================================
console.log("#".repeat(30));
// [69]
function fearNotLetter(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let index = alphabet.indexOf(str[0]);
  for (let i = 0; i < alphabet.length; i++) {
    if (alphabet[index] !== str[i]) {
      return alphabet[index];
    }
    index++;
  }

  return undefined;
}

console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));
//=========================================
console.log("#".repeat(30));
// [70]
function nonDivisibleSubset(k, s) {
  const result = [];
  let newS = [...s];

  for (let i = 0; i < newS.length; i++) {
    for (let j = 1; j < newS.length; j++) {
      if ((newS[i] + newS[j]) % k === (newS[i] % k) + (newS[j] % k)) {
        result.push(newS[i], newS[j]);
      }
    }
    newS = newS.slice(i);
  }

  return [...new Set(result)].length;
}

console.log(nonDivisibleSubset(3, [1, 7, 2, 4]));
//=========================================
console.log("#".repeat(30));
// [71]
function uniteUnique(arr) {
  const result = []

  for (const arg of arguments) {
    result.push(...arg)
  }

  return [...new Set(result)]
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
//=========================================
console.log("#".repeat(30));
// [72]
function pairElement(str) {
  const DNA = [
    ["A", "T"],
    ["T", "A"],
    ["G", "C"],
    ["C", "G"],
  ];
  const result = [];
  let strLength = 0;

  while (strLength < str.length) {
    for (let i = 0; i < DNA.length; i++) {
      if (DNA[i].indexOf(str[strLength]) === 0) {
        result.push(DNA[i])
      }
    }
    strLength++
  }

  return result;
}

console.log(pairElement("GCG"));
//=========================================
console.log("#".repeat(30));
// [73]
function convertHTML(str) {
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  };

  return str
    .split("")
    .map((entity) => htmlEntities[entity] || entity)
    .join("");
}

console.log(convertHTML("Dolce & Gabbana"));
//=========================================
console.log("#".repeat(30));
// [74]
function sumFibs(num) {
  const fib = [1, 1];

  for (let i = 2; i <= num; i++) {
    fib.push(fib[i - 2] + fib[i - 1]);
  }

  return fib
    .filter((n) => n % 2 === 1 && n <= num)
    .reduce((acc, curr) => acc + curr, 0);
}

console.log(sumFibs(4000000));
//=========================================
console.log("#".repeat(30));
// [75]
function sumPrimes(num) {
  function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) sum += i;
  }
  return sum;
}

console.log(sumPrimes(10));
//=========================================
console.log("#".repeat(30));
// [76]
function smallestCommons(arr) {
  const [min, max] = arr.sort((a, b) => a - b);
  const numberDivisors = max - min + 1;

  let upperBound = 1;
  for (let i = min; i <= max; i++) {
    upperBound *= i;
  }

  for (let multiple = max; multiple <= upperBound; multiple += max) {
    let divisorCount = 0;
    for (let i = min; i <= max; i++) {
      if (multiple % i === 0) {
        divisorCount += 1;
      }
    }
    if (divisorCount === numberDivisors) {
      return multiple;
    }
  }
}

console.log(smallestCommons([1, 5]));;
//=========================================
console.log("#".repeat(30));
// [77]
function dropElements(arr, func) {
  const newArr = [...arr];
  while (newArr.length > 0 && !func(newArr[0])) {
    newArr.shift();
  }

  return newArr;
}

console.log(
  dropElements([0, 1, 0, 1], function (n) {
    return n === 1;
  })
);
//=========================================
console.log("#".repeat(30));
// [78]
function steamrollArray(arr) {
  //   return arr.flat(5);
  let result = [];
  const newArr = [...arr];

  for (let i = 0; i < newArr.length; i++) {
    if (!Array.isArray(newArr[i])) {
      result.push(newArr[i]);
    } else {
      if (newArr[i].every((int) => Number(int))) {
        result.push(...newArr[i]);
      } else {
        newArr[i].forEach((int) => result.push(int));
      }
    }
  }

  for (let i = 0; i < result.length; i++) {
    if (Array.isArray(result[i])) {
      const [int] = result[i];
      const [anotherInt] = int;
      result[i] = anotherInt;
    }
  }

  return result;
}

console.log(steamrollArray([1, {}, [3, [[4]]]]));
//=========================================
console.log("#".repeat(30));
// [79]
function steamrollArrayTwo(arr, res) {
  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      res.push(arr[i]);
    } else {
      steamrollArrayTwo(arr[i], res);
    }
  }

  return res;
}

console.log(steamrollArrayTwo([1, [], [3, [[4]]]], []));
//=========================================
console.log("#".repeat(30));
// [80]
function truthCheck(collection, pre) {
  if (collection.every((obj) => obj[pre])) {
    return true;
  }

  return false;
}

console.log(
  truthCheck(
    [
      { name: "Quincy", role: "Founder", isBot: false },
      { name: "Naomi", role: "", isBot: false },
      { name: "Camperbot", role: "Bot", isBot: true },
    ],
    "name"
  )
);

// parseInt("01000001", 2).toString(10)
// String.fromCharCode("65")
//=========================================
console.log("#".repeat(30));
// [81]
function binaryAgent(str) {
  let result = "";
  const splitedStr = str.split(" ");

  for (const string of splitedStr) {
    result += String.fromCharCode(parseInt(string, 2));
  }

  return result;
}

console.log(
  binaryAgent(
    "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
  )
);
//=========================================
console.log("#".repeat(30));
// [82]
let counter = 1;
function calacTax(tax) {
  function calacAmount(amount) {
    return tax * amount * counter;
  }

  return calacAmount;
}

counter = 2;

console.log(calacTax(0.3)(100));
//=========================================
console.log("#".repeat(30));
// [83]
function addTogether() {
  const outerArg = arguments;

  for (const arg of outerArg) {
    if (typeof arg === "string") {
      return undefined;
    }
  }

  if (arguments.length > 1) {
    return [...arguments].reduce((acc, cur) => acc + cur, 0);
  } else {
    return function () {
      const innerArg = arguments;
      if (Array.isArray(...innerArg)) {
        return undefined;
      }
      return [...outerArg, ...innerArg].reduce((acc, cur) => acc + cur, 0);
    };
  }
}

console.log(addTogether(2)([3]));
//=========================================
console.log("#".repeat(30));
// [83]
function acmTeam(topic) {
  const result = [];

  for (let i = 0; i < topic.length; i++) {
    for (let j = i + 1; j < topic.length; j++) {
      let count = 0;
      for (let k = 0; k < topic[i].length; k++) {
        if (topic[i][k] === "1" || topic[j][k] === "1") {
          count++;
        }
      }
      result.push(count);
    }
  }

  const maxValue = Math.max(...result);
  let count = 0;
  for (const res of result) {
    if (res === maxValue) {
      count++;
    }
  }

  return [maxValue, count];
}

console.log(acmTeam(["10101", "11100", "11010", "00101"]));
//=========================================
console.log("#".repeat(30));
// [85]
function encryption(s) {
  const strLength = s.length;
  const sqrt = Math.sqrt(strLength);
  let rows = Math.floor(sqrt);
  const colomuns = Math.ceil(sqrt);
  rows = rows * colomuns < strLength ? colomuns : rows;

  const grid = [];
  for (let i = 0; i < rows; i++) {
    const str = s.trim().slice(i * colomuns, colomuns + i * colomuns);
    grid.push(str);
  }

  let result = "";
  let counter = 0;
  const currIndex = grid.length - 1;
  while (counter !== colomuns) {
    for (let i = 0; i < grid.length; i++) {
      if (i === currIndex) {
        result += (grid[i][counter] || "") + " ";
      } else {
        result += grid[i][counter] || "";
      }
    }
    counter++;
  }
  return result;
}

console.log(encryption("chillout"));

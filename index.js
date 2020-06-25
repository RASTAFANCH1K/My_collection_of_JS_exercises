// ==================================================
// Вывести числа от 1 до 10, используя разные циклы.
// ==================================================

// ----------------------------------------------
// 1. while:
// ----------------------------------------------

let i = 1;

while (i <= 10) {
  console.log(i);
  i++;
}

// ----------------------------------------------
// 2. do...while:
// ----------------------------------------------

let i = 1;

do {
  console.log(i);
  i++;
} while (i <= 10)

// ----------------------------------------------
// 3. for:
// ----------------------------------------------

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// ==================================================
// Проверить является ли рандомное число чётным или нечётным,
// используя разные условные операторы и конструкции.
// ==================================================

// ----------------------------------------------
// 1. if...else
// ----------------------------------------------

const randomNum = Math.floor(Math.random() * 10);

if (randomNum % 2 !== 0) {
  console.log(`the number ${randomNum} is odd`);
} else {
  console.log(`the number ${randomNum} is even`);
}

// ----------------------------------------------
// 2. ?...:
// ----------------------------------------------

const randomNum = Math.floor(Math.random() * 10);

const resultRandomNum = (randomNum % 2 !== 0) ? 
console.log(`the number ${randomNum} is odd`) :
console.log(`the number ${randomNum} is even`);

// ----------------------------------------------
// 3. switch...case:
// ----------------------------------------------

const randomNum = Math.floor(Math.random() * 10);

switch (randomNum) {
  case 0:
  case 2:
  case 4:
  case 6:
  case 8:
  case 10:
    console.log(`the number ${randomNum} is even`);
    break;
  case 1:
  case 3:
  case 5:
  case 7:
  case 9:
    console.log(`the number ${randomNum} is odd`);
    break;
  default:
    console.log(`There is no values`);
}

// ==================================================
// Используя разный синтаксис, написать функцию, которая складывает два числа и возвращает сумму.
// ==================================================

// ----------------------------------------------
// 1. Function Declaration:
// ----------------------------------------------

function calcSumOfTwoNum(a, b) {
  return a + b;
}

calcSumOfTwoNum();

// ----------------------------------------------
// 2. Function Expression:
// ----------------------------------------------

const calcSumOfTwoNum = function (a, b) {
  return a + b;
};

calcSumOfTwoNum();

// ----------------------------------------------
// 3. Arrow Function:
// ----------------------------------------------

const calcSumOfTwoNum = (a, b) => a + b;

calcSumOfTwoNum();

// ----------------------------------------------
// 4. Immediately Invoked Function Expression:
// ----------------------------------------------

const calcSumOfTwoNum = (function (a, b) {
  return a + b;
})();

console.log(calcSumOfTwoNum);

// ==================================================
// Написать функцию, которая выводит произвольный диапазон чисел.
// ==================================================

const showRangeOfNum = (from, to) => {
  for (let i = from; i <= to; i++) {
    console.log(i);
  }
};

showRangeOfNum();

// ==================================================
// Написать функцию, которая выводит все элементы массива.
// ==================================================

// ----------------------------------------------
// 1. ES5:
// ----------------------------------------------

var showElOfArr = function (arrOfEl) {
  for (var i = 0; i < arrOfEl.length; i++) {
    console.log(arrOfEl[i]);
  }
};

showElOfArr();

// ----------------------------------------------
// 2. ES6:
// ----------------------------------------------

const showElOfArr = arrOfEl => {
  for (el of arrOfEl) console.log(el);
};

showElOfArr();

// ----------------------------------------------
// 3. ES6:
// ----------------------------------------------

const showElOfArr = arrOfEl => arrOfEl.forEach(el => console.log(el));

showElOfArr();

// ==================================================
// Написать функцию, которая выводит нечётные по индексу элементы массива.
// ==================================================

// ----------------------------------------------
// 1. ES5: 
// ----------------------------------------------

var showOddElByIndexInArr = function (arrOfEl) {
  for (var i = 0; i < arrOfEl.length; i++) {
    if (i % 2 === 0) console.log(arrOfEl[i]);
  }
};

showOddElByIndexInArr();

// ----------------------------------------------
// 2. ES6:
// ----------------------------------------------

const showOddElByIndexInArr = arrOfEl => arrOfEl.forEach((el, index) => index % 2 === 0 ? console.log(el) : el);

showOddElByIndexInArr();

// ==================================================
// Вывести нечётные по значению элементы массива.
// ==================================================

// ----------------------------------------------
// 1. ES5:
// ----------------------------------------------

var showOddElByValInArr = function (arrOfEl) {
  for (var i = 0; i < arrOfEl.length; i++) {
    if (arrOfEl[i] % 2 !== 0) console.log(arrOfEl[i]);
  }
};

showOddElByValInArr();

// ----------------------------------------------
// 2. ES6:
// ----------------------------------------------

const showOddElByValInArr = arrOfEl => {
  for (el of arrOfEl) {
    if (el % 2 !== 0) console.log(el);
  };
};

showOddElByValInArr();

// ----------------------------------------------
// 3. ES6:
// ----------------------------------------------

const showOddElByValInArr = arrOfEl => arrOfEl.forEach(el => el % 2 !== 0 ? console.log(el) : el);

showOddElByValInArr();

// ==================================================
// Написать функцию, которая выводит главную диагональ из элементов многомерного массива.
// ==================================================

// ----------------------------------------------
// 1.
// ----------------------------------------------

const showMainDiagonalOfMatrix = arrOfEl => {
  for (let i = 0; i < arrOfEl.length; i++) {
    console.log(arrOfEl[i][i]); // главная диагональ сверху вниз
    // console.log(arrOfEl[arrOfEl.length - i - 1][i]); // главная диагональ снизу вверх
    // console.log(arrOfEl[i][arrOfEl.length - i - 1]); // побочная диагональ сверху вниз
    // console.log(arrOfEl[arrOfEl.length - i - 1][arrOfEl.length - i - 1]); // побочная диагональ снизу вверх
  }
};

showMainDiagonalOfMatrix();

// ----------------------------------------------
// 2.
// ----------------------------------------------

const showMainDiagonalOfMatrix = arrOfEl => {
  for (let i = 0; i < arrOfEl.length; i++) {
    for (let j = 0; j < arrOfEl.length; j++) {
      if (i === j) {
        console.log(arrOfEl[i][j]); // главная диагональ сверху вниз
        // console.log(arrOfEl[arrOfEl.length - i - 1][j]); // главная диагональ снизу вверх
        // console.log(arrOfEl[i][arrOfEl.length - j - 1]); // побочная диагональ сверху вниз
        // console.log(arrOfEl[arrOfEl.length - i - 1][arrOfEl.length - j - 1]); // побочная диагональ снизу вверх
      }
    }
  }
};

showMainDiagonalOfMatrix();

// ==================================================
// Написать функцию, которая выводит элементы многомерного массива находящиеся под главной диагональю матрицы.
// ==================================================

const showElUnderMainDiagonalOfMatrix = arrOfEl => {
  for (let i = 0; i < arrOfEl.length; i++) {
    for (let j = 0; j < i; j++) {
      console.log(arrOfEl[i][j]); // под главной диагональю
      // console.log(arrOfEl[arrOfEl.length - i - 1][arrOfEl.length - j - 1]); // над главной диагональю
      // console.log(arrOfEl[i][arrOfEl.length - j - 1]); // под побочной диагональю
      // console.log(arrOfEl[arrOfEl.length - i - 1][j]); // над побочной диагональю
    }
  }
};

showElUnderMainDiagonalOfMatrix();

// ==================================================
// Написать функцию, которая создаёт массив из произвольного диапазона чисел.
// ==================================================

const createArrFromRangeOfNum = (from, to) => {
  const arrFromRangeOfNum = [];

  for (let i = from; i <= to; i++) {
    arrFromRangeOfNum.push(i);
  }

  return arrFromRangeOfNum;
};

createArrFromRangeOfNum();

// ==================================================
// Написать функцию, которая складывает все числа в массиве.
// ==================================================

// ----------------------------------------------
// 1. ES5:
// ----------------------------------------------

var calcSumOfNumInArr = function (arrOfNum) {
  var sumOfNumInArr = 0;

  for (var i = 0; i < arrOfNum.length; i++) {
    sumOfNumInArr += arrOfNum[i];
  }

  return sumOfNumInArr;
};

calcSumOfNumInArr();

// ----------------------------------------------
// 2. ES6:
// ----------------------------------------------

const calcSumOfNumInArr = arrOfNum => {
  let sumOfNumInArr = 0;

  for (let num of arrOfNum) sumOfNumInArr += num;

  return sumOfNumInArr;
};

calcSumOfNumInArr();

// ----------------------------------------------
// 3. ES6:
// ----------------------------------------------

const calcSumOfNumInArr = arrOfNum => {
  let sumOfNumInArr = 0;

  arrOfNum.forEach(num => sumOfNumInArr += num);

  return sumOfNumInArr;
};

calcSumOfNumInArr();

// ----------------------------------------------
// 4. ES6:
// ----------------------------------------------

const calcSumOfNumInArr = arrOfNum => arrOfNum.reduce((sumOfNumInArr, num) => sumOfNumInArr + num, 0);

calcSumOfNumInArr();

// ==================================================
// Получить минимальное число в массиве.
// ==================================================

// ----------------------------------------------
// 1. ES5:
// ----------------------------------------------

var getMinNumInArr = function (arrOfNum) {
  var minNum = arrOfNum[0];

  for (var i = 0; i < arrOfNum.length; i++) {
    if (minNum > arrOfNum[i]) minNum = arrOfNum[i];
  }

  return minNum;
};

getMinNumInArr();

// ----------------------------------------------
// 2. ES6:
// ----------------------------------------------

const getMinNumInArr = arrOfNum => {
  const minNum = arrOfNum.reduce((min, num) => min > num ? min = num : min, arrOfNum[0]);
  
  return minNum;
};

getMinNumInArr();

// ----------------------------------------------
// 3. ES6:
// ----------------------------------------------

const getMinNumInArr = arrOfNum => Math.min(...arrOfNum);

getMinNumInArr();

// ==================================================
// Получить среднее арифметическое число в массиве.
// ==================================================

// ----------------------------------------------
// 1. ES5:
// ----------------------------------------------

var calcAvarageNumInArr = function (arrOfNum) {
  var sumOfNumInArr = 0;
  var avarageNum;

  for (var i = 0; i < arrOfNum.length; i++) {
    sumOfNumInArr += arrOfNum[i];
  }

  avarageNum = sumOfNumInArr / arrOfNum.length;

  return avarageNum;
};

calcAvarageNumInArr();

// ----------------------------------------------
// 2. ES6:
// ----------------------------------------------

const calcAvarageNumInArr = arrOfNum => {
  let sumOfNumInArr = 0;
  let avarageNum;

  for (let num of arrOfNum) sumOfNumInArr += num;
  
  avarageNum = sumOfNumInArr / arrOfNum.length;

  return avarageNum;
};

calcAvarageNumInArr();

// ----------------------------------------------
// 3. ES6:
// ----------------------------------------------

const calcAvarageNumInArr = arrOfNum => {
  const avarageNum = arrOfNum.reduce((sumOfNumInArr, num) => sumOfNumInArr + num / arrOfNum.length, 0);

  return avarageNum;
};

calcAvarageNumInArr();

// ==================================================
// Написать функцию, которая разворачивает массив.
// ==================================================

// ----------------------------------------------
// 1. ES5:
// ----------------------------------------------

var reverseArr = function (arr) {
  var tmp;

  for (var i = 0, j = arr.length - 1; i < j; i++, j--) {
    tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }

  return arr;
};

reverseArr();

// ----------------------------------------------
// 2. ES6:
// ----------------------------------------------

const reverseArr = arr => {
  for (let i = arr.length - 1; i >= 0; i--) {
    arr.push(arr[i]);
  }

  arr.splice(0, arr.length / 2);

  return arr;
};

reverseArr();

// ----------------------------------------------
// 3. ES6:
// ----------------------------------------------

const reverseArr = arr => arr.reverse();

reverseArr();

// ==================================================
// Написать функцию, которая cортирует массив по возрастанию.
// ==================================================

// ----------------------------------------------
// 1. ES5:
// ----------------------------------------------

var sortArrInAscendingOrder = function (arr) {
  var tmp;

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
  return arr;
};

sortArrInAscendingOrder();

// ----------------------------------------------
// 2. ES6:
// ----------------------------------------------

const sortArrInAscendingOrder = arr => arr.sort((a, b) => {
  if (a > b) return 1;

  return -1;
}); 

sortArrInAscendingOrder();

// ----------------------------------------------
// 3. ES6:
// ----------------------------------------------

const sortArrInAscendingOrder = arr => arr.sort((a, b) => a - b);

// ==================================================
// Исправить функцию, чтобы вывести произвольный диапазон чисел:

var showRangeOfNum = function (from, to) {
  for (var i = from; i <= to; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
};

showRangeOfNum();

// ==================================================

// ----------------------------------------------
// 1. ES5:
// ----------------------------------------------

var showRangeOfNum = function (from, to) {
  for (var i = from; i <= to; i++) {
    setTimeout(function (i) {
      console.log(i);
    }, i * 1000, i);
  }
};

showRangeOfNum();

// ----------------------------------------------
// 2. ES5:
// ----------------------------------------------

var showRangeOfNum = function (from, to) {
  for (var i = from; i <= to; i++) {
    setTimeout((function (i) {
      return function () {
        console.log(i);
      }
    })(i), i * 1000);
  }
};

showRangeOfNum();

// ----------------------------------------------
// 3. ES5:
// ----------------------------------------------

var showRangeOfNum = function (from, to) {
  for (var i = from; i <= to; i++) {
    (function (i) {
      setTimeout(function () {
        console.log(i);
      }, i * 1000);
    })(i)
  }
};

showRangeOfNum();

// ----------------------------------------------
// 4. ES5:
// ----------------------------------------------

var showRangeOfNum = function (from, to) {
  for (var i = from; i <= to; i++) {
    setTimeout((function (i) {
      console.log(i);
    }).bind(null, i), i * 1000);
  }
};

showRangeOfNum();

// ----------------------------------------------
// 5. ES6:
// ----------------------------------------------

const showRangeOfNum = (from, to) => {
  for (let i = from; i <= to; i++) {
    setTimeout(() => console.log(i), i * 1000);
  }
};

showRangeOfNum();

// ==================================================
// Написать функцию, которая определяет, является ли строка палиндромом
// ==================================================

// ----------------------------------------------
// 1. ES5:
// ----------------------------------------------

var checkPalindrome = function (str) {
  str = str.toLowerCase();
  var reversedStr = '';

  for (var i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }

  var isPalindome = reversedStr === str;

  return isPalindome;
};

checkPalindrome();

// ----------------------------------------------
// 2. ES6:
// ----------------------------------------------

const checkPalindrome = str => {
  str = str.toLowerCase();
  const isPalindome = str === str.split('').reverse().join('');

  return isPalindome;
};

checkPalindrome();

// ==================================================
// Написать функцию, которая определяет, является ли строки в массиве палиндромами,
// и возвращает новый массив из палиндромов.
// ==================================================

// ----------------------------------------------
// 1. ES5:
// ----------------------------------------------

var getArrOfPalindromes = function (arr) {
  var arrOfPalindromes = [];

  for (var i = 0; i < arr.length; i++) {
    var str = arr[i].toLowerCase();
    var reversedStr = '';
   
    for(var j = str.length - 1; j >= 0; j--) {
      reversedStr += str[j];

      if (reversedStr === str) {
        arrOfPalindromes.push(str);
      } 
    }
  }

  return arrOfPalindromes;
};

getArrOfPalindromes();

// ----------------------------------------------
// 2. ES6:
// ----------------------------------------------

const getArrOfPalindromes = arrOfStr => {
  const arrOfPalindromes = [];

  arrOfStr.forEach(str => {
    str = str.toLowerCase();

    if (str === str.split('').reverse().join('')) {
      arrOfPalindromes.push(str);
    }
  })

  return arrOfPalindromes;
};

getArrOfPalindromes();

// ==================================================
// Написать функцию, выводящую в консоль числа от 1 до n, где n — это целое число, 
// которая функция принимает в качестве параметра, с такими условиями:
// 1. вывод fizz вместо чисел, кратных 3;
// 2. вывод buzz вместо чисел, кратных 5;
// 3. вывод fizzbuzz вместо чисел, кратных как 3, так и 5.
// ==================================================

const showFizzBuzz = num => {
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzBuzz');
    } else if(i % 3 === 0) {
      console.log('Fizz');
    } else if(i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
};

showFizzBuzz();

// ==================================================
// Написать функцию, которая проверяет, являются ли две строки анаграммами, 
// причем регистр букв не имеет значения. Учитываются лишь символы,
// пробелы или знаки препинания в расчет не берутся.
// ==================================================

const buildCharObject = str => {
  const charObj = {};

  for (let char of str.replace(/[^\w]/g).toLowerCase()) {
    charObj[char] = charObj[char] + 1 || 1;
  }

  return charObj;
};

const getAnagram = (strA, strB) => {
  const aCharObject = buildCharObject(strA);
  const bCharObject = buildCharObject(strB);

  if (Object.keys(aCharObject).length !== Object.keys(bCharObject).length) {
    return false;
  }
  
  for (let char in aCharObject) {
    if (aCharObject[char] !== bCharObject[char]) {
      return false;
    }
  }
  
  return true;
};

getAnagram();

// ==================================================
// Написать функцию, принимающую строку в качестве аргумента и возвращающую количество гласных, 
// которые содержатся в строке.
// ==================================================

// ----------------------------------------------
// 1.
// ----------------------------------------------

const getAmountOfVowelsInStr = str => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  let amountOfVowels = 0;

  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      amountOfVowels++;
    }
  }

  return amountOfVowels;
};

getAmountOfVowelsInStr();

// ----------------------------------------------
// 2.
// ----------------------------------------------

const getAmountOfVowelsInStr = str => {
  const matched = str.match(/[aeiou]/gi);
  const amountOfVowels = matched ? matched.length : 0;

  return amountOfVowels;
};

getAmountOfVowelsInStr();

// ==================================================
// Написать функцию, которая возвращает последнее n-число в последовательности Фибоначчи, 
// причем n — число, которое передается в качестве аргумента функции.
// ==================================================

// ----------------------------------------------
// 1.
// ----------------------------------------------

const getLastFibonacciNum = num => {
  const arrOfFibonacci = [0, 1];

  for(let i = 2; i <= num; i++) {
    const prevNum1 = arrOfFibonacci[i - 1];
    const prevNum2 = arrOfFibonacci[i - 2];

    arrOfFibonacci.push(prevNum1 + prevNum2);
  }

  const lastFibonacciNum = arrOfFibonacci[num];
  
  return lastFibonacciNum;
};

getLastFibonacciNum();

// ----------------------------------------------
// 2.
// ----------------------------------------------

const getLastFibonacciNum = num => {
  if (num < 2) return num;
  
  const lastFibonacciNum = getLastFibonacciNum(num - 1) + getLastFibonacciNum(num - 2);

  return lastFibonacciNum;
};

getLastFibonacciNum();

// ==================================================
// Написать функцию, которая возвращает массив из n-чисел в определенной последовательности Фибоначчи, 
// причем n — число, которое передается в качестве аргумента функции.
// ==================================================

// ----------------------------------------------
// 1.
// ----------------------------------------------

const getArrOfFibonacci = num => {
  const arrOfFibonacci = [0, 1];

  for(let i = 2; i <= num; i++) {
    const prevNum1 = arrOfFibonacci[i - 1];
    const prevNum2 = arrOfFibonacci[i - 2];

    arrOfFibonacci.push(prevNum1 + prevNum2);
  }
  
  return arrOfFibonacci;
};

getArrOfFibonacci();

// ----------------------------------------------
// 2.
// ----------------------------------------------

const getArrOfFibonacci = num => {
  if (num == 0) return [0];

  if (num == 1) return [0, 1];

  const arr = getArrOfFibonacci(num - 1);
  const arrOfFibonacci = [...arr, arr[num - 1] + arr[num - 2]];

  return arrOfFibonacci;
};

getArrOfFibonacci();

// ==================================================
// Написать функцию counter на примере замыкания.
// ==================================================

const Counter = (count = 0) => {
  return function() {
    count++;

    return count;
  }
};

const counter = Counter();

console.log(counter());
console.log(counter());
console.log(counter());

const anotherCounter = Counter();

console.log(anotherCounter());
console.log(anotherCounter());
console.log(anotherCounter());

// ==================================================
// Написать функцию, которая складывает три числа на примере замыкания.
// ==================================================

const calcSumOfNum = (num1) => {
  return function(num2) {
    return function(num3) {
      return num1 + num2 + num3;
    }
  }
};

const res1 = calcSumOfNum(1);
const res2 = res1(2);
const res3 = res2(3);

console.log(res3);

// ==================================================
// Написать функцию, которая позволяет узнать равен ли один из входных параметров 42.
// ==================================================

// ----------------------------------------------
// 1. ES5:
// ----------------------------------------------

var check42 = function () {
  var res = Array.prototype.slice.call(arguments).indexOf(42) !== -1;

  return res;
}

check42(1, 2, 3, 42);

// ----------------------------------------------
// 2. ES5:
// ----------------------------------------------

function check42() {
  let res = [].indexOf.call(arguments, 42) !== -1;

  return res;
}

check42(1, 2, 3, 42);

// ----------------------------------------------
// 3. ES6:
// ----------------------------------------------

function check42() {
  return Array.from(arguments).indexOf(42) !== -1;
}

check42(1, 2, 3, 42);

// ----------------------------------------------
// 4. ES6:
// ----------------------------------------------

const check42 = (...args) => args.includes(42);

check42(1, 2, 3, 42);

// ==================================================
// Написать функцию, которая удаляет из строки повторяющиеся символы, оставляя только уникальные.
// ==================================================

// ----------------------------------------------
// 1. ES5:
// ----------------------------------------------

var getUniqueStr = function (str) {
  var uniqueStr = '';

  for (var i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      uniqueStr += str[i];
    }
  }

  return uniqueStr;
}

getUniqueStr();

// ----------------------------------------------
// 2. ES6:
// ----------------------------------------------

const getUniqueStr = str => {
  const arrOfChar = str.split('');

  const uniqueStr = arrOfChar.reduce((acc, char) => {
    if (arrOfChar.indexOf(char) === arrOfChar.lastIndexOf(char)) {
      acc += char;
    }

    return acc;
  }, '');

  return uniqueStr;
}

getUniqueStr();

// ----------------------------------------------
// 3. ES6:
// ----------------------------------------------

const getUniqueStr = str => {
  const arrOfChar = str.split('');

  let uniqueStr = '';

  arrOfChar.forEach(char => {
    if (arrOfChar.indexOf(char) === arrOfChar.lastIndexOf(char)) {
      uniqueStr += char;
    }
  })

  return uniqueStr;
}

getUniqueStr();

// ==================================================
// Избавиться от вложености в объекте.

let groups = {
  a: 1,
  b: 2,
  d: { c: 3 }
}

// ==================================================

groups = { 
  ...groups,
  ...groups.d
}

delete groups.d;

console.log(groups);

// ==================================================
// ...
// ==================================================

var randomNum = Math.floor(Math.random() * 10);

function superFunction() {
  try {
    if (randomNum % 2 === 0) throw new Error(`the number ${randomNum} is unlucky`); 
    var res = `the number ${randomNum} is lucky`
    return res;
  } catch(err) {
    console.log('UNLUCKY NUMBER', err)
  } finally {
    console.log('Finished');
  }
}

superFunction();

// ==================================================
// Написать функцию, которая подсчитывает количество вхождений подстрок в строке.
// ==================================================

const countAmountOfsubstrInstr = str => {
  let counter;
  let amountOfsubstrInstr = '';

  for (let i = 0; i < str.length; i++) {
    counter = str.split(str[i]).length - 1;

    if (!amountOfsubstrInstr.includes(str[i])) {
      amountOfsubstrInstr += counter + str[i];
    }
  }

  return amountOfsubstrInstr;
};

countAmountOfsubstrInstr();

// ==================================================
// Написать функцию, которая возвращает массив из строк первые символы которых совпадают с подстрокой.
// ==================================================

// ----------------------------------------------
// 1.
// ----------------------------------------------

const getArrOfStrIncludingFirstSubstr = (arr, substr) => {
  const arrOfStrIncludingSubstr = [];

  for (let i = 0; i < arr.length; i++) {
    const str = arr[i].toLowerCase();

    if (substr.includes(str[0])) {
      arrOfStrIncludingSubstr.push(arr[i]);
    }
  }

  return arrOfStrIncludingSubstr;
};

getArrOfStrIncludingFirstSubstr();

// ----------------------------------------------
// 2.
// ----------------------------------------------

const getArrOfStrIncludingFirstSubstr = (arr, substr) => {
  const arrOfStrIncludingSubstr = [];

  arr.forEach(el => {
    const str = el.toLowerCase();

    if (substr.includes(str[0])) {
      arrOfStrIncludingSubstr.push(el);
    }
  })

  return arrOfStrIncludingSubstr;
};

getArrOfStrIncludingFirstSubstr();

// ----------------------------------------------
// 3.
// ----------------------------------------------

const getArrOfStrIncludingFirstSubstr = (arr, substr) => {
  const arrOfStrIncludingSubstr = arr.filter(el => {
    const str = el.toLowerCase();

    if (substr.includes(str[0])) {
      return el;
    }
  })

  return arrOfStrIncludingSubstr;
};

getArrOfStrIncludingFirstSubstr();

// ==================================================
// Написать функцию, которая возвращает количество вхождений подстроки в строке.
// ==================================================

const getAmountOfSubstrInStr = (str, substr) => str.split(substr).length - 1;

getAmountOfSubstrInStr();

// ==================================================
// Написать функцию которая принимает строку и возвращает подстроку и количество таких подстрок в строке,
const str = 'ababab';
// получить результат ['ab', 3].
// ==================================================

const func = str => {
  let amountOfSymbols = 1;
  let subString = '';
  let counter = 0;

  for (let i = 0; i < str.length;) {
    if (str.slice(0, amountOfSymbols) !== 
      str.slice(amountOfSymbols, amountOfSymbols + amountOfSymbols)) {
      amountOfSymbols++;
      continue;
    }
    subString = str.slice(0, amountOfSymbols);
    i = i + amountOfSymbols;
    counter++;
  }

  return [subString, counter];
};

func();

// ==================================================
// Написать функцию, которая принимает число и проверяет простое ли оно.
// ==================================================

const checkPrimeNum = num => {
  for (let i = 2; i < num; i++) { 
    const primeNum = num % i === 0 ? false : true;

    return primeNum;
  }
};

checkPrimeNum();

// ==================================================
// Написать функцию, которая превращает многомерный массив в одномерный
// [[1, 2, 3], [4, 5, 6], [7, 8, 9]] => [1, 2, 3, 4, 5, 6, 7, 8, 9] 
// ==================================================

const transformMultiArrIntoOneArr = multyArr => {
  const res = multyArr.reduce((acc, el) => ([...acc, ...el]), []);

  return res;
};

transformMultiArrIntoOneArr();

// ==================================================
// Как проверить на каком индексе находится объект?

const elements = [1, 2, 3, {a: 1}];

// ==================================================

const elements = [1, 2, 3, {a: 1}.toString()];

console.log(elements.indexOf({a: 1}.toString()));

// ----------------------------------------------

const elements = [1, 2, 3, {a: 1}];

elements.forEach((el, index) => {
  if (typeof el === 'object' && el.toString() === {a: 1}.toString()) {
    console.log(index);
  }
})

// ==================================================
// ...
// ==================================================

const promise = new Promise((res, rej) => {
  setTimeout(() => res(1), 100);
});

promise.then((val) => {
  console.log(val);
  console.log(2);
  console.log(3);
});

// ==================================================
// Написать функцию, которая записывает элементы из массива arr2 в новый массив которых нет в arr1!
// ==================================================

// ----------------------------------------------
// 1. ES5:
// ----------------------------------------------

var arr1 = [5, 2, 'a'];

var arr2 = [6, 5, 2, 4, 'a'];

var func = function (arr1, arr2) {
  let arr3 = arr1.concat(arr2);

  let res = [];

  for (el of arr3) {
    if (arr3.lastIndexOf(el) === arr3.indexOf(el)) {
      res.push(el);
    }
  }
  return res;
}

func(arr1, arr2);

// ----------------------------------------------
// 2. ES6:
// ----------------------------------------------

var arr1 = [5, 2, 'a'];

var arr2 = [6, 5, 2, 4, 'a'];

var func = function (arr1, arr2) {
  let arr3 = arr2.filter(item => arr1.indexOf(item) == -1);

  return arr3;
}

func(arr1, arr2);

// ==================================================
// Переопределить toString функции и обьекта.
// ==================================================

const func = () => 'ololo';

func.toString = () => 'trololo';

func.toString();

const obj = {
  a: 1,
  b: 2,
  c: 3
};

obj.toString = () => 'trololo';

obj.toString();

// ==================================================
// ...
// ==================================================

var Person = function ({name, lastName, age}) {
  if (name) this.name = name;
  if (lastName) this.lastName = lastName;
  if (age) this.age = age;
}

new Person( { name: 'Vasia' } );

// ==================================================
// Вевести все елементы массива, если число меньше 5-ти, то переписать на число 5.
// ==================================================

// ----------------------------------------------
// 1. ES5:
// ----------------------------------------------

var func = function (arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 5) arr[i] = 5;
  }

  return arr;
};

func();

// ----------------------------------------------
// 1. ES5:
// ----------------------------------------------

const func = arr => arr.map(num => num < 5 ? num = 5 : num);

func();

// ==================================================
// Прибавить 10 к каждому елементу массива.
// ==================================================

// ----------------------------------------------
// 1. ES5:
// ----------------------------------------------

var func = function (arr) {
  var res = [];

  for (var i = 0; i < arr.length; i++) {
    res.push(arr[i] + 10);
  }

  return res;
};

func();

// ----------------------------------------------
// 2. ES6:
// ----------------------------------------------

const func = (arr) => {
  const res = [];

  arr.forEach(el => res.push(el + 10));

  return res;
};

func();

// ----------------------------------------------
// 3. ES6:
// ----------------------------------------------

const func = arr => arr.map(num => num + 10);

func();

// ==================================================
// Написать функцию, которая складывает произвольный диапазон чисел используя рекурсию.
// ==================================================

const func = (a, b) => {
  if (a === b) return b;

  return a + func(a + 1, b);
}

func();

// ==================================================
// Написать функцию,которая складывает нечётные числа из произвольного диапазона чисел используя рекурсию.
// ==================================================

const func = (a, b) => {
  if (a % 2 !== 0) return func(a + 1, b);

  if (a === b) {
    return b;
  } 

  return a + func(a + 1, b);
}

func();





















// ==================================================
// Найти максимальное число в массиве, и минимальное которое имеет меньший индекс чем максимальное.
// ==================================================

const arr = [5, 6, 7, 8, 9, 1, 2, 3, 4];

const func = arr => {
  const max = Math.max(...arr);
  const minBeforeMax = [];
  let min;
  let res;

  for (let i = 0; i < arr.indexOf(max); i++) {
    minBeforeMax.push(arr[i]);
    min = Math.min(...minBeforeMax);
  }

  return res = `max: ${max}, min: ${min}`; 
}

func(arr);

// ==================================================
// ...
const arr = [1, 0, 2, '', 3, undefined, 4, null, 5, NaN, 6, 7, 8, 9];
// ==================================================

// ----------------------------------------------
// 1.
// ----------------------------------------------

const func = arr => arr.filter(el => el);

func();

// ----------------------------------------------
// 2.
// ----------------------------------------------

const func = arr => arr.filter(Boolean);

func();

// ==================================================
// Удалить из строки повторяющиеся символы.
// ==================================================

// ----------------------------------------------
// 1. ES5:
// ----------------------------------------------

function func(str) {
  let res = '';

  for (var i = 0; i < str.length; i++) {
    if (res.indexOf(str[i]) === -1) res += str[i];
  }

  return res;
}

func();

// ----------------------------------------------
// 2. ES6:
// ----------------------------------------------

const func = str => {
  str = str.split('');

  let res = '';

  str.forEach(el => res.indexOf(el) === -1 ? res += el : res);

  return res;
}

func();

// ----------------------------------------------
// 3. ES6:
// ----------------------------------------------

const func = str => {
  str = str.split('');

  return str.reduce((acc, curr) => !acc.includes(curr) ? acc + curr : acc, '');
}

func();

// ==================================================
// Вывести количество слов в строке.
// ==================================================

const str = 'Hi, I am learning JavaScript';

const func = str => str.split(' ').length;

func(str);

// ==================================================
// Удалить пробелы в строке.
// ==================================================

const func = (str) => {
  return str.split(" ").join("");
};

func(str);

const func = (str) => {
  return str.replace(/\s/g, '');
};

func(str);

// ==================================================
// Заменить пробелы на зяпятые.
// ==================================================

const str = 'Hi, i am learning javascript';
// ANSWER:

let func = (str) => str.replace(/ /g, ',');

func(str);

let func = (str) => str.split(" ").join(",");

func(str);

let func = (str) => str.split(",").join("").split(" ").join(",");

func(str);

// ==================================================
// Найти в массиве число 5.
// ==================================================

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let func = (arr) => arr.find(el => el === 5);

func(arr);

let func = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 5) return arr[i];
  }
};

func(arr);

// ==================================================
// Есть массив arr2 разложить положительные в один массив а отрицательные в другой!!
// ==================================================

const arr2 = [5, 2, 5, -1,  6, -3, 64, -23, -92, 23, 3];

let positive = [];

let negative = [];

arr2.filter( item => item > 0 ? positive.push(item) : negative.push(item) )

console.log(positive);

console.log(negative);

// ==================================================
// Есть массив arr1 отсортировать этот вложенный массив [5, 1, 7,3 ,4, 6]
// ==================================================

// Способ №1
const arr1 = [ [5, 2, 5,1, [5, 1, 7,3 ,4, 6] ], 6, 23, 64, -23, -92, 23, 3 ]

let openSubarray = arr1.flat();

function getInsertedArr( [,,,, insertedArr] ) {
  return insertedArr.sort( (a, b) => a - b );
}

getInsertedArr(openSubarray);

// Способ №2
const arr1 = [ [5, 2, 5,1, [5, 1, 7,3 ,4, 6] ], 6, 23, 64, -23, -92, 23, 3 ]

let openSubarray = arr1.reduce( (prev, item) => prev.concat(item) );

function getInsertedArr ( [,,,, insertedArr] ) {
  return insertedArr.sort( (a, b) => a - b );
}

getInsertedArr(openSubarray);

// ==================================================
// Дан массив arr! Необходимо найти самое большое по модулю!!! Решить минимум 2-мя способами!! Один из  них с помощью find!!
// ==================================================

// Способ №1
const arr = [5, 6, 23, 64, -23, -92, 23, 3];

let maxValue = 0;

arr.find(item => {
  if (Math.abs(item) > maxValue) {
    maxValue = Math.abs(item);
  }
})

console.log(maxValue);

// Способ №2
const arr = [5, 6, 23, 64, -23, -92, 23, 3];

let initial = arr[0]; // let initial = 0;

arr.reduce( (prev, curr) => Math.abs(prev) < Math.abs(curr) ? curr : prev, initial );

// const arr = [5, 6, 23, 64, -23, -92, 23, 3];

// arr.reduce( (prev, curr) => Math.abs(prev) < Math.abs(curr) ? curr : prev, 0 );

const arr = [5, 6, 23, 64, -23, -92, 23, 3];

let maxValue = arr[0]; // let maxValue = 0;

for (let i = 1; i < arr.length; i++) {
  if ( Math.abs(maxValue) < Math.abs( arr[i] ) ) maxValue = arr[i];
}

console.log(maxValue);

// ==================================================
// Есть обьект car! пробежаться по обьекту через for in и подсчитать количество свойств в обьекте,
// ==================================================

// Способ №1
const car = {
  model: 'BMW',
  price: 45000,
  year: 2019,
  country: 'Germany',
};

let counter = 0;

for (key in car) {
  counter++;
}

console.log(counter);

// Способ №2
const car = {
  model: 'BMW',
  price: 45000,
  year: 2019,
  country: 'Germany',
};

Object.keys(car).length;

// ==================================================
// ...
// ==================================================

let result = { b: 23, w: 5};

Object.keys(result).forEach((el) => { // вместо for in
  console.log(result[el]);
});

// ==================================================
// Вывести массив только из тех строк, у которых есть символы a и b в подстроке.
// ==================================================

const arr = ['aa', 'ab', 'bb', 'ba', 'cc', 'abc', 'cab', 'cba'];
// ANSWER:

// 1. filter: (ситуация-1)
let func = (arr) => {
  arr = arr.filter(el => {
    if (el.includes('a') && el.includes('b')) {
      return el;
    }
  });
  return arr;
}

func(arr);

// 2. filter: (ситуация-2)
let func = (arr) => {
  let substr = 'a, b';
  arr = arr.filter(el => {
    if (substr.includes(el[el.indexOf('a')] && el[el.indexOf('b')])) {
      return el;
    }
  });
  return arr;
}

func(arr);

// 3. forEach: (ситуация-1)
let func = (arr) => {
  let res = [];
  arr.forEach(el => {
    if (el.includes('a') && el.includes('b')) {
      res.push(el);
    }
  })
  return res;
}

func(arr);

// 4. forEach: (ситуация-2)
let func = (arr) => {
  let substr = 'a, b';
  let res = [];
  arr.forEach(el => {
    if (substr.includes(el[el.indexOf('a')] && el[el.indexOf('b')])) {
      res.push(el);
    }
  })
  return res;
}

func(arr);

// 5. for: (ситуация-1)
let func = (arr) => {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    if (word.includes('a') && word.includes('b')) {
      res.push(arr[i]);
    }
  }
  return res;
}

func(arr);

// 6. for: (ситуация-2)
let func = (arr) => {
  let substr = 'a, b';
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    if (substr.includes(word[word.indexOf('a')] && 
                        word[word.indexOf('b')])) {
      res.push(arr[i]);
    }
  }
  return res;
}

func(arr);

// ==================================================
// Вывести самое длинное слово в строке
// ==================================================

const str = 'Hi, i am learning javascript';
// ANSWER:

// 1. sort: 
let func = (str) => {
  str = str.split(',').join('').split(' ');
  str.sort((a, b) => b.length - a.length);
  return str[0];
};

func(str);

// 2. reduce:
const str = 'Hi, i am learning javascript';
let func = (str) => {
  str = str.split(',').join('').split(' ');
  return str.reduce((acc, curr) => curr.length > acc.length ? curr : acc);
};

func(str);

// 3. for:
const str = 'Hi, i am learning javascript';
let func = (str) => {
  str = str.split(',').join('').split(' ');
  let longest = [0];
  for (let i = 0; i < str.length; i++) {
    if (longest.length < str[i].length){
      longest += str[i];
    }
  }
  return longest;
}

func(str);

// ==================================================
// Нужно найти максимальное значение в массиве, и минимальное,  которое стоит до максимального.
// И это нужно сделать за один цикл. То есть максимальное 
// 1000 а минимальное стоящее перед ним 1.
// ==================================================

const arr = [ 1, -53, 6, 1000, -1, 340000, -233, 12];
let min =arr[0];
let max = min;
let res = [];
for(let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
        res = [min, max];
    }
    if (arr[i] < min) {
        min = arr[i];
    }
}
console.log(res);

// ==================================================
// ...
// ==================================================

var obj = {
  id: 42,
  counter: function counter() {
    setTimeout(() => {
      console.log(this.id);
    }, 1000);
  }
}

var obj = {
  id: 42,
  counter: function counter() {
    setTimeout(function() {
      console.log(this.id);
    }.bind(this), 1000);
  }
}

// ==================================================
// ...
// ==================================================

function func(a, b, c) {
  console.log(this.name, a, b, c);
}

const a = { name: 'Ross' };

func.call(a, 1, 2, 3);



function func(a, b, c) {
  console.log(this.name, a, b, c);
}

const a = { name: 'Ross' };

func.apply(a, [1, 2, 3]);



function func(a, b, c) {
  console.log(this.name, a, b, c);
}

const a = { name: 'Ross' };

func.bind(a, 1, 2, 3)();

// ==================================================
// ...
// ==================================================

function pow(x, n) {
  let result = 1;

  if (n < 0) {
    alert(`Степень ${n} не поддерживается,
      введите целую степень, большую 0`);
  }

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

// ==================================================
// Написать функцию, которые преобразует обьект в массив, 
// который содержит массив ключа и значения, не использую  Object.entries()
// objToArray({a:3, b:5}) => [[a,3], [b,5]]
// ==================================================

var obj = {"1":5,"2":7,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0}
var result = Object.keys(obj).map(function(key) {
  return [Number(key), obj[key]];
});

console.log(result);

var obj = {
  "1": 5,
  "2": 7,
  "3": 0,
  "4": 0,
  "5": 0,
  "6": 0,
  "7": 0,
  "8": 0,
  "9": 0,
  "10": 0,
  "11": 0,
  "12": 0
};
// get all object property names
var res = Object.keys(obj)
  // iterate over them and generate the array
  .map(function(k) {
    // generate the array element 
    return [+k, obj[k]];
  });

console.log(res);

// ==================================================
// Переписать класс используя синтаксис ES5.
// ==================================================

var Person = (function () {
  function Person(name) {
    this.name = name;
  }

  Person.prototype.sayName = function () {
    return 'My name is ' + this.name;
  }

  return Person;
})();

new Person();

// ==================================================
// Переписать метод массива push используя синтаксис ES5.
// ==================================================

Array.prototype.myPush = function(el) {
  var arr = this;
  
  arr[arr.length] = el;

  return arr;
}

// ==================================================
// Переписать метод массива join используя синтаксис ES5.
// ==================================================

Array.prototype.myJoin = function(sep) {
  var arr = this;
  var str = '';
 
  for (var i = 0; i < arr.length; i++) {
    if (i !== arr.length - 1) {
      str += arr[i] + sep;
    } else {
      str += arr[i];
    }
  }

  return str;
}

// ==================================================
// Переписать метод массива bind используя синтаксис ES5.
// ==================================================

Function.prototype.myBind = function(arg) {
  var thisArg = this;

  var res = function () {
    return thisArg.apply(arg, arguments);
  }

  return res;
}

// ==================================================
// Переписать метод массива map используя синтаксис ES5.
// ==================================================

Array.prototype.myMap = function(callback) {
  var arr = this;
  var res = [];

  for (var index = 0; index < arr.length; index++) {
    var callbackVal = callback(arr[index], index, arr);

    res.push(callbackVal);
  }

  return res;
}

// ==================================================
// Переписать метод массива find используя синтаксис ES5.
// ==================================================

Array.prototype.myFind = function(callback) {
  var arr = this;

  for (var index = 0; index < arr.length; index++) {
    var callbackVal = callback(arr[index], index, arr);
    
    if (callbackVal) return arr[index];
  }
}

// ==================================================
// Переписать метод массива filter используя синтаксис ES5.
// ==================================================

Array.prototype.myFilter = function(callback) {
  var arr = this;
  var res = [];

  for (var index = 0; index < arr.length; index++) {
    var callbackVal = callback(arr[index], index, arr);
    
    if (callbackVal) res.push(arr[index]);
  }

  return res;
}

// ==================================================
// Переписать метод массива reduce используя синтаксис ES5.
// ==================================================

Array.prototype.myReduce = function(callback, initVal) {
  var arr = this;
  var start = initVal ? 0 : 1;
  var acc = initVal ? initVal : arr[0];
 
  for (var index = start; index < arr.length; index++) {
    var callbackVal = callback(acc, arr[index], index, arr);
    acc = callbackVal;
  }

  return acc;
}

// ==================================================
// Переписать метод массива some используя синтаксис ES5.
// ==================================================

Array.prototype.mySome = function(callback) {
  var arr = this;
  var arrOfBool = [];
  var res;

  for (var index = 0; index < arr.length; index++) {
    var callbackVal = callback(arr[index], index, arr);
    
    callbackVal ? arrOfBool.push(true) : arrOfBool.push(false);
  }

  arrOfBool.indexOf(true) === -1 ? res = false : res = true;

  return res;
}

// ==================================================
// Переписать метод массива every используя синтаксис ES5.
// ==================================================

Array.prototype.myEvery = function(callback) {
  var arr = this;
  var arrOfBool = [];
  var res;

  for (var index = 0; index < arr.length; index++) {
    var callbackVal = callback(arr[index], index, arr);
    
    callbackVal ? arrOfBool.push(true) : arrOfBool.push(false);
  }

  arrOfBool.indexOf(false) === -1 ? res = true : res = false;

  return res;
}

// ==================================================
// Переписать метод массива splice используя синтаксис ES5.
// ==================================================

Array.prototype.myCustomSplice = function(start, deleteCount) {
  var arr = this;
  
  var res = [];
  var removed = [];
  var argsLen = arguments.length;
  var arrLen = arr.length;
  var i, k;

  start = parseInt(start, 10);
  deleteCount = parseInt(deleteCount, 10);

  if (start < 0) {
    start = arrLen + start;
    start = (start > 0)? start : 0;
  } else {
    start = (start < arrLen)? start : arrLen;
  }

  if (deleteCount < 0) deleteCount = 0;

  if (deleteCount > (arrLen - start)) {
    deleteCount = arrLen - start;
  }

  for (i = 0; i < start; i++) {
    res[i] = arr[i];
  }

  for (i = 3; i < argsLen; i++) {
    res.push(arguments[i]);
  }

  for (i = start; i < start + deleteCount; i++) {
    removed.push(arr[i]);
  }

  for (i = start + (deleteCount || 0); i < arrLen; i++) {
    res.push(arr[i]);
  }

  arr.length = 0;
  i = res.length;
  while (i--) {
    arr[i] = res[i];
  }

  return removed;
}

// ==================================================
// Переписать метод массива split используя синтаксис ES5.
// ==================================================

String.prototype.mySplit = function(sep) {
  var str = this;
  var nextVal = '';
  var res = [];

  for (var i = 0; i < str.length;) { 
    if (sep === '') {
      nextVal += str[i];
      res.push(nextVal);
      nextVal = '';
      i++;
    } else if (str[i] === sep[0]) {
      var split_length_remaining = sep.length - 1;
      var split_length_passed = 1;
      var similarSplit = str[i];

      while(split_length_remaining) {
        if (str[i + split_length_passed] === sep[split_length_passed]) {
          similarSplit += str[i + split_length_passed];
          split_length_passed++;
          split_length_remaining--;
        } 
      }

      if (!split_length_remaining) {
        res.push(nextVal);
        nextVal = '';
      } else  {
        nextVal += similarSplit;
      }

      i = i + split_length_passed;
    } else {
      nextVal += str[i];
      i++;
    }
  }

  if (sep !== '') {
    res.push(nextVal);
  }

  return res;
}



// Сложить все числа в массиве.

let func = (arr, res) => {
  if (arr.length) {
    return func(arr, res + arr.pop());
  }
  return res;
}

func(arr, 0);
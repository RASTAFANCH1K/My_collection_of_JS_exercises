// ==================================================
// EXERCISE-1:
// Вывести элементы массива.
// SOLUTION:
// ==================================================

// ----------------------------------------------
// ES5:
// ----------------------------------------------

function getElOfArr(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

getElOfArr();

// ----------------------------------------------
// ES6-1:
// ----------------------------------------------

const getElOfArr = arr => {
  for (el of arr) console.log(el);
}

getElOfArr();

// ----------------------------------------------
// ES6-2:
// ----------------------------------------------

const getElOfArr = arr => arr.forEach(el => console.log(el));

getElOfArr();

// ==================================================
// EXERCISE-2:
// Вывести нечётные по индексу элементы массива.
// SOLUTION:
// ==================================================

// ----------------------------------------------
// ES5:
// ----------------------------------------------

function getOddElOfArr(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (i % 2 === 0) console.log(arr[i]); // (i % 2 !== 0) - вывод чётных елементов
  }
}

getOddElOfArr();

// ----------------------------------------------
// ES6:
// ----------------------------------------------

const getOddElOfArr = arr => arr.forEach((el, index) => index % 2 === 0 ? console.log(el) : el);
// (i % 2 !== 0) - вывод чётных елементов

getOddElOfArr();

// ==================================================
// EXERCISE-3:
// Вывести нечётные по значению элементы массива.
// SOLUTION:
// ==================================================

// ----------------------------------------------
// ES5:
// ----------------------------------------------

function getElOfArr(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) console.log(arr[i]); // (arr[i] % 2 === 0) - вывод чётных элементов.
  }
}

getElOfArr();

// ----------------------------------------------
// ES6-1:
// ----------------------------------------------

const getElOfArr = arr => {
  for (el of arr) {
    if (el % 2 !== 0) console.log(el); // (el % 2 === 0) - вывод чётных элементов.
  };
}

getElOfArr();

// ----------------------------------------------
// ES6-2:
// ----------------------------------------------

const getElOfArr = arr => arr.forEach(el => el % 2 !== 0 ? console.log(el) : el);
// (el % 2 === 0) - вывод чётных элементов.

getElOfArr();

// ==================================================
// EXERCISE:
// Вывести диагонали массива (матрицы).
// SOLUTION:
// ==================================================

// ----------------------------------------------
// ES5-1:
// ----------------------------------------------

function getDiagonalOfArr(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i][i]); // главная диагональ сверху вниз
    // console.log(arr[arr.length - i - 1][i]); // главная диагональ снизу вверх
    // console.log(arr[i][arr.length - i - 1]); // побочная диагональ сверху вниз
    // console.log(arr[arr.length - i - 1][arr.length - i - 1]); // побочная диагональ снизу вверх
  }
}

getDiagonalOfArr(arr);

// ----------------------------------------------
// ES5-2:
// ----------------------------------------------

function getDiagonalOfArr(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (i === j) {
        console.log(arr[i][j]); // главная диагональ сверху вниз
        // console.log(arr[arr.length - i - 1][j]); // главная диагональ снизу вверх
        // console.log(arr[i][arr.length - j - 1]); // побочная диагональ сверху вниз
        // console.log(arr[arr.length - i - 1][arr.length - j - 1]); // побочная диагональ снизу вверх
      }
    }
  }
}

getDiagonalOfArr();

// ----------------------------------------------
// ES6-1:
// ----------------------------------------------

const getDiagonalOfArr = arr => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i][i]); // главная диагональ сверху вниз
    // console.log(arr[arr.length - i - 1][i]); // главная диагональ снизу вверх
    // console.log(arr[i][arr.length - i - 1]); // побочная диагональ сверху вниз
    // console.log(arr[arr.length - i - 1][arr.length - i - 1]); // побочная диагональ снизу вверх
  }
}

getDiagonalOfArr(arr);

// ----------------------------------------------
// ES6-2:
// ----------------------------------------------

const getDiagonalOfArr = arr => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j) {
        console.log(arr[i][j]); // главная диагональ сверху вниз
        // console.log(arr[arr.length - i - 1][j]); // главная диагональ снизу вверх
        // console.log(arr[i][arr.length - j - 1]); // побочная диагональ сверху вниз
        // console.log(arr[arr.length - i - 1][arr.length - j - 1]); // побочная диагональ снизу вверх
      }
    }
  }
}

getDiagonalOfArr();

// ==================================================
// EXERCISE:
// Вывести элементы массива в обратном порядке.
// SOLUTION:
// ==================================================

// ----------------------------------------------
// ES5:
// ----------------------------------------------

function reverseArr(arr) {
  var tmp;

  for (var i = 0, j = arr.length - 1; i < j; i++, j--) {
    tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }

  return arr;
}

reverseArr();

// ----------------------------------------------
// ES6:
// ----------------------------------------------

const reverseArr = arr => arr.reverse();

reverseArr();

// ==================================================
// EXERCISE:
// Написать функции, одна из которых возвращает true, если строка является палиндромом,
// и false — если нет, а вторая возвращает массив из строк палиндромов.
// При этом нужно учитывать пробелы и знаки препинания.
// SOLUTION:
// ==================================================

// ----------------------------------------------
// Solution-1: 
// ----------------------------------------------

const isPalindrome = str => {
  str = str.toLowerCase();

  const res = str === str.split('').reverse().join('');

  return res;
};

getPalindrome();

// ----------------------------------------------
// Solution-2: 
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
}

getPalindromes();

// ==================================================
// EXERCISE:
// Написать функцию, выводящую в консоль числа от 1 до n, где n — это целое число, 
// которая функция принимает в качестве параметра, с такими условиями:
// 1. вывод fizz вместо чисел, кратных 3;
// 2. вывод buzz вместо чисел, кратных 5;
// 3. вывод fizzbuzz вместо чисел, кратных как 3, так и 5.
// SOLUTION:
// ==================================================

// ----------------------------------------------
// ES-5: 
// ----------------------------------------------

function getFizzBuzz (num) {
  for (var i = 1; i <= num; i++) {
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
}

getFizzBuzz();

// ----------------------------------------------
// ES-6: 
// ----------------------------------------------

const getFizzBuzz = num => {
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
}

getFizzBuzz();

// ==================================================
// EXERCISE:
// Написать функцию, которая проверяет, являются ли две строки анаграммами, 
// причем регистр букв не имеет значения. Учитываются лишь символы,
// пробелы или знаки препинания в расчет не берутся.
// SOLUTION:
// ==================================================

const buildCharObject = str => {
  const charObj = {};

  for(let char of str.replace(/[^\w]/g).toLowerCase()) {
    charObj[char] = charObj[char] + 1 || 1;
  }

  return charObj;
}

const getAnagram = (strA, strB) => {
  const aCharObject = buildCharObject(strA);
  const bCharObject = buildCharObject(strB);

  if(Object.keys(aCharObject).length !== Object.keys(bCharObject).length) {
    return false;
  }
  
  for(let char in aCharObject) {
    if(aCharObject[char] !== bCharObject[char]) {
      return false;
    }
  }
  
  return true;
}

getAnagram();

// ==================================================
// EXERCISE:
// Написать функцию, принимающую строку в качестве аргумента и возвращающую количество гласных, 
// которые содержатся в строке.
// SOLUTION:
// ==================================================

// ----------------------------------------------
// Solution-1:
// ----------------------------------------------

const getVowels = str => {
  let count = 0;

  const vowels = ['a', 'e', 'i', 'o', 'u'];

  for(let char of str.toLowerCase()) {
    if(vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

getVowels();

// ----------------------------------------------
// Solution-2:
// ----------------------------------------------

const getVowels = str => {
  const matched = str.match(/[aeiou]/gi)
  return matched ? matched.length : 0
}

getVowels();

// ==================================================
// EXERCISE:
// Написать функцию, которая возвращает n-ную запись в определенной последовательности, 
// причем n — число, которое передается в качестве аргумента функции.
// SOLUTION:
// ==================================================

// ----------------------------------------------
// Solution-1:
// ----------------------------------------------

const getFibonacci = num => {
  const res = [0, 1];

  for(let i = 2; i <= num; i++) {
    const prevNum1 = res[i - 1];
    const prevNum2 = res[i - 2];

    res.push(prevNum1 + prevNum2);
  }
  
  return res[num]; // res - вывод массива из чисел Фиббоначи
}

getFibonacci();

// ----------------------------------------------
// Solution-2:
// ----------------------------------------------

const getFibonacci = num => {
  if(num < 2) {
    return num;
  }

  const res = fibonacci(num - 1) + fibonacci(num - 2);

  return res;
}

getFibonacci();

// ----------------------------------------------
// Solution-3:
// ----------------------------------------------

const getArrOfFibonacci = num => {
  if (num == 0) return [0];

  if (num == 1) return [0, 1];

  const arr = getArrOfFibonacci(num - 1)
  const res = [...arr, arr[num - 1] + arr[num - 2]];

  return res;
}

getArrOfFibonacci();

// ==================================================
// EXERCISE:
// Переписать класс используя синтаксис ES5.
// SOLUTION:
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

// ==================================================
// EXERCISE:
// Переписать метод map используя синтаксис ES5.
// SOLUTION:
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
// EXERCISE:
// Переписать метод reduce используя синтаксис ES5.
// SOLUTION:
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
// EXERCISE:
// Переписать метод find используя синтаксис ES5.
// SOLUTION:
// ==================================================

Array.prototype.myFind = function(callback) {
  var arr = this;

  for (var index = 0; index < arr.length; index++) {
    var callbackVal = callback(arr[index], index, arr);
    
    if (callbackVal) return arr[index];
  }
}

// ==================================================
// EXERCISE:
// Переписать метод filter используя синтаксис ES5.
// SOLUTION:
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
// EXERCISE:
// Переписать метод some используя синтаксис ES5.
// SOLUTION:
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
// EXERCISE:
// Переписать метод every используя синтаксис ES5.
// SOLUTION:
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
// EXERCISE:
// Переписать метод join используя синтаксис ES5.
// SOLUTION:
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
// EXERCISE:
// Переписать метод split используя синтаксис ES5.
// SOLUTION:
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

// ==================================================
// EXERCISE:
// Переписать метод splice используя синтаксис ES5.
// SOLUTION:
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
// EXERCISE:
// Переписать метод push используя синтаксис ES5.
// SOLUTION:
// ==================================================

Array.prototype.myPush = function(el) {
  var arr = this;
  
  arr[arr.length] = el;

  return arr;
}

// ==================================================
// EXERCISE:
// Переписать метод bind используя синтаксис ES5.
// SOLUTION:
// ==================================================

Function.prototype.myBind = function(arg) {
  var thisArg = this;

  var res = function () {
    return thisArg.apply(arg, arguments);
  }

  return res;
}

// ==================================================
// EXERCISE:
// Сортировать массив по возрастанию.
// SOLUTION:
// ==================================================

// ----------------------------------------------
// ES5:
// ----------------------------------------------

function sortArr(arr) {
  var tmp;

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) { // (arg[j] < arg[j + 1]) - сортировка по убыванию
        tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
  return arr;
}

sortArr();

// ----------------------------------------------
// ES6-1:
// ----------------------------------------------

const sortArr = (arr) => arr.sort((a, b) => {
  if (a > b) return 1; // return -1

  return -1; // return 1
  // сортировка по убыванию
  // также можно менять условие
}); 

sortArr();

// ----------------------------------------------
// ES6-2:
// ----------------------------------------------

const sortArr = (arr) => arr.sort((a, b) => a - b); // b - a - сортировка по убыанию

// ==================================================
// EXERCISE:
// Вывести результат - является ли рандомное число нечётным или чётным.
// SOLUTION:
// ==================================================

// ----------------------------------------------
// ES5:
// ----------------------------------------------

var randomNum = Math.floor(Math.random() * 10);

function getRandomNum(randomNum) {
  if (randomNum % 2 !== 0) {
    console.log(`the number ${randomNum} is odd`);
  } else {
    console.log(`the number ${randomNum} is even`);
  }
}

getRandomNum(randomNum);

// ----------------------------------------------
// ES6:
// ----------------------------------------------

const randomNum = Math.floor(Math.random() * 10);

const getRandomNum = (randomNum) => {
  if (randomNum % 2 !== 0) {
    console.log(`the number ${randomNum} is odd`);
  } else {
    console.log(`the number ${randomNum} is even`);
  }
}

getRandomNum(randomNum);

// ==================================================
// EXERCISE:
// Записать в массив числа от 1 до 9.
// SOLUTION:
// ==================================================

// ----------------------------------------------
// ES5:
// ----------------------------------------------

function writeNumIntoArr(arr) {
  for (var i = 1; i <= 9; i++) {
    arr.push(i);
  }

  return arr;
};

writeNumIntoArr();

// ----------------------------------------------
// ES6:
// ----------------------------------------------

const writeNumIntoArr = (arr) => {
  for (let i = 1; i <= 9; i++) {
    arr.push(i);
  }

  return arr;
};

writeNumIntoArr();

// ==================================================
// EXERCISE:
// Сложить все числа в массиве.
// SOLUTION:
// ==================================================

// ----------------------------------------------
// ES5:
// ----------------------------------------------

function addAllNumInArr(arr) {
  var res = 0;

  for (var i = 0; i < arr.length; i++) {
    res += arr[i];
  }

  return res;
};

addAllNumInArr();

// ----------------------------------------------
// ES6-1:
// ----------------------------------------------

const addAllNumInArr = (arr) => arr.reduce((acc, el) => acc + el, 0);

addAllNumInArr();

// ----------------------------------------------
// ES6-2:
// ----------------------------------------------

const addAllNumInArr = (arr) => {
  let res = 0;

  for (let el of arr) {
    res += el;
  }

  return res;
};

addAllNumInArr();

// ----------------------------------------------
// ES6-3:
// ----------------------------------------------

const addAllNumInArr = (arr) => {
  let res = 0;

  arr.forEach(el => res += el);

  return res;
};

addAllNumInArr();

// ==================================================
// EXERCISE:
// Найти мин. значение в массиве.
// SOLUTION:
// ==================================================

// ----------------------------------------------
// ES5:
// ----------------------------------------------

function getMinValOfArr(arr) {
  var res = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (res > arr[i]) res = arr[i]; // (res < arr[i]) - нахождение макс. числа.
  }

  return res;
};

getMinValOfArr();

// ----------------------------------------------
// ES6-1:
// ----------------------------------------------

let getMinValOfArr = (arr) => Math.min(...arr);
// Math.max(...arr) - нахождение макс. числа.

getMinValOfArr();

// ----------------------------------------------
// ES6-2:
// ----------------------------------------------

let getMinValOfArr = (arr) => arr.reduce((acc, el) => acc > el ? acc = el : acc);
// (acc < el) - нахождение макс. числа.

getMinValOfArr();
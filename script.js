

function reverseStr(str) {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}
console.log(reverseStr("radar"));


function charNbr(str) {
  return str.length;
}

console.log(charNbr("Welcome"));


function capitalizeFirstLetter(str) {
  return str[0].toUpperCase() + str.substr(1);
}

 console.log(capitalizeFirstLetter(""));



function capitalizeFirstWord(str) {
  let strArr = str.split(" ");
  let m = "";
  for (const i in strArr) {
    m = m + strArr[i][0].toUpperCase() + strArr[i].substr(1) + " ";
  }
  return m;
}


function maxMin(arr) {
  let min = arr[0];
  let max = arr[0];
  for (const element of arr) {
    if (element < min) {
      min = element;
    }
    if (element > max) {
      max = element;
    }
  }
  return [min, max];
}



function totalSum(arr) {
  let sum = 0;

  for (const element of arr) {
    sum += element;
  }
  return sum;
}
console.log(totalSum([10, 20, 30, 40]));

function filterOutNumbers(arr) {
  let tab = [];
  for (const element of arr) {
    if (element > 10) {
      tab.push(element);
    }
  }
  return tab;
}

console.log(filterOutNumbers([-10, 10, 11, 2, 5, 50]));

function factorial(n) {
  if (n === 0) {
    return 1;
  }
  let x = 1;
  let i = 1;
  while (i <= n) {
    x *= i;
    i++;
  }
  return x;
}

console.log(factorial(3));

function isPrime(n) {
  let r = 0;
  if (n == 0) {
    return "not defined";
  }
  if (n === 1) {
    return false;
  }

  for (let i = 1; i <= n; i++) {
    if (n % i !== 0) {
      continue;
    }
    r = r+i;
  }
  return r === n+1;
}

console.log(isPrime(5));



function fibonacciSequence(n) {
  let tab = [0, 1];
  for (let i = 1; i < n; i++) {
    tab[i + 1] = tab[i - 1] + tab[i];
  }
  return tab;
}
console.log(fibonacciSequence(5));
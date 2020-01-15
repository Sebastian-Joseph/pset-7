function commonEnd(a, b) {
  if (!a || a.length === 0 || !b || b.length === 0) {
    return false;
  }
  var first = a[0];
 var firsttwo = b[0];
 var last = a[a.length -1];
 var lasttwo = b[b.length -1];

if (a.length >= 1 && b.length >= 1 && first === firsttwo || last === lasttwo){
    return true;
   } else {
     return false;
   };

  // write your code here
}

function endsMeet(values, n) {

  let array = [];
  if (!values || values.length < n || !Number.isInteger(n) || n < 0) {
    return array;
} else if (n === 0) {
  return values;
} else {
  for (let i = 0; i < n; i++) {
    if (values[i] !== undefined) {
      array.push(values[i]);
    }
  } for (let i = n; i > 0; i--) {
    if (values[values.length -i] !== undefined) {
      array.push(values[values.length -i])
    }
  } return array;
}






  // write your code here
}

function difference(numbers) {
  let diff = 0;
  let max = 0;
  let min = 0;

  if (numbers == undefined || numbers < 1 || numbers.some(isNaN)) {
    return undefined;
  } else {
    let max = Math.max.apply(null, numbers)
    let min = Math.min.apply(null, numbers)
    let diff = max - min;
    return diff
  }




  // write your code here
}

function max(number) {
  if (number == undefined || number <= 2 || number.some(isNaN)) {
    return undefined;
  } else if ( number.length % 2 == 0) {
    return undefined;
  } else {
let first = number[0];
let middle = number[Math.floor(number.length / 2)];
let last = number[number.length - 1]
let array = [first, middle, last];
let large = Math.max.apply(null, array);
return large;
  }
  // write your code here
}

function middle(values) {
  if (values == undefined || values.length < 3 || values.length % 2 == 0) {
    return [];
  } else {
    let leftMiddle = values[(values.length - 1) - (Math.ceil(values.length / 2))];
    let middle = values[values.length - (Math.ceil(values.length / 2))];
    let array = [leftMiddle, middle]
    return array;
  }
  // write your code here
}

function increasing(numbers) {
  if (numbers == undefined || numbers.some(isNaN)) {
    return undefined;
  } else if (numbers.length < 3 || Number.isInteger(numbers)) {
    return false;
  } else {
    for (var i = 0; i < numbers.length; i++) {
      if (numbers[i] == (numbers[i - 1] + 1) ) {
        i++
        if (numbers [i] == (numbers[i - 1] + 1)) {
          return true;
        }
      }
    }
  }
  // write your code here
}

function everywhere(values, x) {
  // write your code here
}

function consecutive(numbers) {
  // write your code here
}

function balance(numbers) {
  // write your code here
  console.log("test");
}

function clumps(values) {
  // write your code here
}

/*
 * Exports all functions for use in external grader.js file. Do not modify.
 */

module.exports = {
  commonEnd,
  endsMeet,
  difference,
  max,
  middle,
  increasing,
  everywhere,
  consecutive,
  balance,
  clumps
};

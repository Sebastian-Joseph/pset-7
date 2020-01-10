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

  // write your code here
}

function difference(numbers) {
  if (!numbers || numbers < 1 || !Number.isInteger(numbers)) {
    return undefined;
  }
  if (numbers >= 1 || Number.isInteger(numbers)) {
  var numbers = Math.max() - Math.min()
  } else {
    return undefined;
  }


  // write your code here
}

function max(number) {
  // write your code here
}

function middle(values) {
  // write your code here
}

function increasing(numbers) {
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

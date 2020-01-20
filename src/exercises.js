function commonEnd(a, b) {
  if (!a || a.length === 0 || !b || b.length === 0) {
    return false;
  }
  var first = a[0];
  var firsttwo = b[0];
  var last = a[a.length - 1];
  var lasttwo = b[b.length - 1];

  if (a.length >= 1 && b.length >= 1 && first === firsttwo || last === lasttwo) {
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
    }
    for (let i = n; i > 0; i--) {
      if (values[values.length - i] !== undefined) {
        array.push(values[values.length - i])
      }
    }
    return array;
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
  } else if (number.length % 2 == 0) {
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
    let array = [leftMiddle, middle];
    return array;
  }
  // write your code here
}

function increasing(numbers) {
  if (numbers == undefined || numbers == []) {
    return undefined;
  } else if (numbers.length < 3 || numbers.some(isNaN)) {
    return undefined;
  } else {
    for (let i = 1; i < numbers.length; i++) {
      if ((numbers[i - 1] + 1) === numbers[i]) {
        i++
        if ((numbers[i - 1] + 1) === numbers[i]) {
          return true;
          break;
        } else {
          continue;
        }
      } else {
        continue;
      }
    }
    return false;
  }
  // write your code here
}

function everywhere(values, x) {
  if (values == undefined || x == undefined || values.length < 1) {
    return false;
  } else if (!values.includes(x)) {
    return false;
  } else {
    for (let y = values.indexOf(x); y < values.length; y++) {
      if (values[y] === values[y + 1] && values[y + 1] !== undefined) {
        return true;
        break;
      } else if (x === 0) {
        return false;
        break;
      } else if (values[y] === values[y + 2] && values[y + 2] !== undefined && values[y + 1] !== values[y]) {
        return true;
        break;
      } else if (values[y] === values[y + 3] && values[y + 3] !== undefined && (values[y + 1] && values[y + 2]) !== values[y + 3]) {
        return true;
        break;
      } else {
        return false;
        break;
      }
    }
  }


  // write your code here
}

function consecutive(numbers) {
  let proof;
  if (!numbers || numbers.length < 3 || numbers.some(isNaN)) {
    proof = false;
    return false;
  } else {
    for (let i = 0; i < numbers.length - 1; i++) {
      if (Number.isInteger(numbers[i]) === false) {
        proof = false;
        return false;
      }
    }

    let first;
    let second;
    let third;

    for (let x = 0; x < numbers.length - 2; x++) {
      first = numbers[x];
      second = numbers[x + 1];
      third = numbers[x + 2];

      if (first % 2 === 0 && second % 2 === 0 && third % 2 === 0) {
        proof = true;
        return true;
      } else if (first % 2 === 1 && second % 2 === 1 && third % 2 === 1) {
        proof = true;
        return true;
      }
    }

    if (proof === true) {
      return true;
    } else {
      return false;
    }
  }
}

function balance(numbers) {}

function clumps(values) {
  let clumps = 0;
  let proof;
  let lastofClump;

  if (!values) {
    return -1;
  } else {
    let target;
    let around;
    for (let x = 0; x < values.length - 1; x++) {
      let c1 = x;
      let c2 = x + 1;
      target = values[c1];
      around = values[c2];
      if (target === around) {
        while (target === around) {
          target = values[c1++];
          around = values[c2++];
        }
        proof = true;
        lastofClump = c1 - 1;
        x = lastofClump;
        clumps++;
      } else {
      }
    }
    return clumps;
  }
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

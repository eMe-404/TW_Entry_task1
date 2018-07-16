'use strict';

function get_integer_interval(number_a, number_b) {
  //在这里写入代码

  // return [...Array(number_b + 1 - number_a).keys()].map(value => value + number_a);

  // return Array.from({Length: number_b - number_a + 1}, v => v + number_a);

  // let result = [];
  // for (let i = number_a; i <= number_b; i++) {
  //   result.push(i);
  // }
  // return result;

  const len = Math.abs(number_b - number_a) + 1;
  if (number_a <= number_b) {
    return Array.from({length: len}, (v, k) => number_a + k);
  } else {
    return Array.from({length: len}, (v, k) => number_a - k);
  }
}

module.exports = get_integer_interval;


'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  const len = Math.abs(number_b - number_a) + 1;
  if (number_a <= number_b) {
    return Array.from({length: len}, (v, k) => number_a + k)
      .filter(v => v % 2 === 0);
  } else {
    return Array.from({length: len}, (v, k) => number_a - k)
      .filter(v => v % 2 === 0);
  }
}

module.exports = get_integer_interval_2;

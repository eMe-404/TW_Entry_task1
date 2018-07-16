'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  const len = Math.abs(number_b - number_a) + 1;
  const strStratPoint = "a".codePointAt(0)-1;
  if (number_a <= number_b) {
    return Array.from({length: len},
      (v, k) => String.fromCodePoint(number_a + k + strStratPoint));
  } else {
    return Array.from({length: len},
      (v, k) => String.fromCodePoint(number_a - k + strStratPoint));
  }
}

module.exports = get_letter_interval;

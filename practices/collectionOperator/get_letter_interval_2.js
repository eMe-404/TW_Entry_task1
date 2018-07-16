'use strict';

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  const len = Math.abs(number_b - number_a) + 1;
  const strStartPoint = "a".codePointAt(0)-1;
  if (number_a <= number_b) {
    return Array.from({length: len},
      (v, k) => {
        let codePoints = number_a + k + strStartPoint;
        let number = codePoints - "z".codePointAt(0);
        if (number > 0) {
          return "a".concat(String.fromCodePoint(codePoints))
        }
        return String.fromCodePoint(codePoints);
      });
  } else {
    return Array.from({length: len},
      (v, k) => {
        let codePoints = number_a + k + strStartPoint;
        let number = codePoints - "z".codePointAt(0);
        if (number > 0) {
          return "a".concat(String.fromCodePoint(codePoints))
        }
        return String.fromCodePoint(number_a - k + strStartPoint);
      });
  }
}

module.exports = get_letter_interval_2;


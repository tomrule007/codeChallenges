/**
 * @param {string} s
 * @return {boolean}
 */

const isParentheses = (char) =>
  ['(', ')', '{', '}', '[', ']'].some((valid) => char === valid);
var isValid = function (s) {
  // use stack data type to track valid adds (array pop / push / peek arr[length-1])
  // check char is valid paren (invalid -> RETURN FALSE)
  // peek stack if valid
  //    1)closes matching set (pop them off) (decrement open count for type)
  //    2)closes mismatching set --> RETURN FALSE
  //    3)undefined and opening --> push on to stack (increment open count for type)
  //    4)opening against another opening () --> push (increment open count for type)
  // RETURN TRUE IF IT PASSES ABOVE 4 Tests
  // easy outs
  //    odd character count -> RETURN FALSE
  //    invalid Characters -> RETURN FALSE
};

module.exports = isValid;

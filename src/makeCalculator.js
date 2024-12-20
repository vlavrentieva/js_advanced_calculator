'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,
    add(number) {
      calculator.result += number;
    },
    subtract(number) {
      calculator.result -= number;
    },
    multiply(number) {
      calculator.result *= number;
    },
    divide(number) {
      calculator.result /= number;
    },
    reset(number) {
      calculator.result = 0;

      return this;
    },
    operate(callback, number) {
      callback(number);

      return this;
    },
  };

  // calculator.operate = (callback, number) => {
  // return callback(number);
  // }

  // calculator.add = (number) => (calculator.result += number);
  // calculator.subtract = (number) => (calculator.result -= number);
  // calculator.multiply = (number) => (calculator.result *= number);
  // calculator.divide = (number) => (calculator.result /= number);
  // calculator.reset = (number) => calculator.result === 0;

  return calculator;
}

module.exports = makeCalculator;

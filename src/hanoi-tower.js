const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  const turnsNumber = Math.pow(2, disksNumber) - 1
  const speedTurn = Math.floor(turnsNumber * (3600 / turnsSpeed))
  return {
    turns: turnsNumber,
    seconds: speedTurn
  }
};

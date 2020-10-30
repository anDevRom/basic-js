const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    const result = [1]
    arr.forEach(elem => {
      let depthOfArray = 1
      if (Array.isArray(elem)) {
        depthOfArray = depthOfArray + (new DepthCalculator()).calculateDepth.call(this, elem)
      }
      result.push(depthOfArray)
    })
    return result.sort((a, b) => b - a)[0]
  }
};
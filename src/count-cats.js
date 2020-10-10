const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let result = 0
  matrix.forEach(item => {
    item.forEach(innerItem => {
      if (innerItem === "^^") {
        result++
      }
    })
  })
  return result
};

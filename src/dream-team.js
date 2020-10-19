const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arrOfName) {
  if (Array.isArray(arrOfName)) {
    let result = []
    arrOfName.forEach((el) => {
      if (typeof el === "string") {
        result.push(el.split(" ").join("")[0].toLocaleUpperCase())
      }
    })
    return result.sort().join("")
  } else {
    return false
  }
};

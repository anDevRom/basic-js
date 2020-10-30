const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  const defOptions = {
    repeatTimes: 1,
    separator: "+",
    addition: "",
    additionRepeatTimes: 1,
    additionSeparator: "|"
  }

  Object.setPrototypeOf(options, defOptions)

  for (let value in options) {
    if (options[value] === undefined) {
      delete options[value]
    }
  }

  let resultArr = []
  let addBlockStr = ""

  if (options.addition !== "" && options.additionRepeatTimes > 1) {
    let addBlockArr = []
    
    for (let i = 1; i <= options.additionRepeatTimes; i++) {
      addBlockArr.push(String(options.addition))
    }
    
    addBlockStr = addBlockArr.join(options.additionSeparator)
  } else {
    addBlockStr = options.addition
  }

  for (let i = 1; i <= options.repeatTimes; i++) {
    resultArr.push(String(str) + addBlockStr)
  }

  return resultArr.join(options.separator)

};
  
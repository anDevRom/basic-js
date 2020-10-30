const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (Array.isArray(arr)) {
    const result = arr.slice();
    arr.forEach((item) => {
      switch (item) {
        case "--discard-next":
          if (result.length > result.indexOf("--discard-next") + 1) {
            result.splice(result.indexOf("--discard-next"), 2, "--deletedItem");
          } else {
            result.splice(result.indexOf("--discard-next"), 1);
          }
          break;
        case "--double-next":
          if (result.length > result.indexOf("--double-next") + 1) {
            result.splice(
              result.indexOf("--double-next"),
              1,
              result[result.indexOf("--double-next") + 1]
            );
          } else {
            result.splice(result.indexOf("--double-next"), 1);
          }
          break;
        case "--discard-prev":
          if (result.indexOf("--discard-prev") === 0) {
            result.splice(result.indexOf("--discard-prev"), 1);
          } else {
            result.splice(result.indexOf("--discard-prev") - 1, 2);
          }
          break;
        case "--double-prev":
          if (result.indexOf("--double-prev") === 0) {
            result.splice(result.indexOf("--double-prev"), 1);
          } else {
            result.splice(
              result.indexOf("--double-prev"),
              1,
              result[result.indexOf("--double-prev") - 1]
            );
          }
        default:
          return;
      }
    });
    while (result.includes("--deletedItem")) {
      result.splice(result.indexOf("--deletedItem"), 1);
    }
    return result;
  } else {
    throw new Error();
  }
};

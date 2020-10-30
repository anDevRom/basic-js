const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(arg) {
    this.arg = arg;
  }

  encrypt(string, key) {
    if (string !== undefined && key !== undefined) {
      let substring = "";

      string = string.toLowerCase();
      key = key.toLowerCase();

      for (let i = 1; i <= Math.ceil(string.length / key.length); i++) {
        substring = substring + key;
      }

      substring = substring.split("").splice(0, string.length).join("");

      const substringArr = substring.split("");
      const arrOfWords = string.split(" ");

      const resultArr = arrOfWords.map((item) => {
        return substringArr.splice(0, item.length).join("");
      });

      substring = resultArr.join(" ");

      const arrOfStringCharCodes = string
        .split("")
        .map((item, index, array) => {
          return item.charCodeAt(0);
        });

      const arrOfSubstringCharCodes = substring
        .split("")
        .map((item, index, array) => {
          return item.charCodeAt(0);
        });

      const arrOfResultChars = arrOfStringCharCodes.map((item, index) => {
        if (
          string.split("")[index].charCodeAt(0) > 96 &&
          string.split("")[index].charCodeAt(0) < 123
        ) {
          let code =
            arrOfStringCharCodes[index] + (arrOfSubstringCharCodes[index] - 97);
          if (code > 122) {
            code = code - 26;
          }
          return String.fromCharCode(code);
        } else {
          return string.split("")[index];
        }
      });

      if (this.arg === false) {
        return arrOfResultChars.reverse().join("").toUpperCase();
      } else {
        return arrOfResultChars.join("").toUpperCase();
      }
    } else {
      throw new Error();
    }
  }

  decrypt(string, key) {
    if (string !== undefined && key !== undefined) {
      let substring = "";

      string = string.toLowerCase();
      key = key.toLowerCase();

      for (let i = 1; i <= Math.ceil(string.length / key.length); i++) {
        substring = substring + key;
      }

      substring = substring.split("").splice(0, string.length).join("");

      const substringArr = substring.split("");
      const arrOfWords = string.split(" ");

      const resultArr = arrOfWords.map((item) => {
        return substringArr.splice(0, item.length).join("");
      });

      substring = resultArr.join(" ");

      const arrOfStringCharCodes = string
        .split("")
        .map((item, index, array) => {
          return item.charCodeAt(0);
        });

      const arrOfSubstringCharCodes = substring
        .split("")
        .map((item, index, array) => {
          return item.charCodeAt(0);
        });

      const arrOfResultChars = arrOfStringCharCodes.map((item, index) => {
        if (
          string.split("")[index].charCodeAt(0) > 96 &&
          string.split("")[index].charCodeAt(0) < 123
        ) {
          let code =
            arrOfStringCharCodes[index] - (arrOfSubstringCharCodes[index] - 97);
          if (code < 97) {
            code = 123 - (97 - code);
          }
          return String.fromCharCode(code);
        } else {
          return string.split("")[index];
        }
      });

      if (this.arg === false) {
        return arrOfResultChars.reverse().join("").toUpperCase();
      } else {
        return arrOfResultChars.join("").toUpperCase();
      }
    } else {
      throw new Error();
    }
  }
}

module.exports = VigenereCipheringMachine;

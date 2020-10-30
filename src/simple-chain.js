const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chains: "",
  chainValues: [],


  getLength() {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    return this.chainValues.length
  },
  addLink(value) {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    this.chainValues.push(String(value))
    this.chains = this.chains + "" + String(value)
    return this
  },
  removeLink(position) {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    if (Number(position) !== NaN && Number(position) !== null && (Number(position) > 0 && Number(position) <= this.chainValues.length)) {
      this.chainValues.splice(Number(position) - 1, 1)
    } else {
      this.finishChain()
      throw new Error
    }
    return this
  },
  reverseChain() {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    this.chainValues.reverse()
    return this
  },
  finishChain() {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    const result = `( ${this.chainValues.join(" )~~( ")} )`
    this.chainValues = []
    return result
  }
};

module.exports = chainMaker;

function ResponseFunction(input){
    this.input = input
    return {
        ...this.input,
        ms: new Date(),
    }
}

module.exports = new ResponseFunction();
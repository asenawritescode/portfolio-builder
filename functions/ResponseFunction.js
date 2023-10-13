function ResponseFunction(input){
    return {
        ...input,
        ms: new Date(),
    }
}

module.exports = ResponseFunction;
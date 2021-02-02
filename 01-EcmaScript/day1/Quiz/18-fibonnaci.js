function fibonnaci(lengthFib) {
    let fibOne = 0
    let fibTwo = 1
    let nextFib
    let fibDeret = "1"
    for (let i = 0; i < lengthFib ; i++) {
        nextFib = fibOne + fibTwo
        fibDeret += ","+nextFib
        fibOne = fibTwo
        fibTwo = nextFib
    }
    return fibDeret
}
console.log(fibonnaci(20));
function findWord(w,s) {
    let sLow = s.toLowerCase()
    let sArr = sLow.split("")
    var didUFindMe = false;
    for (let i = 0; i < sArr.length; i++) {
        if (sArr[i] == w ) {
            didUFindMe = true
        }
    }
    return didUFindMe
}

console.log(findWord("z","Code Academy"));
const findUniqueChar = (uniqueChar) => {
    let uniqueCharArr = uniqueChar.split("")
    // 
    // 
    for (let i = 0; i < uniqueCharArr.length; i++) {
        for (let x = i+1; x < uniqueChar.length; x++) {
            //console.log(uniqueCharArr[i]+" "+uniqueCharArr[x]);
//            console.log(sameChar);
            if (uniqueCharArr[i] == uniqueCharArr[x]) {
                return false
            }
        }
    }
    return true
}

console.log(findUniqueChar("abcdeb"));
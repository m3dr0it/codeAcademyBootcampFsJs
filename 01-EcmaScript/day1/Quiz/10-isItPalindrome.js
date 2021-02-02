function isItPalindrome(s) {
    let sRev = reverseString(s.toLowerCase())
    if(s === sRev.toLowerCase()){
        return true
    }else{
        return false
    }
}

function reverseString(s) {
    let sArr = s.split("")
    let sArrRev = ""
    for (let i = 0; i < sArr.length; i++) {
        sArrRev = sArrRev+sArr[sArr.length-1-i]
    }
    return sArrRev
}

console.log(isItPalindrome("kasur ini tidak rusak"));
let findPermutation = (i,j) => {
    if (i.length != j.length) {
        return false
    }

    let iSplitted = i.split("").sort()
    let jSplitted = j.split("").sort()

    for (let x = 0; x < i.length; x++) {
        if (iSplitted[x]!=jSplitted[x]) {
            return false
        }
        
    }
    return true
}
console.log(findPermutation("aaaab","abaaa"));
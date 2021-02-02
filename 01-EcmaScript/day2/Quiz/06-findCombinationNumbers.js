let findNCombination= (n,resultComb) => {
    let validElement = []
    console.log(n);
    for (let i = 0; i < n.length; i++) {
        for (let z = i; z < n.length; z++) {
            let sum = n[i]+n[z]
            if (sum == resultComb) {
                console.log(n[i] +" "+n[z]);
            }
        }
    }
    return ""   
}

findNCombination([1,2,3,4,5,1,2,4,6,2,3,8,5,5,1],8)
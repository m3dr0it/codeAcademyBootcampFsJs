function findRandomNumber(n) {
    let counterCond = 0
    let saveN = ""
    counterCond = Math.floor(Math.random()*900+100)
    while (counterCond <= 900) {
        counterCondS = counterCond.toString().split("")
        if(counterCondS[0]==n||counterCondS[1]==n||counterCondS[2]==n){
            saveN +=","+ counterCond
        }
        counterCond = Math.floor(Math.random()*900+100)
    }
    return saveN    
}

console.log(findRandomNumber(8).substr(1));
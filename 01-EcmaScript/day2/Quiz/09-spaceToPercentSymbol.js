const spaceToPercentSymbol = (s)=>{
    let sArr = s.split("")
    let sArrWSpace = []
    for (const x of sArr) {
        if (x==" ") {
            sArrWSpace +="%"
        }else{
            sArrWSpace += x
        }
    }
    return sArrWSpace
}

console.log(spaceToPercentSymbol("My Code ID  "));
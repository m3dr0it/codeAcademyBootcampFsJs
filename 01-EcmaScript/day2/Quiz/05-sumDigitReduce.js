let sumByReduce = (n) => {
    let nArr = n.toString().split("").map((x)=>Number(x))
    console.log(nArr);
    let reduced = nArr.reduce((x,y)=> x+y)
    console.log(reduced);
    return ""
}

console.log(sumByReduce(1234));
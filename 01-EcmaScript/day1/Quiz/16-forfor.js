function forfor(forManyTimes) {
    let s =""
    for (let i = 0; i <=forManyTimes; i++) {
        for (let z = i; z <= i + i ; z++) {
             s += " "+ z
        }
        console.log(s);
        s = "" 
    }       
}

forfor(6)
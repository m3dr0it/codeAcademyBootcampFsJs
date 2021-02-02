
function forfor2(forManyTimes) {    
    let s = ""
    for (let i = 0; i <= forManyTimes; i++) {
        if(i<=5){
            for (let x = 0; x < i; x++) {
                s += "*";       
            }
        }else{
            for (let y = forManyTimes; y > i  ; y--) {
                s += "*"
            }
        }
        console.log(s);
        s=""
    }
    return "Done"
}

forfor2(10)
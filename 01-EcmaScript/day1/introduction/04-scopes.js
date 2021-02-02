//global scope

test = "I am global variable";
console.log(test);

//function scope

function scope() {
    var top = "i am function variable"
    console.log(top);
    console.log(this);
}

scope()
//scope var could called inside funciton
function scope2(print) {
    var top = "atas"
    if (print) {
        var insideF = "print"
    }
    console.log(insideF);
}

scope2(true)


//scope let pnly could called inside smaller scope as if else

function scopeLet(bool) {
    if (bool) {
        let tryingLet = "i Am using let"
        console.log(tryingLet);
    }
}

scopeLet(true)

//const couldn't change 

const x = 1
//x = 2;
console.log(x);

let y = 2
y =20
console.log(y);
const x = Number(1)
console.log(x);

console.log(x == false);
console.log(x === NaN);

// find odd even
function gage(n) {
    if (n%2===0) {
        return "genap"
    }else{
        return "ganjil"
    }
}

console.log(gage(2));
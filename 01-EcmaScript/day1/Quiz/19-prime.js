//Bilangan prima hanya bisa dibagi oleh 1 dan dirinya sendiri

function findPrime(lengthDeretPrime) {
    let primeDeret = "";
    let counter=0
    for (let i = 0; i < lengthDeretPrime; i++) {
        for (let x = 1; x <= i; x++) {
            if(i%x==0){  //cek semua bilangan i dimodulus dengan nilai 1 - x
                counter++
            }
        }
        if(counter == 2){
            primeDeret += " "+i
        }
        counter = 0
    }
    return primeDeret
}

console.log(findPrime(100));
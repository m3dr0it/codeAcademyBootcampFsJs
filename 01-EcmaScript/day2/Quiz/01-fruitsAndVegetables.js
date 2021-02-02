let fruits = ["Jeruk", "Mangga", "Jambu", "Durian", "Rambutan"];
let fruitsOri = Array.from(fruits)
let sayur = ["Kangkung", "Bayam", "Tomat", "Bawang","Bayam"];

//a
fruits.push("Anggur","Banana","Sirsak")
console.log(fruits);

//b
fruits.pop()
console.log(fruits);

//c
fruits.splice(2,1)
console.log(fruits);


//d
fruits.splice(2,3)
console.log(fruits);

//e
fruits.splice(2,0,"Rambutan","Bengkuang")
console.log(fruits);

//f
fruits.splice(4,1,"Nangka")
console.log(fruits);

//g
let vegFruits = fruitsOri.concat(sayur)
console.log(vegFruits);

//h
let vegFruitsRev = []
for (let i = 0; i < vegFruits.length; i++) {
    vegFruitsRev[i] = vegFruits[vegFruits.length-1 - i]
}
console.log(vegFruitsRev);
let vegFruitsRev2 = []


//j
function switchElement(arr,x,y) {
    let indX = arr.indexOf(x)   //simpan index element 1
    let tempV = arr[indX] //simpan nilai index element 1, karena nanti akan di replace pertama kali
    let indY = arr.indexOf(y) //simpan index element 2
    arr[indX] = arr[indY] // replace element 1 oleh element 2
    arr[indY] = tempV //replace element 2 oleh tempV
    return arr
}

console.log(switchElement(vegFruits,"Rambutan","Mangga"));
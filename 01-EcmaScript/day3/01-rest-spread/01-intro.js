//knowing rest params / arguing params
const sum = (a,b)=>{
    return a+b
}

const sumOneLine = (a,b)=>a+b
console.log(sumOneLine(1,2));
const sumRest = (...value)=>{
    console.log(value);
    let sum = 0;
    value.forEach(element => {
        sum += element
    });
    return sum
}

console.log(sumRest(1,3,1,3,4,5,6,7));

const firstName = "Code"
const lastName = "id"
const gelar = "Diploma"

const greet = (...names)=>{
    return names.join(" ")
}

console.log(greet(firstName,lastName,gelar));
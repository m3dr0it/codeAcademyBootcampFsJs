const product = {
    id : 1,
    names : "Laptop Dell",
    price : 1500.00,
    variant : {
        type : "Gamer",
        core : "i7 Core"
    }
}

const infoProduct = info => {
    return `Info Product : ${info.names}, ${info.price}`
}

console.log(infoProduct(product));

//destructuring object
const{id,variant:{type},...infos} = product
console.log(id);
console.log(type);
console.log(infos);
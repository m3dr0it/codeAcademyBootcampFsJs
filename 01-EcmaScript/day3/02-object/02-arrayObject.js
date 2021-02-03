const products = [{
    id : 1,
    names : "Laptop Dell",
    price : 1400.00,
    variant : {
        type : "Design",
        core : "i9 Core"
    }
},{
    id : 2,
    names : "Laptop Dell",
    price : 1500.00,
    variant : {
        type : "Gamer",
        core : "i7 Core"
    }
}]

const filterProductById = (products,id) =>{
    return products.filter(x => x.id === id)
}
console.log(filterProductById(products,2));

const filterProductByPrice = (products,price) =>{
    return products.filter(x => x.price === price)
}

console.log(filterProductByPrice(products,1400.00));
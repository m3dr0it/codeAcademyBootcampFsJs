function whoami(name) {
    if (typeof name == 'number') {
        return "number"
    }else if (typeof name =='string') {
        return "string"
    }else if (typeof name == 'object') {
        return "object"
    }else if (typeof name == 'boolean') {
        return "boolean"       
    }else {
        return "undefined"
    }
}

console.log(whoami(35));
console.log(true);
console.log(whoami("True"));

let objTest = {
    name : "tes"
}
console.log(whoami(objTest));
let obj
console.log(whoami(obj));
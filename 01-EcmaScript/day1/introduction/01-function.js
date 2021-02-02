//function declaration
function foo() {
    return "foo"
}

console.log(foo());

//function Expression
const fnc_exp = function foo(value) {
    return value
}

console.log(2);
// let fn_arrow = () =>{
//     return "Test arrow Function "+ value 
// }

const fn_arrow = (value) =>{
    return "Test arrow Function "+ value 
}

console.log(fn_arrow(2));
//High order function
let employees= ["Raiz","Alif","Fahmi","Ahmad","Dafa","Ale","Amar","Andi","Rizki"]

//output "[ziaR,filA .. . . . "
const passwordFor = (value) => value.split("").reverse("").join("")

//push manual
let passwordList = []
passwordList.push(passwordFor(employees[0]));
console.log(passwordList);

//functional method
let passwordEmp = employees.map(passwordFor)
console.log(passwordEmp);
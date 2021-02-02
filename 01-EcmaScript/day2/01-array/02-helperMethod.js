// slice
var list = ["a","b","c","d"]
console.log(list.slice(1,2));
console.log(list.slice(1,3));

//splice
console.log(list.splice(2,1,"e","f")); 
//copy array
var list1 = list
console.log(list1);
console.log(list1.splice(2,1,"z"));
console.log(list1);
console.log(list);

//Safe way array copy
var list2 = Array.from(list)
console.log(list2.splice(1,3));
console.log(list2);
console.log(list);

//concat array
var listX = [1,2,3]
var listY = [4,5,6]
var listZ = listX.concat(listY)
console.log(listZ);
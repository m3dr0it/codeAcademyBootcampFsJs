//initial Array 1
var array = new Array(3)
array[0]=3
array[1]=2
array[2]="Code"

console.log(array);

array = ["code",["node js","react js"],"bootcamp",2001]

console.log(array);

//add element array di last index
var list = ["a","b","c","d"]
list.push("j","z")
console.log(list);

// remove index terakhir element array
list.pop();
console.log(list);

//add element array di 1st index
list.unshift("x")
console.log(list);

//remove 1st element
list.shift()
console.log(list);

//access index tertentu
console.log(list[2]);

//looping for array
for (let i = 0; i < list.length; i++) {
    const element = list[i];
    //console.log(element);
}

//for of
for (const key of list) {
    //console.log(key);
}

//foreach
list.forEach(element =>{
    console.log(element);
})
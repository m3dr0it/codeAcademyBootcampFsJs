let s = "hello code.id"

for (let i = 0; i < s.length; i++) {
    const element = s[i];
    if (element === ".") {
        console.log(element +" adalah index ke "+ i);
    }
}

//Reverse s 
let x = ""
for (let i = s.length-1; i >= 0; i--) {
   x += s[i] //x = x + s[i]
}
console.log(x);
//Map hanya akan menampung value yang unik

let mySet = new Set()

mySet.add(1);
mySet.add(2);
mySet.add("code");
mySet.add(1)

for (const x of mySet) {
    console.log(x);
}
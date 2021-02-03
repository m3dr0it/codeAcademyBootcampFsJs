const student = {
    nama : "Ahmad",
    kota : "Cianjur"
}

let infoStudent = student;
infoStudent = {...student,bootcamp:"js"}
console.log(infoStudent);

infoStudent = {...infoStudent,totalPoint : 80}
console.log(infoStudent);

infoStudent.age = "23"
console.log(infoStudent);
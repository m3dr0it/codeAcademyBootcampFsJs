import {totalSiswa,totalReguler,totalBeasiswa,totalNetPrice,totalUangSaku,totalNodeJs,totalGolang,totalPython,totalJava} from './Api.js'

const data2 = [
    {fullname : "Asep",
    city : "Bandung",
    education : "S1",
    grade : "3.45",
    type : "Beasiswa",
    bootcamp : "Node Js",
    batch : "1",
    year : "2019",
    insentif : 100000,
    skillPoint : "3"
},{
    fullname : "Ami",
    city : "Bogor",
    education : "S1",
    grade : "3.10",
    type : "Beasiswa",
    bootcamp : "Node Js",
    batch : "1",
    year : "2019",
    insentif : 100000,
    skillPoint : "3"
    },
{
    fullname : "Budi",
    city : "Depok",
    education : "S1",
    grade : "3.25",
    type : "Beasiswa",
    bootcamp : "Java",
    batch : "2",
    year : "2020",
    insentif : 100000,
    skillPoint : "3"
    }
]

const data = [{
    fullname : "Ahmad",
    city : "Cianjur",
    education : "Diploma III",
    grade : "2.5",
    type : "Beasiswa",
    bootcamp : "Node Js",
    batch : "7",
    year : "2021",
    insentif : 100000,
    skillPoint : "4",
},
{
    fullname : "Andi",
    city : "Jakarta",
    education : "Strata I",
    grade : "4",
    type : "Beasiswa",
    bootcamp : "Node Js",
    batch : "7",
    year : "2021",
    insentif : 100000,
    skillPoint : "4",
},
{
    fullname : "Alif",
    city : "Makasar",
    education : "Strata I",
    grade : "4",
    type : "Beasiswa",
    bootcamp : "Node Js",
    batch : "7",
    year : "2021",
    insentif : 100000,
    skillPoint : "4",
},{
    fullname : "Fahmi",
    city : "Jakarta",
    education : "Strata I",
    grade : "4",
    type : "Reguler",
    bootcamp : "Golang",
    batch : "7",
    year : "2021",
    netprice : 5000000,
    skillPoint : "4",
},
{
    fullname : "Daffa",
    city : "Depok",
    education : "Strata I",
    grade : "4",
    type : "Beasiswa",
    bootcamp : "Golang",
    batch : "7",
    year : "2021",
    insentif : 100000,
    skillPoint : "4",
},
{
    fullname : "Alex",
    city : "Jakarta",
    education : "Strata I",
    grade : "4",
    type : "Reguler",
    bootcamp : "Golang",
    batch : "7",
    year : "2021",
    netprice : 5000000,
    skillPoint : "4",
},
{
    fullname : "Rizky",
    city : "Jakarta",
    education : "Strata I",
    grade : "4",
    type : "Beasiswa",
    bootcamp : "Golang",
    batch : "7",
    year : "2021",
    insentif : 100000,
    skillPoint : "4",
},{
    fullname : "Faiz",
    city : "Jakarta",
    education : "Strata I",
    grade : "4",
    type : "Reguler",
    bootcamp : "Python",
    batch : "7",
    year : "2021",
    netprice : 7000000,
    skillPoint : "4",
}]

console.log("Total siswa adalah : "+ totalSiswa(data2));
console.log("Total Siswa Reguler : "+ totalReguler());
console.log("Total NetPrice : "+totalNetPrice());
console.log("Total Siswa Beasiswa : "+totalBeasiswa());
console.log("Total UangSaku : "+totalUangSaku());
console.log("Total NodeJs : "+totalNodeJs());
console.log("Total Golang : "+totalGolang());
console.log("Total Pyhton : "+totalPython());
console.log("Total Java : "+totalJava());
import {Student,Beasiswa,Reguler} from './Bootcamp.js'

export const totalSiswa = (listStudent) =>{
    for (const x of listStudent) {
        switch (x.bootcamp) {
            case "Node Js" : Student.nodeJs++; break;
            case "Golang"   : Student.golang++; break;
            case "Python"   : Student.python++; break;
            case "Java"     : Student.java++; break;
        }
        if (x.type == "Reguler") {
            new Reguler(x.fullname,x.city,x.education,x.grade,x.type,x.batch,x.skillPoint,x.netprice)
        }else if(x.type == "Beasiswa"){
            new Beasiswa(x.fullname,x.city,x.education,x.grade,x.type,x.batch,x.skillPoint,x.insentif)
        }
    }
    return Student.totalStudent
}

export const totalReguler = () => {
    return Reguler.totalReguler
}

export const totalBeasiswa = () => {
    return Beasiswa.totalBeasiswa
}

export const totalNetPrice = () => {
    return Reguler.totalNetPrice
}

export const totalUangSaku = () => {
    return Beasiswa.totalUangSaku
}

export const totalNodeJs = () => {
    return Student.nodeJs
}

export const totalGolang = () => {
    return Student.golang
}

export const totalPython = () => {
    return Student.python
}

export const totalJava = ()=>{
    return Student.java
}
class Student{
    static nodeJs = 0
    static golang = 0
    static python = 0
    static java = 0
    static totalStudent=0
    constructor(fullname,city,education,grade,batch,skillPoint) {
        this.fullname = fullname
        this.city = city
        this.education = education
        this.grade = grade
        this.batch = batch
        this.skillPoint = skillPoint
        Student.totalStudent++
    }
}

class Beasiswa extends Student{
    static totalBeasiswa = 0
    static totalUangSaku = 0
    constructor(fullname,city,education,grade,type,batch,skillPoint,insentif){
        super(fullname,city,education,grade,type,batch,skillPoint)
        this.insentif = insentif
        Beasiswa.totalBeasiswa++
        Beasiswa.totalUangSaku += Number(insentif)
        console.log(insentif);
    }
}

class Reguler extends Student{
    static totalReguler = 0
    static totalNetPrice = 0
    constructor(fullname,city,education,grade,type,batch,skillPoint,netprice) {
        super(fullname,city,education,grade,type,batch,skillPoint)
        this.netprice = netprice
        Reguler.totalNetPrice += Number(netprice)    
        Reguler.totalReguler++
    }

}
export {Student,Beasiswa,Reguler}
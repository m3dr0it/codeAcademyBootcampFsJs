export default class Car{
    static totalCar = 0
    constructor(merk,tahun){
        this.merk = merk
        this.tahun = tahun
        Car.totalCar++
    }
}

class Taxi extends Car{
    static totalTaxi = 0
    constructor(merk,tahun,brand){
        super(merk,tahun)
        this.brand = brand
    }

    info(){
        return 2021 - this.tahun
    }

    totalRevenue(rate,km){
        return rate * km;
    }  
}

class Angkot extends Car{
    constructor(merk,tahun,rute){
        super(merk,tahun)
        this.rute = rute
    }
    seat(count){
        return count
    }
}

export{Car,Taxi,Angkot}
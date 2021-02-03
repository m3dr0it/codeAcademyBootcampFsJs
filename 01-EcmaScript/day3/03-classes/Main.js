import {Car,Taxi,Angkot} from './Car.js'
import {ListCar} from './ApiCar.js'

function main() {
    const hrv = new Car("Honda",2020)
    console.log(hrv);
    console.log(Taxi.totalTaxi);
    const grabCar = new Taxi("Suzuki",1998,"Grab")
    console.log(grabCar);
    console.log(grabCar.totalRevenue(4000,2));
    console.log(grabCar.info());

    const angkotBogor = new Angkot("Mitsubihi","1999","Cianjur-Jakarta")
    console.log(angkotBogor);
    console.log(Car.totalCar);

    const merk = ListCar(hrv,grabCar,angkotBogor)
    console.log(merk);
}

main()
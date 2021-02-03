export const ListCar = (...list) => {
    return list
}

const findCarByMerk = (listCar,merk) => {
    return listCar.filter(x => x.merk = merk)
}

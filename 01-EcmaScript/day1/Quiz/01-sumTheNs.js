function sumTheNs(n) {
    let nArr = n.toString().split("")
    let sum = 0;
    console.log(nArr);
    for (let i = 0; i < nArr.length; i++) {
        sum = sum + Number(nArr[i])
    }
    return sum
}

console.log(sumTheNs(12345));
console.log(sumTheNsModWay(3456));

function sumTheNsModWay(n) {

    let n1 =n/1000 //3.456
    let nRatusan = n%1000 //456
    let n2 = nRatusan/100 //4.56
    let nPuluhan = nRatusan%100 //56
    let n3 = nPuluhan/10 //5.6
    let nSatuan = nPuluhan%10 //6

    return Math.floor(n1)+Math.floor(n2)+Math.floor(n3)+nSatuan;
}
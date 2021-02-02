let productString = "LG Monitor Asus Laptop 5432 Mix For Youtuber Bluetooth Adapter Solo Leveling Webtoon Panasoni Air Conditioner Karaoke Bazooka PowerBank 24 Hours Backpack of Holding Game Box 5 Universal Gadget Charger USB Squirming Tentacle USB Fishquarium Intel Processor 8 core Space Bar Keyboard Organizer & USB Hub Pop USB Pet Rock Powerstation 5 Dual Heated Travel Mug Crosley Collegiate Portable USB Turntable Hoodie AK-47"
let abc = "ABCDEFGHIJKLMNOPQRSTUVWXZZ"

let filtered = (products,abc)=>{
    for (const i of abc) {
        console.log(i);
        let filterProduct = (products,i) => products.filter((products)=> products.startsWith(i||i.toLowerCase()));
        console.log(filterProduct(products,i));
    }    
}

filtered(productString.split(" "),abc.split(""));
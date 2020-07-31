let database = [
    {
        id: 001,
        name: "Converse Chuck 70 x Fear of God Essentials [Limited Edition]",
        linkImg: "https://www.converse.com.vn/pictures/catalog/products/sneakers/chuck-taylor-all-star/167955c/167955Cshot2.jpg",
        price: 2800000,

    },
    {
        id: 002,
        name: "Chuck Taylor All Star Chuck Taylor Cheerful Hi Top",
        linkImg: "https://www.converse.com.vn/pictures/catalog/products/sneakers/chuck-taylor-all-star/167067c/167067shot4.jpg",
        price: 1700000,
    },
    {
        id: 003,
        name: "Chuck Taylor All Star Archive Print - Camo Hi Top",
        linkImg: "https://www.converse.com.vn/pictures/catalog/products/sneakers/chuck-taylor-all-star/166714c/166714standard.jpg",
        price: 1800000,
    },
    {
        id: 004,
        name: "Chuck 70 Basket Ball",
        linkImg: "https://www.converse.com.vn/pictures/catalog/products/sneakers/chuck-taylor-all-star/167057c/167057standard.jpg",
        price: 1700000,
    },
    {
        id: 005,
        name: "Chuck 70 Parchment Hi Top",
        linkImg: "https://www.converse.com.vn/pictures/catalog/products/sneakers/chuck-taylor-all-star/162053c/162053Cstandard.jpg",
        price: 2000000

    },
    {
        id: 006,
        name: "Chuck Taylor All Star Logo Play",
        linkImg: "https://www.converse.com.vn/pictures/catalog/products/sneakers/chuck-taylor-all-star/167173c/167173standard.jpg",
        price: 1800000

    }


];

let giohang = [];

let ol = document.getElementById("ol-render");
let tong = 0;
function themhang(item){
    giohang.push(item);
}

function tinhtien() {
    for (let i = 0; i < giohang.length; i++) {
        tong += giohang[i].price;
    }
    let thetongtien = document.getElementById("tongtien");
    thetongtien.innerText = tong;
}

for (let item of database) { 
    let li = document.createElement("li");
    let img = document.createElement("img");
    let a = document.createElement("a");
    let button = document.createElement("button");
    

    img.src=item.linkImg;
    img.width = 200
    a.innerText = item.name;
    button.onclick = () => 
    {
        themhang(item)
    }

    button.innerText = "add to cart";
    button.classList .add("btn-hover");
    button.classList .add("color-6")


    li.appendChild(img)
    li.appendChild(a)
    li.appendChild(button)
    ol.appendChild(li)

}


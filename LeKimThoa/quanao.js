let database = [
    {
        Id: 1,
        name: "Nón Bucket A1070001",
        linkimg: "https://bizweb.dktcdn.net/100/329/281/products/11662369389-1510934832-copy.jpg?v=1569991097627",
        price: 150000,
    },
    {
        Id: 2,
        name: "Áo Khoác D76386822",
        linkimg: "data:image/jpeg;base64,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",
        price: 250000,
    },
    {
        Id: 3,
        name: "Áo thun F3845636520",
        linkimg: "https://media3.scdn.vn/img3/2019/12_1/SXttVA_simg_de2fe0_500x500_maxb.jpg",
        price: 150000,
    },
    {
        Id: 4,
        name: "Áo tay dài F9529291979",
        linkimg: "https://img.ltwebstatic.com/images3_pi/2019/11/04/157283796614ccc9787567293fb003326efd1bd282_thumbnail_600x.webp",
        price: 180000,
    },
    {
        Id: 5,
        name: "Quần Jean Q59389201",
        linkimg: "https://product.hstatic.net/1000230670/product/06296_-_1_49d63b539d294be0ab0e130775b705c7_large.jpg",
        price: 300000,
    },
    {
        Id: 6,
        name: "Quần tây Q9399038",



        linkimg: "https://i.xcdnx.com/gzv/H4sIAAAAAAACA6tWKlayUsooKSkotorRj9FPTtMrzsgvSE3VK8uL0U_LzEmN0Tc3NLdIM7BIMTE3NLU0NbE0Tk0xSzVIMjUwMzQyTU40UqoFAMVyCTdGAAAA/quan-ong-rong-lung-cao-kieu-han-quoc-cho-nu.jpg?fit=20000%2C20000&quality=95&ssl=1&nocnlink=1",
        price: 250000,
    }

];
// let ul1 = document.getElementById("ul1");
// /*ul1.innerHTML = ``;

// for (let pro of database) {
//     ul1.innerHTML += `<li>
//         <a href="">${pro.Id}</a>
//         <img src="${pro.linkimg}">
//         <a href="">${pro.name}</a>
//         <a href="">${pro.price}</a>
//     </li>` +`Số lượng: <input id="Soluong" type="Number">`+ `<button> Click </button>`;*/
//     for ( i =0; i< database.length;i++)
//     {
//         let Id = document.createElement("p");
//         let name = document.createElement("p");
//         let linking = document.createElement("img");
//         let price = document.createElement("p");

//         console.log(database[i]);

//         Id.inner


//     }
//}


let giohang = [];

//b1 xác định nơi mình cần render dữ liệu động
let ol = document.getElementById("ol-render");
let tongtien = 0;
function tinhtien(){
    for(let i = 0; i<giohang.length;i++){
        tongtien = tongtien + giohang[i].price;
    }
    let thetongtien = document.getElementById("tongtien");

    thetongtien.innerText = tongtien
}
function themhang(item){
   giohang.push(item);
}

for (let item of database) {

    //b2 khởi tạo các thẻ được lặp đi lặp lại
    let li = document.createElement("li");
    let img = document.createElement("img");
    let a = document.createElement("a");
    let button = document.createElement("button");
    //b3 gán giá trị hoặc thuộc tính cho các thẻ
    img.src = item.linkimg;
    img.width = 200
    // a.href = item.
    a.innerText = item.name;
    button.onclick = ()=>{
        themhang(item)
    }
    button.innerText = "add to card"
    button.classList.add("btn-hover");
    button.classList.add("color-10")
    //b4 gắn các thẻ con vào thẻ cha

    li.appendChild(img);
    li.appendChild(a);
    li.appendChild(button);
    ol.appendChild(li);


}






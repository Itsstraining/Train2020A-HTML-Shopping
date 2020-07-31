
let database = [
    {
        id: "1",
        name: "Quần jean ",
        linking: "https://thebs.vn/wp-content/uploads/2018/10/2064.jpg",
        sprice: 200000,
    },

    {
        id: "2",

        name: "Áo thun ",
        linking: "https://dosi-in.com/images/detailed/42/CDL3_1.jpg",
        sprice: 100000,
    },
    {
        id: "3",
        name: "Đồ bơi ",
        linking: "https://bikinihouse.vn/wp-content/uploads/2019/04/TB2n91_aYsrBKNjSZFpXXcXhFXa_1786014363.jpg",
        sprice: 250000,
    },
    {
        id: "4",
        name: "áo sơ mi ",
        linking: "https://salt.tikicdn.com/cache/550x550/ts/product/f5/11/3c/5dd874cf1a02b1be4c26fcef51bb5555.jpg",
        sprice: 190000,
    },
]
let giohang = []
let header = document.getElementById("header1");
let listStudent = document.getElementById("listStudent");
let inputNumber = document.getElementById("inputNumber");
let ul = document.getElementById("ul");

let tong = 0;
function tinhtien() {
    for (let i = 0; i < giohang.length; i++) {
        tong = tong + giohang[i].sprice;
    }
    let thetongtien = document.getElementById("tongtienthea");
    thetongtien.value = tong;
}

function add(iteam) {
    giohang.push(iteam)

}

for (let item of database) {

    let nhapsoluong = document.getElementById("Nhapsoluong");
    let li = document.createElement("li")
    let p = document.createElement("p")
    // let m = document.createElement("m")
    let img = document.createElement("img")
    // m.innerText = database[i].sprice
    let button = document.createElement("button");


    button.innerText = "Them gio hang";
    button.onclick = () => {
        add(item);
    }
    img.src = item.linking;
    img.height = 500;
    li.appendChild(button);

    // li.appendChild(id);
    li.appendChild(p.appendChild(document.createTextNode(item.name)));
    li.appendChild(img);
    li.appendChild(p.appendChild(document.createTextNode(item.sprice)));
    ul.appendChild(li);



}

// function addToCart(producId, quantity = 1) {
//     alert(producId);
// }
//     let or1= document.getElementById("ol.render")
// for (let i = 0; i < database.length; i++) {
//     let producTittle = document.createElement("h2");
//     producTittle.appendChild(document.createTextNode(database[i].name))
//     let buttonAdd = document.createElement("button");
//     buttonAdd.innerText = "Add to cart";
//     buttonAdd.onclick = () => {
//         addToCart(database[i].id, 1);

//     }
//     buttonAdd.innerText="Add to card"
//     let divProduct = document.createElement("div");
//     divProduct.appendChild(producTittle);
//     divProduct.appendChild(buttonAdd);

// }
// function onClickMe() {
//     // alert(inputNumber.value);
//     let numOfStudent = parseInt(prompt("Number of student"));
//     while (numOfStudent > 0) {
//         let studentName = prompt("Enter student's name");
//         let newStudentNode = document.createElement("li");
//         newStudentNode.appendChild(document.createTextNode(studentName))
//         listStudent.appendChild(newStudentNode);
//         numOfStudent--;
//     }
// }

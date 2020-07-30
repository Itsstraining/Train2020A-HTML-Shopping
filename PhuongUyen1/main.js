let ul = document.getElementById("item");
let database = [
    {id: "01" ,name: 'Cushion', url: './image/cushion.jpg', href: 'cushion.html', price: 2000},
    {id: "02" ,name: 'Calculator', url: './image/calculator.jpg', href: 'calculator.html',  price: 2000},
    {id: "03" ,name: 'Case', url: './image/case.jpg', href: 'case.html',  price: 2000},
    {id: "04" ,name: 'Coin Bank', url: './image/CoinBank.jpg', href: 'case.html',  price: 2000},
    {id: "05" ,name: 'Pencil Case', url: './image/pencilcase.jpg', href: 'bankcoin.html',  price: 2000}
];

let cart = [];

let tong = 0;

function tinhtien(){
    for(let i= 0; i < cart.length; i ++){
        tong += cart[i].price;
    }
    let tongBill = document.getElementById("tongBill");
    tongBill.innerText = tong;
}

function addToCart(pro){
        cart.push(pro);
        alertify.success('Success message');
    }

for(let pro of database) {
    let li = document.createElement("li");
    let img = document.createElement("img");
    let id = document.createElement("id");
    let a = document.createElement("a");
    let button = document.createElement("button");

    //let button2 = document.createElement("button");

    img.src = pro.url;
    a.setAttribute("id", "proName");
    a.innerText = pro.name;

    
    
    li.appendChild(img);
    li.appendChild(a);
    li.appendChild(button);
    ul.appendChild(li);

    //button2.setAttribute("id", "Info");
    //button2.innerText = "More Info";
    button.setAttribute("id", "Add");
    button.innerText = "Add";
    button.onclick = () => {
        addToCart(pro);
    };
    
}
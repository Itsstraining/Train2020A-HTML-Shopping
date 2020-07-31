let database = [{
    id: "N.01",
    name: "AK47",
    price: 4700,
    src: "./ak47large.jpg"
}, {
    id: "N.02",
    name: "M4A1",
    price: 3500,
    src: "./FN_M4A1_Rotators_1-1800x750.jpg"
}, {
    id: "N.03",
    name: "MP5",
    price: 2400,
    src: "./1200px-Heckler_&_Koch_MP5-1.jpg"
}, {
    id: "N.04",
    name: "Desert Eagle",
    price: 1700,
    src: "./1200px-DesertEagle_50AE.jpg"
}, {
    id: "N.05",
    name: " Karambit",
    price: 200,
    src: "./UC3113.jpg"
}];

let ul = document.getElementById('items');

for (let pro of database) {
    // items.innerHTML = items.innerHTML + `<li>
    // <img src="${pro.src}" alt="" style="width: 600px ; height: 300px;"> <br>
    //     <h3>    ${pro.id}   </h3>
    //     <h3>    ${pro.name} </h3>
    //     <h3>    ${pro.price} </h3> 

    // </li>` + ` <input id="Quantity" type="number">` + ` <button onclick="addToCart(${pro})"> Add to cart </button>`


    let li = document.createElement("li");

    let image = document.createElement("img");
    let firstH3 = document.createElement("h3");
    let secondH3 = document.createElement("h3");
    let thirdH3 = document.createElement("h3");
    let input = document.createElement("input");
    let button = document.createElement("button");
    button.classList.add("btn-hover");
    button.classList.add("color-8");

    image.src = pro.src;
    image.style.width = "600px";
    image.style.height = "300px";

    firstH3.innerText = pro.id;
    secondH3.innerText = pro.name;
    thirdH3.innerText = pro.price;

    input.type = "number";

    button.onclick = () => {
        addToCart(pro, input.value);
    }
    button.innerText = "Add to cart";

    li.appendChild(image);
    li.appendChild(firstH3);
    li.appendChild(secondH3);
    li.appendChild(thirdH3);
    li.appendChild(input);
    li.appendChild(button);

    ul.appendChild(li);

};

let cart = [];
let ol = document.getElementById("ol.render");
let Total = 0;

function count() {
    for (let i = 0; i < cart.length; i++) {
        Total += cart[i].total;
    }
    let tagTotal = document.getElementById("Total");
    tagTotal.innerText = `Total: ${Total} $`;

}

function addToCart(pro, inputValue) {
    inputValue > 0;
    cart.push({
        id: pro.id,
        name: pro.name,
        price: pro.price,
        number: inputValue,
        total: pro.price * inputValue
    });
    alert(`Added ${inputValue} ${pro.name}`);
}
let fullprice = 0;
let amount = 0;
let basketArray = [];

function init() {
    let mains = document.getElementById('main-dishes');
    mains.innerHTML = "";
    for (let i = 0; i < mainDishes.length; i++) {
        mains.innerHTML += itemTemp(mainDishes[i]);
    }
    let sweets = document.getElementById('sweet-dishes');
    sweets.innerHTML = "";
    for (let i = 0; i < desserts.length; i++) {
        sweets.innerHTML += itemTemp(desserts[i]);
    }
    let liquids = document.getElementById('liquid-dishes');
    liquids.innerHTML = "";
    for (let i = 0; i < drinks.length; i++) {
        liquids.innerHTML += itemTemp(drinks[i]);
    }
}

function addToBasket(item) {
    let index = -1;
    for (let i = 0; i < basketArray.length; i++) {
        if (basketArray[i].name === item.name) {
            index = i;
        }
    }
    if (index !== -1) {
        basketArray[index].quantity++;
    } else {
        item.quantity = 1;
        basketArray.push(item);
    }
    addDishes(1);
    updateFullPrice();
    renderBasket();
}

function addDishes(changeAmount) {
    let product = document.getElementById("addDishes");
    amount += changeAmount;
    if (amount < 0) {
        amount = 0;
    }
    product.innerText = amount + "x";
}

function updateFullPrice() {
    fullprice = 0;
    for (let i = 0; i < basketArray.length; i++) {
        fullprice += basketArray[i].price * basketArray[i].quantity;
    }
}

function increaseQuantity(index) {
    basketArray[index].quantity++;
    addDishes(1);
    updateFullPrice();
    renderBasket();
}

function decreaseQuantity(index) {
    if (basketArray[index].quantity > 1) {
        basketArray[index].quantity--;
        addDishes(-1);
    } else {
        addDishes(-basketArray[index].quantity);
        basketArray.splice(index, 1);
    }
    updateFullPrice();
    renderBasket();
}


function deleteFromBasket(index) {
    const quantityToRemove = basketArray[index].quantity;
    basketArray.splice(index, 1);
    addDishes(-quantityToRemove);
    updateFullPrice();
    renderBasket();
}

function renderBasket() {
    let basketId = document.getElementById('basket-items');
    let basketCheckout = document.getElementById('basket-checkout');
    basketId.innerHTML = "";
    for (let i = 0; i < basketArray.length; i++) {
        basketId.innerHTML += basketTemp(basketArray[i], i);
    }
    basketCheckout.innerHTML = costsTemp(fullprice);
}


function costsTemp(total) {
    let delivery = 5;
    let finalPrice = total + delivery;
    return renderCostTemplate(total, delivery, finalPrice);
}

function displayNone(id) {
    document.getElementById(id).classList.toggle("display-none");
}

function showOverlay() {
    document.getElementById("overlay").classList.add("display-flex");
    document.getElementById("overlay").classList.remove("display-none");
    
}

function hideOverlay() {
    document.getElementById("overlay").classList.add("display-none");
    document.getElementById("overlay").classList.remove("display-flex");
  
}

function order() {
    basketArray = [];
    fullprice = 0;
    amount = 0;
    addDishes(0);
}


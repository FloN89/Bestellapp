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
    countProducts(1);
    updateFullPrice();
    renderBasket();
}

function countProducts(changeAmount) {
    let product = document.getElementById("countProducts");
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
    countProducts(1);
    updateFullPrice();
    renderBasket();
}

function decreaseQuantity(index) {
    if (basketArray[index].quantity > 1) {
        basketArray[index].quantity--;
        countProducts(-1);
    } else {
        countProducts(-basketArray[index].quantity);
        basketArray.splice(index, 1);
    }
    updateFullPrice();
    renderBasket();
}


function deleteFromBasket(index) {
    const quantityToRemove = basketArray[index].quantity;
    basketArray.splice(index, 1);
    countProducts(-quantityToRemove);
    updateFullPrice();
    renderBasket();
}

function renderBasket() {
    let basket = document.getElementById('basket-items');
    let basketCheckout = document.getElementById('basket-checkout');
    basket.innerHTML = "";
    for (let i = 0; i < basketArray.length; i++) {
        basket.innerHTML += basketTemp(basketArray[i], i);
    }
    basketCheckout.innerHTML = costsTemp(fullprice);
}


function costsTemp(total) {
    let delivery = 5;
    let finalPrice = total + delivery;

    if (total >= 10) {
        delivery = 0;
        finalPrice = total;
    }
    return renderCostTemplate(total, delivery, finalPrice);
}

function displayNone(id) {
    document.getElementById(id).classList.toggle("display-none");
}

function showOverlay() {
    document.getElementById("overlay").classList.add("display-flex");
    document.getElementById("overlay").classList.remove("display-none");
    disableScroll();
}

function hideOverlay() {
    document.getElementById("overlay").classList.add("display-none");
    document.getElementById("overlay").classList.remove("display-flex");
    enableScroll();
}

function order() {
    basketArray = [];
    fullprice = 0;
    amount = 0;s
    renderBasket();
    countProducts(0);
}

function disableScroll() {
    document.body.style.position = 'fixed';
    document.body.style.top = `-${window.scrollY}px`;
    document.body.style.width = '100%';
}

function enableScroll() {
    const scrollY = document.body.style.top;
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
}

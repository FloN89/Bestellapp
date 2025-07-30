let deliveryCost = 7; 

function init() {
    renderFood();
    renderBasket();   
    renderBasketIconMobile();    
    numberMobileBasket();      
}

function renderFood() {
    renderCategory('dishMainFood', mainDish, showMains);
    renderCategory('dishDessertFood', desserts, showDesserts);
    renderCategory('dishDrinks', drinks, showDrinks);
}

function renderCategory(containerId, items, renderFunction) {
    const container = document.getElementById(containerId);
    container.innerHTML = items.map((_, i) => renderFunction(i)).join('');
}

function renderBasket() {
    let emptyBasket = document.getElementById('basketContentEmpty');
    emptyBasket.innerHTML = ''; 
        if (bascetCard.length > 0) {
            renderBasketFull();
        }
        else{     
            emptyBasket.innerHTML += showEmptyBasket(); 
            document.getElementById('sumMobile').style = 'display: none;';             
        }            
}

function renderBasketFull() {
    let basketContent = document.getElementById('basketFull');    
    basketContent.innerHTML = '';     
    let orderEmpty = document.getElementById('orderSection');
    orderEmpty.innerHTML = ''; 
    for (let indexBasket = 0; indexBasket < bascetCard.length; indexBasket++) {
        basketContent.innerHTML += showBasket (indexBasket); 
        orderEmpty.innerHTML = showOrderClear();
        document.getElementById('sumMobile').style = '';
        basketSum();   
    }  
}

function renderBasketIconMobile() {
    let basketMobile = document.getElementById('basketMobile');
    basketMobile.innerHTML = ''; 
    basketMobile.innerHTML += showBasketMobile();
}

function formatPriceTag(inputPrice) {
    let toFixed = inputPrice.toFixed(2);
    let replace = toFixed.replace(".",",");
    return replace;
}



function addItemToBasket(index, dishArray) {
    const item = dishArray[index];
    let existingListIndex = bascetCard.findIndex(dish => dish.name === item.name);

    if (existingListIndex !== -1) {
        bascetCard[existingListIndex].amount++;
    } else {
        bascetCard.push({
            name: item.name,
            price: item.price,
            amount: 1,
        });
    }

    renderBasket();
    numberMobileBasket();
}
function plusDish(indexBasket) {
    bascetCard[indexBasket].amount ++; 
    renderBasket();
    numberMobileBasket();
   
}

function minusDish(indexBasket) {    
    bascetCard[indexBasket].amount --; 
    if (bascetCard[indexBasket].amount >0) {        
    }
    else {
        bascetCard.splice(indexBasket, 1);
    }
    renderBasket();
    basketSum();
    numberMobileBasket();
    renderBasketFull();
}

function emptyTrash(indexBasket) {
    bascetCard.splice(indexBasket,1);
    renderBasket();   
    numberMobileBasket();
    renderBasketFull();
}

function basketSum() {    
    const total = Object.values(bascetCard).reduce((acc, curr) => (acc = acc + curr["price"] * curr["amount"]), 0);
    renderSumContent(total);   
}

function renderSumContent(total) {
    let sumMobile = document.getElementById('sumMobile');
    sumMobile.innerHTML = ''; 
    sumMobile.innerHTML += showSumContent(total);   
}

function numberMobileBasket() {
    let numberRef = document.getElementById('numberMobileBasket');
    numberRef.innerHTML = bascetCard.length;
}

function hideBasket() {
    let overlayRef = document.getElementById('stickyBasket')
    overlayRef.classList.toggle('hide-basket');  
}

function toggleOverlayOrder() {
    let overlayRef = document.getElementById('overlayOrder')
    overlayRef.classList.toggle('d-none');    
    completeEmptyTrash(); 
}

function noBubbling(event) {
    event.stopPropagation();
}

function completeEmptyTrash() {
    for (let indexBasket = 0; indexBasket < bascetCard.length; indexBasket++) {    
        bascetCard.length = 0;
        renderBasket();
        numberMobileBasket();
        renderBasketFull();
    }    
}



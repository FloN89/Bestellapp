let deliveryCost = 5; 

function init() {
    renderMain();
    renderDessert();
    renderBasket();   
    // renderDrinks();
    renderBasketIconMobile();    
    numberMobileBasket();      
}

function renderMain() { 
    let mainContent = document.getElementById('dishMainFood');
    mainContent.innerHTML = '';
    for (let indexMain = 0; indexMain < mainDish.length; indexMain++) {
        mainContent.innerHTML += showMains (indexMain);                
    }
}  

function renderDessert() { 
    let dessertContent = document.getElementById('dishDessertFood');
    dessertContent.innerHTML = '';
    for (let indexDessert = 0; indexDessert < desserts.length; indexDessert++) {
        dessertContent.innerHTML += showDesserts(indexDessert);                
    }
}  

// function renderDrinks() { 
//     let drinksContent = document.getElementById('dishDrinks');
//     drinksContent.innerHTML = '';
//     for (let indexDrinks = 0; indexDrinks < desserts.length; indexDrinks++) {
//         drinksContent.innerHTML += showDrinks (indexDrinks);                
//     }
// }  


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

function addMainDish(indexMain) {
    let existingListIndex = bascetCard.findIndex(dish => dish.name === mainDish[indexMain].name);
    if (existingListIndex !== -1) {
        bascetCard[existingListIndex].amount++;
    }  
    else {
        bascetCard.push({
            name: mainDish[indexMain].name,
            price: mainDish[indexMain].price,
            amount: 1,  
        });
    }
    renderBasket(); 
    numberMobileBasket();
}

function addDessert(indexDessert) {
    let existingListIndex = bascetCard.findIndex(dish => dish.name === desserts[indexDessert].name);
    if (existingListIndex !== -1) {
        bascetCard[existingListIndex].amount++;
    }  
    else {
        bascetCard.push({
            name: desserts[indexDessert].name,
            price: desserts[indexDessert].price,
            amount: 1,  
        });
    }
    renderBasket(); 
    numberMobileBasket();
}  

// function addDrinks(indexDrinks) {
//     let existingListIndex = bascetCard.findIndex(dish => dish.name === drinks[indexDrinks].name);
//     if (existingListIndex !== -1) {
//         bascetCard[existingListIndex].amount++;
//     }  
//     else {
//         bascetCard.push({
//             name: drinks[indexDrinks].name,
//             price: drinks[indexDrinks].price,
//             amount: 1,  
//         });
//     }
//     renderBasket(); 
//     numberMobileBasket();
// }  
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

function checkFunction() {
    let checkBox = document.getElementById("checkbox1");    
    if (checkBox.checked == false){
        deliveryCost = 5;        
    } 
    else {
        deliveryCost = 0;        
    }
    basketSum(deliveryCost);  
}

function completeEmptyTrash() {
    for (let indexBasket = 0; indexBasket < bascetCard.length; indexBasket++) {    
        bascetCard.length = 0;
        renderBasket();
        numberMobileBasket();
        renderBasketFull();
    }    
}

function checkFunctionMobile() {
    let checkBox = document.getElementById("checkbox2");    
    if (checkBox.checked == false){
        deliveryCost = 5;        
    } 
    else {
        deliveryCost = 0;        
    }
    basketSum(deliveryCost);  
}


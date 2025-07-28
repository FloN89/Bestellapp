function showMains(indexMain) {
    return       `  <div class="dish-choice">
                        <img onclick="addMainDish(${indexMain})" class="plus" src="img/buttons/add-151736_1280.png">
                        <span id="dishesMainName${indexMain}" class="dishes-name">${mainDish[indexMain].name}</span>
                        <span id="dishesIncridients" class="dishes-incridients">${mainDish[indexMain].description}</span>
                        <span id="dishesPrice${indexMain}" class="dishes-price">${formatPriceTag(mainDish[indexMain].price)}€</span>
                    </div>   
                `
}


function showDesserts(indexDessert) {
    return       `  <div class="dish-choice">
                        <img onclick="addDessert(${indexDessert})" class="plus" src="img/buttons/add-151736_1280.png">
                        <span id="dishesDessertName" class="dishes-name">${desserts[indexDessert].name}</span>
                        <span id="dishesIncridients" class="dishes-incridients">${desserts[indexDessert].description}</span>
                        <span id="dishesPrice" class="dishes-price">${formatPriceTag(desserts[indexDessert].price)}€</span>
                    </div>   
                `
}

function showDrinks(indexDrinks) {
    return       `  <div class="dish-choice">
                        <img onclick="addDrinks(${indexDrinks})" class="plus" src="img/buttons/add-151736_1280.png">
                        <span id="dishesDrinkName" class="dishes-name">${drinks[indexDrinks].name}</span>
                        <span id="dishesIncridients" class="dishes-incridients">${desserts[indexDrinks].description}</span>
                        <span id="dishesPrice" class="dishes-price">${drinks[indexDrinks].price} €</span>
                    </div>   
                `
}

function showBasket(indexBasket) {
    return      `   <div class="basket-content">
                        <span id="basketDishes" class="basket-dishes">${bascetCard[indexBasket].name}</span>
                        <div class="basket-amount-calculator">
                            <img onclick="minusDish(${indexBasket})" id="basketPlusMinus" class="basket-plus-minus" src="img/buttons/left-44037_1280.png">
                            <span id="basketAmount${indexBasket}" class="basket-amount" >${bascetCard[indexBasket].amount}</span>
                            <img onclick="plusDish(${indexBasket})" class="basket-plus-minus" src="img/buttons/right-29247_1280.png">    
                            <span id="basketPrice" class="basket-price"> ${formatPriceTag(bascetCard[indexBasket].price * bascetCard[indexBasket].amount)}€</span>
                            <img onclick="emptyTrash(${indexBasket})" class="basket-trash" src="img/buttons/man-30322_1280.png">
                        </div>
                    </div>             
                `  
}

function showEmptyBasket(){
return          `   <div  class="basket-content-empty">
                        <img class="basket-icon" src="img/logos/black-box-310220_1280.png">
                        <span>Es liegt noch keine Bestellung vor.</span>
                    </div>
                ` 
}

function showSumContent(total) {
    return      `   <div class="seperation"></div>
                        <div id="basketSum" class="basket-sum">
                            <div class="subtotal">
                                <span id="subtotal" class="subtotal-text">Zwischensumme</span>
                                <span id="subtotalAmount" class="subtotal-amount">${formatPriceTag(total)} €</span>
                            </div>                        
                            <div class="subtotal">
                                <span class="subtotal-text">Lieferkosten</span>
                                <span class="subtotal-amount">${formatPriceTag(deliveryCost)} €</span>
                            </div>                            
                            <div class="subtotal">
                                <span class="subtotal-text"><b>Gesamt</b></span>
                                <span id="sum" class="subtotal-amount"><b>${formatPriceTag(total + deliveryCost)} €</b></span>
                            </div>  
                        </div> 
                    </div>
                    <div class="seperation"></div>
                `   
}

function showOrderClear() {
    return      `  
                    <div class="order-empty">
                        <button onclick="toggleOverlayOrder()" class="order-button">Jetzt bestellen</button>
                        <button onclick="completeEmptyTrash()" class="empty-basket-button">Warenkorb leeren</button>
                    </div>             
                `
}



function showBasketMobile() {
    return      `   <div class="basket-mobile">
                         <img onclick="hideBasket()" src="img/logos/basket.png">
                         <span id="numberMobileBasket" class="number-mobile-basket">0</span>
                    </div>
                 `
}
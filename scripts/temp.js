function itemTemp(itemArray) {
  return `
    <div class="item" onclick='addToBasket(${JSON.stringify(itemArray)})'>
      <div class="item-headline">
        <p>${itemArray.name}</p>
        <img src="img/logo/right-297788_1280.png">
      </div>
      <p>${itemArray.description}</p>
      <p class="price-P">${itemArray.price}€</p>
    </div>
  `;
}

function basketTemp(item, index) {
  return `
    <div class="product">
      <p><b>${item.name}</b></p>
      <div class="product-adjustment">
        <img onclick="decreaseQuantity(${index})" src="img/logo/left-297787_1280.png">
        <p>${item.quantity}</p>
        <img onclick="increaseQuantity(${index})" src="img/logo/right-297788_1280.png">
        <p>${(item.price * item.quantity).toFixed(2)}€</p>
        <img onclick="deleteFromBasket(${index})" src="img/logo/delete.png">
      </div>
    </div>
  `;
}

function renderCostTemplate(total, delivery, finalPrice) {
  return `
        <p>Zwischensumme: ${total.toFixed(2)}€</p>
        <p>Lieferkosten: ${delivery.toFixed(2)}€</p>
        <p><b>Gesamt: ${finalPrice.toFixed(2)}€</b></p>
    `;
}

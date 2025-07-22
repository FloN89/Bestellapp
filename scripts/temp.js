function itemTemp(itemArray) {
  return `
    <div class="item" onclick='addToBasket(${JSON.stringify(itemArray)})'>
      <div class="item-headline">
        <p>${itemArray.name}</p>
        <img src="img/logo/plus.png">
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
        <img onclick="decreaseQuantity(${index})" src="img/logo/delete.png">
        <p>${item.quantity}</p>
        <img onclick="increaseQuantity(${index})" src="img/logo/plus.png">
        <p>${(item.price * item.quantity).toFixed(2)}€</p>
        <img onclick="deleteFromBasket(${index})" src="img/logo/trash.png">
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

let total = 0;
let orderItems = {}; // Clé : nom article, Valeur : { prixUnitaire, quantité }

function addToOrder(item, price) {
  if (orderItems[item]) {
    orderItems[item].quantity += 1;
  } else {
    orderItems[item] = { price: price, quantity: 1 };
  }

  total += price;
  updateOrderDisplay();
}

function updateOrderDisplay() {
  const orderList = document.getElementById('orderList');
  orderList.innerHTML = ''; // Vider l'affichage

  for (let item in orderItems) {
    const lineItem = document.createElement('li');
    const quantity = orderItems[item].quantity;
    const priceUnit = orderItems[item].price;
    const priceTotal = priceUnit * quantity;

    lineItem.textContent = `${item} x${quantity} - ${priceTotal.toFixed(2)} DH`;
    orderList.appendChild(lineItem);
  }

  document.getElementById('total').textContent = total.toFixed(2);
}

function printTicket() {
  if (total === 0) {
    alert("Aucune commande à imprimer.");
    return;
  }

  const newWindow = window.open('', '', 'width=400,height=600');
  newWindow.document.write('<html><head><title>Ticket</title></head><body>');
  newWindow.document.write('<h2>Ticket de commande</h2>');
  newWindow.document.write('<ul>');

  for (let item in orderItems) {
    const quantity = orderItems[item].quantity;
    const priceTotal = orderItems[item].price * quantity;
    newWindow.document.write(`<li>${item} x${quantity} - ${priceTotal.toFixed(2)} DH</li>`);
  }

  newWindow.document.write('</ul>');
  newWindow.document.write(`<p><strong>Total :</strong> ${total.toFixed(2)} DH</p>`);
  newWindow.document.write('<p>Merci pour votre visite !</p>');
  newWindow.document.write('</body></html>');
  newWindow.document.close();
  newWindow.print();
}

function resetOrder() {
  orderItems = {};
  total = 0;
  updateOrderDisplay();
}

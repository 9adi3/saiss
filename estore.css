// Navigation categories
let category_nav_list = document.querySelector(".category_nav_list");

function Open_Categ_list() {
  if (category_nav_list) category_nav_list.classList.toggle("active");
}

// Menu links
let nav_links = document.querySelector(".nav_links");

function open_Menu() {
  if (nav_links) nav_links.classList.toggle("active");
}

// Cart panel
let cart = document.querySelector(".cart");

function open_close_cart() {
  if (cart) cart.classList.toggle("active");
}

// Charger les produits et lier les boutons "Ajouter au panier"
fetch("products.json")
  .then((response) => response.json())
  .then((data) => {
    const addToCartButtons = document.querySelectorAll(".btn_add_cart");

    addToCartButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        const productId = event.target.getAttribute("data-id");
        const selectedProduct = data.find((product) => product.id == productId);

        if (selectedProduct) {
          addToCart(selectedProduct);

          const allMatchingButtons = document.querySelectorAll(
            `.btn_add_cart[data-id="${productId}"]`
          );

          allMatchingButtons.forEach((btn) => {
            btn.classList.add("active");
            btn.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> Item in cart`;
          });
        }
      });
    });
  });

// Ajouter un produit au panier
function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ ...product, quantity: 1 });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
}

// Mettre à jour l'affichage du panier
function updateCart() {
  const cartItemsContainer = document.getElementById("cart_items");
  const checkout_items = document.getElementById("checkout_items");

  const items_input = document.getElementById("items");
  const total_price_input = document.getElementById("total_price");
  const count_items_input = document.getElementById("count_items");

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  let total_price = 0;
  let total_count = 0;

  if (checkout_items) {
    checkout_items.innerHTML = "";
    if (items_input) items_input.value = "";
    if (total_price_input) total_price_input.value = "";
    if (count_items_input) count_items_input.value = "";
  }

  if (cartItemsContainer) cartItemsContainer.innerHTML = "";

  cart.forEach((item, index) => {
    const total_price_item = item.price * item.quantity;
    total_price += total_price_item;
    total_count += item.quantity;

    if (items_input) {
      items_input.value += `${item.name} --- price : ${total_price_item} --- count : ${item.quantity}\n`;
    }

    if (total_price_input) total_price_input.value = total_price + 20;
    if (count_items_input) count_items_input.value = total_count;

    if (cartItemsContainer) {
      cartItemsContainer.innerHTML += `
        <div class="item_cart">
          <img src="${item.img}" alt="">
          <div class="content">
            <h4>${item.name}</h4>
            <p class="price_cart">$${total_price_item}</p>
            <div class="quantity_control">
              <button class="decrease_quantity" data-index="${index}">-</button>
              <span class="quantity">${item.quantity}</span>
              <button class="increase_quantity" data-index="${index}">+</button>
            </div>
          </div>
          <button class="delete_item" data-index="${index}"><i class="fa-solid fa-trash-can"></i></button>
        </div>`;
    }

    if (checkout_items) {
      checkout_items.innerHTML += `
        <div class="item_cart">
          <div class="image_name">
            <img src="${item.img}" alt="">
            <div class="content">
              <h4>${item.name}</h4>
              <p class="price_cart">$${total_price_item}</p>
              <div class="quantity_control">
                <button class="decrease_quantity" data-index="${index}">-</button>
                <span class="quantity">${item.quantity}</span>
                <button class="increase_quantity" data-index="${index}">+</button>
              </div>
            </div>
          </div>
          <button class="delete_item" data-index="${index}"><i class="fa-solid fa-trash-can"></i></button>
        </div>`;
    }
  });

  const price_cart_total = document.querySelector(".price_cart_total");
  const count_item_cart = document.querySelector(".count_item_cart");
  const count_item_header = document.querySelector(".count_item_header");

  if (price_cart_total) price_cart_total.innerHTML = `$ ${total_price}`;
  if (count_item_cart) count_item_cart.innerHTML = total_count;
  if (count_item_header) count_item_header.innerHTML = total_count;

  if (checkout_items) {
    const subtotal_checkout = document.querySelector(".subtotal_checkout");
    const total_checkout = document.querySelector(".total_checkout");

    if (subtotal_checkout) subtotal_checkout.innerHTML = `$ ${total_price}`;
    if (total_checkout) total_checkout.innerHTML = `$ ${total_price + 20}`;
  }

  // Gérer les boutons +, -, delete
  const increaseButtons = document.querySelectorAll(".increase_quantity");
  const decreaseButtons = document.querySelectorAll(".decrease_quantity");
  const deleteButtons = document.querySelectorAll(".delete_item");

  increaseButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const itemIndex = event.target.getAttribute("data-index");
      increaseQuantity(itemIndex);
    });
  });

  decreaseButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const itemIndex = event.target.getAttribute("data-index");
      decreaseQuantity(itemIndex);
    });
  });

  deleteButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const itemIndex = event.target.closest("button").getAttribute("data-index");
      removeFromCart(itemIndex);
    });
  });
}

function increaseQuantity(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart[index].quantity += 1;
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
}

function decreaseQuantity(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (cart[index].quantity > 1) {
    cart[index].quantity -= 1;
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
}

function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const removedProduct = cart.splice(index, 1)[0];
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
  if (removedProduct) updateButtonsState(removedProduct.id);
}

function updateButtonsState(productId) {
  const allMatchingButtons = document.querySelectorAll(
    `.btn_add_cart[data-id="${productId}"]`
  );
  allMatchingButtons.forEach((button) => {
    button.classList.remove("active");
    button.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> Add to cart`;
  });
}

// Initialiser le panier à l’ouverture
updateCart();











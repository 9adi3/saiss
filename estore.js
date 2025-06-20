

let category_nav_list = document.querySelector(".category_nav_list");
function Open_Categ_list() {
  category_nav_list.classList.toggle("active") }




var cart = document.querySelector('.cart');
function open_close_cart() {
    cart.classList.toggle("active") }


fetch('products.json')
.then(response => response.json())
.then(data => {

    const addToCartButtons = document.querySelectorAll(".btn_add_cart")
    addToCartButtons.forEach(button =>{
      button.addEventListener("click",(event) =>{
      const productId = event.target.getAttribute('data-id')
      const selectedProduct = data.find(product => product.id == productId)

      addToCart(selectedProduct)

      const allMatchingButtons = document.querySelectorAll(`.btn_add_cart[data-id="${productId}"]`)
      allMatchingButtons.forEach(btn=>{
        btn.classList.add("active")
        btn.innerHTML=`<i class="fa-solid fa-cart-shopping"></i> Item in cart`

      })
   
    })
  })
})


function addToCart(product){

  let cart = JSON.parse(localStorage.getItem('cart')) || []

  cart.push({...product , quantity: 1})
  localStorage.setItem('cart' , JSON.stringify(cart))

  updateCart()

}

function updateCart(){
  const cartItemsContainer = document.getElementById("cart_items")

  const cart = JSON.parse(localStorage.getItem('cart')) || []

  cartItemsContainer.innerHTML = "";
  cart.forEach((item , index) => {
    cartItemsContainer.innerHTML +=`
    <div class="item_cart">
        <img src="${item.img}" alt="">
        <div class="content">
          <h4>${item.name}</h4>
          <p class="price_cart">$${item.price}</p>
          <div class="quantity_control">
            <button class="decrease_quantity">-</button>
            <span class="quantity">${item.quantity}</span>
            <button class="increase_quantity">+</button>
          </div>
        </div>
        <button class="delete_item" data-index="${index}"> <i class="fa-solid fa-trash-can"></i></button>
      </div>
    `
  })

  const deleteButtons = document.querySelectorAll('.delete_item')

  deleteButtons.forEach(button =>{
    button.addEventListener('click' , (event) =>{
      const itemIndex = event.target.closest('button').getAttribute('data-index')
      removeFromCart(itemIndex)
    
    })
  })
}

function removeFromCart(index){
  const cart = JSON.parse(localStorage.getItem('cart')) || []

  const removeProduct = cart.splice(index , 1) [0]
  localStorage.setItem('cart' , JSON.stringify(cart))
  updateCart()
  updateButoonsState(removeProduct.id)
}

function updateButoonsState(productId){
  const allMatchingButtons = document.querySelectorAll(`.btn_add_cart[data-id="${productId}"]`)
  allMatchingButtons.forEach(button =>{
    button.classList.remove('active')
    button.innerHTML= `<i class="fa-solid fa-cart-shopping"></i> Add to cart`
  })

}

updateCart();


// Cart

class Cart {
  constructor() {
    this.cart = document.querySelector('#cart')
    this.cartShop = document.querySelector('#cart-shop')
    this.cartClose = document.querySelector('#cart-close')
  }

  show = () => this.cart.classList.add('show-cart')

  hide = () => this.cart.classList.remove('show-cart')
}

// Exports

export default Cart

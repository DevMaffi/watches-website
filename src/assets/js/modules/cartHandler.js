// Modules

import { Cart } from '@model'

// Init cart

const cart = new Cart()

// Event listeners

function handleCart() {
  cart.cartShop?.addEventListener('click', cart.show)
  cart.cartClose?.addEventListener('click', cart.hide)
}

// Exports

export default handleCart

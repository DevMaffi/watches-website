// Modules

import { NavMenu } from '@model'

// Init nav menu

const navMenu = new NavMenu()

// Event listeners

function handleMenu() {
  navMenu.navToggle?.addEventListener('click', navMenu.show)
  navMenu.navClose?.addEventListener('click', navMenu.hide)

  navMenu.navLinks.forEach(link => {
    link.addEventListener('click', navMenu.hide)
  })
}

// Exports

export default handleMenu

// NavMenu

class NavMenu {
  constructor() {
    this.navMenu = document.querySelector('#nav-menu')
    this.navToggle = document.querySelector('#nav-toggle')
    this.navClose = document.querySelector('#nav-close')
    this.navLinks = document.querySelectorAll('.nav__link')
  }

  show = () => this.navMenu.classList.add('show-menu')

  hide = () => this.navMenu.classList.remove('show-menu')
}

// Exports

export default NavMenu

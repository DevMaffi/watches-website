// Change background header

// this refers to window
function scrollHeader() {
  const header = document.querySelector('#header')

  // when the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 50) header.classList.add('scroll-header')
  else header.classList.remove('scroll-header')
}

// Handle scroll-up module representation

// this reefers to window
function showScrollUp() {
  const scrollUp = document.querySelector('#scroll-up')

  // when the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 350) return scrollUp.classList.add('show-scroll')

  return scrollUp.classList.remove('show-scroll')
}

// Handle links active class

function handleActiveLink(section, scrollY) {
  const sectionHeight = section.offsetHeight
  const sectionTop = section.offsetTop - 58
  const sectionId = section.getAttribute('id')
  const activeSection = document.querySelector(
    `.nav__menu a[href*=${sectionId}]`
  )

  // when the scroll is within the section, add the active-link class to the corresponding nav link in the nav menu, otherwise, remove it
  if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
    return activeSection.classList.add('active-link')

  return activeSection.classList.remove('active-link')
}

// Apply handler for each nav menu link

// this refers to window
function scrollActive() {
  const sections = document.querySelectorAll('section[id]')
  const scrollY = this.pageYOffset

  sections.forEach(section => handleActiveLink(section, scrollY))
}

// Add event handlers on window

function handleScroll() {
  window.addEventListener('scroll', scrollHeader)
  window.addEventListener('scroll', showScrollUp)
  window.addEventListener('scroll', scrollActive)
}

// Exports

export default handleScroll

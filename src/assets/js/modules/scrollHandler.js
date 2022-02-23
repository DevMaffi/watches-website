// Change background header

// this refers to window
function scrollHeader() {
  const header = document.querySelector('#header')

  // when the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 50) header.classList.add('scroll-header')
  else header.classList.remove('scroll-header')
}

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

// this refers to window
function scrollActive() {
  const sections = document.querySelectorAll('section[id]')
  const scrollY = this.pageYOffset

  sections.forEach(section => handleActiveLink(section, scrollY))
}

function handleScroll() {
  window.addEventListener('scroll', scrollHeader)
  window.addEventListener('scroll', scrollActive)
}

// Exports

export default handleScroll

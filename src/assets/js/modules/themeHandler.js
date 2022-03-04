const themeButton = document.querySelector('#theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)

const selectedTheme = localStorage.getItem('selectedTheme')
const selectedIcon = localStorage.getItem('selectedIcon')

// Obtain the current theme that the interface has by validating the dark-theme class

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? 'dark' : 'light'

const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// Validate if the user previously chose a topic

if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark

  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
    darkTheme
  )

  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](
    iconTheme
  )
}

function handleTheme() {
  // Activate / deactivate the theme manually with the button

  themeButton.addEventListener('click', () => {
    // add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    // save the theme and the current icon that the user chose
    localStorage.setItem('selectedTheme', getCurrentTheme())
    localStorage.setItem('selectedIcon', getCurrentIcon())
  })
}

// Exports

export default handleTheme

const hamburgerIcon = document.getElementById('hamburger-icon')
const hamburgerMenu = document.getElementById('hamburger-menu')
const closeHamburgerMenu = document.getElementById('close-hamburger')
const overlayHamburger = document.getElementById('hamburger-overlay')

// toggle hamburger menu
hamburgerIcon.addEventListener('click', () => {
    hamburgerMenu.classList.add('hamburger-menu-active')
    overlayHamburger.classList.add('hamburger-overlay-active')
    document.body.classList.add('hide-scrollbar')
})

// close hamburger menu
closeHamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.remove('hamburger-menu-active')
    overlayHamburger.classList.remove('hamburger-overlay-active')
    document.body.classList.remove('hide-scrollbar')
})

// close hamburger menu on overlay
overlayHamburger.addEventListener('click', () => {
    hamburgerMenu.classList.remove('hamburger-menu-active')
    overlayHamburger.classList.remove('hamburger-overlay-active')
    document.body.classList.remove('hide-scrollbar')
})

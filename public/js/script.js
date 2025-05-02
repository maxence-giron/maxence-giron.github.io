'use strict'

/**
 * Toggle helper
 */
const toggleClass = (elem, className = 'active') => elem.classList.toggle(className)

/**
 * Navbar toggle
 */
const navToggleBtn = document.querySelector('[data-nav-toggle-btn]')
const navbar = document.querySelector('[data-navbar]')

const toggleNavbar = () => {
    toggleClass(navToggleBtn)
    toggleClass(navbar)
    toggleClass(document.body)
}

navToggleBtn.addEventListener('click', toggleNavbar)
navbar.addEventListener('click', toggleNavbar)

/**
 * Theme toggle
 */
const themeToggleBtn = document.querySelector('[data-theme-btn]')

const applyTheme = (theme) => {
    document.body.classList.remove('light', 'dark')
    document.body.classList.add(theme)
    localStorage.setItem('theme', theme)
    themeToggleBtn.classList.toggle('active', theme === 'light')
}

themeToggleBtn.addEventListener('click', () => {
    const newTheme = themeToggleBtn.classList.contains('active') ? 'dark' : 'light'
    applyTheme(newTheme)
})

const storedTheme = localStorage.getItem('theme') || 'dark'
applyTheme(storedTheme)

/**
 * Skills toggle
 */
const toggleBtnBox = document.querySelector('[data-toggle-box]')
const toggleBtns = document.querySelectorAll('[data-toggle-btn]')
const skillsBox = document.querySelector('[data-skills-box]')

toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        toggleClass(toggleBtnBox)
        toggleBtns.forEach(toggleClass)
        toggleClass(skillsBox)
    })
})

/**
 * Go to top & sticky header
 */
const header = document.querySelector('[data-header]')
const goTopBtn = document.querySelector('[data-go-top]')

window.addEventListener('scroll', () => {
    const isScrolled = window.scrollY >= 10
    header.classList.toggle('active', isScrolled)
    goTopBtn.classList.toggle('active', isScrolled)
})

/**
 * Current year & experience
 */
const currentDate = new Date()
const firstDayOfWork = new Date('2022-08-01')

const experience = Math.floor((currentDate - firstDayOfWork) / (365.25 * 24 * 60 * 60 * 1000))
document.getElementById('yearsExperience').textContent = `+${experience}`
document.getElementById('currentYear').textContent = currentDate.getFullYear()

/**
 * Send message
 */
const sendMailBtn = document.getElementById('sendMail')

sendMailBtn.addEventListener('click', () => {
    const name = document.getElementById('name').value.trim()
    const subject = document.getElementById('subject').value.trim()
    const message = document.getElementById('message').value.trim()

    if (!name || !subject || !message) {
        alert("Veuillez remplir tous les champs avant d'envoyer votre message.")
        return
    }

    const body = `Ce message a été envoyé par Mme. / M. ${name}\n\nLe message est le suivant :\n\n${message}`
    const mailtoLink = `mailto:maxence.giron@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoLink
})

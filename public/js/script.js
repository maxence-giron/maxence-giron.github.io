'use strict'

/**
 * TOGGLE
 */
const elemToggleFunc = function (elem) {
    elem.classList.toggle('active')
}

/**
 * GO TO TOP
 */
const header = document.querySelector('[data-header]')
const goTopBtn = document.querySelector('[data-go-top]')

window.addEventListener('scroll', function () {
    if (window.scrollY >= 10) {
        header.classList.add('active')
        goTopBtn.classList.add('active')
    } else {
        header.classList.remove('active')
        goTopBtn.classList.remove('active')
    }
})

/**
 * NAVBAR TOGGLE
 */
const navToggleBtn = document.querySelector('[data-nav-toggle-btn]')
const navbar = document.querySelector('[data-navbar]')

navToggleBtn.addEventListener('click', function () {
    elemToggleFunc(navToggleBtn)
    elemToggleFunc(navbar)
    elemToggleFunc(document.body)
})

navbar.addEventListener('click', function () {
    elemToggleFunc(navToggleBtn)
    elemToggleFunc(navbar)
    elemToggleFunc(document.body)
})

/**
 * SKILLS TOGGLE
 */
const toggleBtnBox = document.querySelector('[data-toggle-box]')
const toggleBtns = document.querySelectorAll('[data-toggle-btn]')
const skillsBox = document.querySelector('[data-skills-box]')

for (let i = 0; i < toggleBtns.length; i++) {
    toggleBtns[i].addEventListener('click', function () {
        elemToggleFunc(toggleBtnBox)
        for (let i = 0; i < toggleBtns.length; i++) {
            elemToggleFunc(toggleBtns[i])
        }
        elemToggleFunc(skillsBox)
    })
}

/**
 * THEME TOGGLE
 */
const themeToggleBtn = document.querySelector('[data-theme-btn]')

themeToggleBtn.addEventListener('click', function () {
    elemToggleFunc(themeToggleBtn)
    if (themeToggleBtn.classList.contains('active')) {
        document.body.classList.remove('dark')
        document.body.classList.add('light')
        localStorage.setItem('theme', 'light')
    } else {
        document.body.classList.add('dark')
        document.body.classList.remove('light')
        localStorage.setItem('theme', 'dark')
    }
})

/**
 * CHECK THEME
 */
if (localStorage.getItem('theme') === 'light') {
    themeToggleBtn.classList.add('active')
    document.body.classList.remove('dark')
    document.body.classList.add('light')
} else {
    themeToggleBtn.classList.remove('active')
    document.body.classList.remove('light')
    document.body.classList.add('dark')
}

/**
 * SEND MAIL
 */
const sendMail = document.getElementById('sendMail')

sendMail.addEventListener('click', function () {
    const name = document.getElementById('name').value
    const phone = document.getElementById('phone').value
    const subject = document.getElementById('subject').value
    const message = document.getElementById('message').value

    let template = 'Ce message a été envoyé par Mme. / M. ' + name
    if (phone) template += ' | ' + phone
    template += '\n\nLe message est le suivant : \n\n' + message

    if (name && subject && message) {
        const mailtoLink = `mailto:gironmaxence.pro@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(template)}`
        window.location.href = mailtoLink

        window.location.href = 'https://maxhwk.github.io'
        alert('Merci pour votre message.')
    } else {
        alert('Veuillez remplir les champs requis avant d\'envoyer votre message.')
    }
})

/**
 * GET EXPERIENCE / CURRENT YEAR
 */
const currentDate = new Date()
const firstDayOfWork = new Date('2022-08-01')

const experience = Math.ceil((currentDate - firstDayOfWork) / (365.25 * 24 * 60 * 60 * 1000))
const yearsExperience = document.getElementById('yearsExperience')
yearsExperience.textContent = experience.toString()

const currentYear = document.getElementById('currentYear')
currentYear.textContent = currentDate.getFullYear().toString()

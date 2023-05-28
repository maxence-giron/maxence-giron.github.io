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
const name = document.getElementById('name').value
const phone = document.getElementById('phone').value
const subject = document.getElementById('subject').value
const message = document.getElementById('message').value

const template = 'Ce message a été envoyé par Mme. / M. ' + name + '(' + phone + ') <br>'
    + 'Le message est le suivant : <br>' + message

sendMail.addEventListener('click', function () {
    if (name === '' || subject === '' || message === '') {
        alert('Veuillez remplir tous les champs obligatoires avant d\'envoyer votre message.')
    } else {
        window.location.href = `mailto:gironmaxence.pro@gmail.com?subject=${subject}&body=${template}`
    }
})
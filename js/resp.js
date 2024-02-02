burger = document.querySelector('.burger')
rightNav = document.querySelector('.rightNav')
navbar = document.querySelector('.navbar')

burger.addEventListener('click', () => {
    rightNav.classList.toggle('rightNav1')
    navbar.classList.toggle('navbar1')
})


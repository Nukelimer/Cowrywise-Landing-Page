const cancelBtn = document.querySelector('.cancel');
const hamburgerBtn = document.querySelector('.ham-btn');
const navItems = document.querySelector('.nav-items');


cancelBtn.addEventListener('click', () => {
    navItems.classList.toggle('hide')
})

hamburgerBtn.addEventListener('click', () => {
    navItems.classList.remove('hide')
    navItems.classList.add('show')
})
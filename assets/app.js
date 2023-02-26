const cancelBtn = document.querySelector('.cancel');
const hamburgerBtn = document.querySelector('.ham-btn');
const navItems = document.querySelector('.nav-items');


hamburgerBtn.addEventListener('click', () => {
    navItems.style.display = 'flex';
    navItems.classList.add('show_')
});

cancelBtn.addEventListener('click', () => {
    navItems.style.display = 'none';
    navItems.classList.remove('show_')
});

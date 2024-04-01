// inject current year in footer
const rightNow = new Date();
document.querySelector('#year').textContent = rightNow.getFullYear();

// menu toggle
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
}

const menu = document.getElementById("hamburger");

menu.addEventListener("click", toggleMenu);
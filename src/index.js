// Mobile menu start
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
const overlay = document.getElementById('overlay');

// Event listener for hamburger menu click
hamburgerBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    overlay.classList.toggle('open');
})

// Click menu link to close mobile nav
const mobileMenuLinkClick = function () {
    mobileMenu.classList.remove('open');
    overlay.classList.remove('open');
}

// Click outside of menu to close
window.addEventListener('click', (e) => {
    if (e.target === overlay) {
        mobileMenu.classList.remove('open');
        overlay.classList.remove('open');
    }
})
// Mobile menu end


// Popup Thank you start
const sendMessageClick = function () {
    document.querySelector('.thank__you--div').style.visibility = "visible";
    document.querySelector('.thank__you--div').style.opacity = "1";
}

const closePopupMessage = function () {
    document.querySelector('.thank__you--div').style.visibility = "hidden";
    document.querySelector('.thank__you--div').style.opacity = "0";
}

// Popup Thank you end

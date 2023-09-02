/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close");

if (navToggle && navMenu && navClose) {
    navToggle.addEventListener("click", () =>
        navMenu.classList.add("show-menu")
    );

    navClose.addEventListener("click", () =>
        navMenu.classList.remove("show-menu")
    );
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () =>
    document.getElementById("nav-menu").classList.remove("show-menu");

navLink.forEach((nL) => nL.addEventListener("click", linkAction));

/*=============== SHADOW HEADER ===============*/
const shadowHeader = () => {
    document
        .getElementById("header")
        .classList[window.scrollY >= 50 ? "add" : "remove"]("shadow-header");
};

window.addEventListener("scroll", shadowHeader);

/*=============== SHOW SCROLL UP ===============*/
const scrollup = () => {
    document
        .getElementById("scroll-up")
        .classList[window.scrollY >= 350 ? "add" : "remove"]("show-scroll");
};

window.addEventListener("scroll", scrollup);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
    const scrollY = window.scrollY;

    sections.forEach((section) => {
        const sectionHeight = section.offsetHeight,
            sectionTop = section.offsetTop - 58,
            sectionId = section.getAttribute("id"),
            sectionClass = document.querySelector(
                ".nav__menu a[href*=" + sectionId
            );

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionClass.classList.add("active-link");
        } else {
            sectionClass.classList.remove("active-link");
        }
    });
};

window.addEventListener("scroll", scrollActive);

/*=============== DARK LIGHT THEME ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/

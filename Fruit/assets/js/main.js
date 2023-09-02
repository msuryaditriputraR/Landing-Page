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

/*=============== SHOW SCROLL UP ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== DARK LIGHT THEME ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/

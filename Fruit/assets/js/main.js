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
const themeToggle = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

// get previous theme selected
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// validate if user selected theme previously
if (selectedTheme) {
    // change the theme according to the previous user's choice
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
        darkTheme
    );
    themeToggle.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
        iconTheme
    );
}

// create function to get current theme to save in local storage
const getCurrentTheme = () =>
    document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
    themeToggle.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

// Activate / deactivate the theme with the button
themeToggle.addEventListener("click", () => {
    // ADD or remove dark class
    document.body.classList.toggle(darkTheme);
    themeToggle.classList.toggle(iconTheme);

    // save to localstorage what theme user choose
    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
});

/*=============== SCROLL REVEAL ANIMATION ===============*/

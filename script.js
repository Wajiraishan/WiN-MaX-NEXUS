/* =====================================================
   PAGE LOADER
===================================================== */

window.addEventListener("load", function () {

    const loader = document.getElementById("pageLoader");

    setTimeout(function () {

        loader.classList.add("hide");

    }, 2200);

});


/* =====================================================
   MOBILE MENU
===================================================== */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {

    menuToggle.classList.toggle("open");

    navMenu.classList.toggle("open");

});


/* =====================================================
   CLOSE MOBILE MENU
===================================================== */

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        menuToggle.classList.remove("open");

        navMenu.classList.remove("open");

    });

});


/* =====================================================
   NAVBAR SCROLL EFFECT
===================================================== */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections = document.querySelectorAll("section[id]");

function updateActiveNav() {

    const scrollPosition = window.scrollY + 150;

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {

            navLinks.forEach(function (link) {

                link.classList.remove("active");

            });

            const activeLink =
                document.querySelector(
                    '.nav-link[href="#' + sectionId + '"]'
                );

            if (activeLink) {

                activeLink.classList.add("active");

            }

        }

    });

}

window.addEventListener("scroll", updateActiveNav);


/* =====================================================
   BACK TO TOP
===================================================== */

const backToTop =
    document.getElementById("backToTop");

window.addEventListener("scroll", function () {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements = document.querySelectorAll(
    ".bike-card, .service-card, .contact-card, .about-content, .about-visual, .cta-box"
);

revealElements.forEach(function (element) {

    element.classList.add("reveal");

});


const revealObserver = new IntersectionObserver(
    function (entries, observer) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(function (element) {

    revealObserver.observe(element);

});


/* =====================================================
   CURRENT YEAR
===================================================== */

document.getElementById("year").textContent =
    new Date().getFullYear();
    /* =====================================================
   PREVENT MENU SCROLL LOCK ISSUES
===================================================== */

window.addEventListener("resize", function () {

    if (window.innerWidth > 800) {

        menuToggle.classList.remove("open");

        navMenu.classList.remove("open");

    }

});
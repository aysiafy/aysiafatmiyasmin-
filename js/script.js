// ========================================
// CURRENT YEAR
// ========================================

const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


// ========================================
// NAVBAR BACKGROUND ON SCROLL
// ========================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {
        navbar.classList.add("navbar-scrolled");
    } else {
        navbar.classList.remove("navbar-scrolled");
    }

});


// ========================================
// CLOSE MOBILE NAVBAR
// ========================================

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        const navbarCollapse =
            document.querySelector(".navbar-collapse");

        if (navbarCollapse.classList.contains("show")) {

            const bsCollapse =
                new bootstrap.Collapse(navbarCollapse);

            bsCollapse.hide();

        }

    });

});


// ========================================
// REVEAL ANIMATION
// ========================================

const revealElements =
    document.querySelectorAll(
        ".skill-card, .project-card, .experience-item"
    );

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach(function (element) {

    element.classList.add("reveal");

    observer.observe(element);

});
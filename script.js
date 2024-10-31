document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const section = document.querySelector(event.target.getAttribute("href"));
            window.scrollTo({
                top: section.offsetTop,
                behavior: "smooth"
            });
        });
    });
});

    function redirectToPage() {
        window.location.href = "./oq.html";
    }

    function redirectToPage2() {
        window.location.href = "./beneficios.html";
    }

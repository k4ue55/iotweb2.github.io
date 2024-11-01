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

    function redirectToPage3() {
        window.location.href = "./app.html"
    }

    function redirectToPage4() {
        window.location.href = "./cidade.inteligente.html"
    }

    function redirectToPage5() {
        window.location.href = "./in4.0.html"
    }

    function redirectToPage6() {
        window.location.href = "./saudecon.html"
    }

    function redirectToPage7() {
        window.location.href = "./susten.html"
    }

    function redirectToPage8() {
        window.location.href = "./tec.html"
    }
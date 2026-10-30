// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(function (link) {
    link.addEventListener('click', function (event) {
        const target = document.querySelector(link.getAttribute('href'));

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
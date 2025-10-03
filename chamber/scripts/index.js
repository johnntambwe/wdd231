// Toggle mobile menu
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (menuToggle) {
        menuToggle.addEventListener('click', function () {
            navMenu.classList.toggle('show');
        });
    }

    // Set last modified date
    const lastModifiedElement = document.getElementById('last-modified');
    if (lastModifiedElement) {
        const lastModified = new Date(document.lastModified);
        lastModifiedElement.textContent += lastModified.toLocaleString();
    }

    // Add current year to copyright
    const copyrightElements = document.querySelectorAll('footer p');
    copyrightElements.forEach(element => {
        if (element.textContent.includes('20xx')) {
            element.textContent = element.textContent.replace('20xx', new Date().getFullYear());
        }
    });

    // Simple weather data update (in a real app, this would come from an API)
    function updateWeather() {
        // This is a placeholder for actual weather API integration
        console.log('Weather data would be updated here');
    }

    // Call updateWeather on page load
    updateWeather();
});
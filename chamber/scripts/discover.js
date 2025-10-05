// Load places data and generate cards
async function loadPlaces() {
    try {
        const response = await fetch('data/places.json');
        const data = await response.json();
        displayPlaces(data.places);
    } catch (error) {
        console.error('Error loading places data:', error);
    }
}

function displayPlaces(places) {
    const gallery = document.getElementById('gallery');

    places.forEach((place, index) => {
        const card = document.createElement('article');
        card.className = 'card';
        card.style.gridArea = `card${index + 1}`;

        card.innerHTML = `
            <h2>${place.name}</h2>
            <figure>
                <img src="${place.image}" alt="${place.name}" loading="lazy">
            </figure>
            <address>${place.address}</address>
            <p>${place.description}</p>
            <button onclick="learnMore(${place.id})">Learn More</button>
        `;

        gallery.appendChild(card);
    });
}

function learnMore(placeId) {
    alert(`More information about place #${placeId} would appear here.`);
}

// Visitor message functionality
function displayVisitorMessage() {
    const visitorMessage = document.getElementById('visitor-message');
    const lastVisit = localStorage.getItem('lastVisit');
    const currentVisit = Date.now();

    if (!lastVisit) {
        visitorMessage.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const lastVisitDate = parseInt(lastVisit);
        const daysBetween = Math.floor((currentVisit - lastVisitDate) / (1000 * 60 * 60 * 24));

        if (daysBetween < 1) {
            visitorMessage.textContent = "Back so soon! Awesome!";
        } else {
            const dayText = daysBetween === 1 ? "day" : "days";
            visitorMessage.textContent = `You last visited ${daysBetween} ${dayText} ago.`;
        }
    }

    localStorage.setItem('lastVisit', currentVisit.toString());
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    loadPlaces();
    displayVisitorMessage();
});
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


//Spotlights



async function loadMembers() {
    try {
        const response = await fetch('./data/members.json');
        const members = await response.json();
        displayMembers(members);
    } catch (error) {
        console.error('Error loading members:', error);
    }
}

function displayMembers(members) {

    const spotlightCard = document.querySelector(".business-spotlight-card");

    members.forEach(member => {
        const businessCard = document.createElement('div');
        businessCard.className = 'business';

        const membershipLevels = {
            1: 'Member',
            2: 'Silver',
            3: 'Gold'
        };

        if (membershipLevels[member.membershipLevel].toLowerCase() === 'gold' || membershipLevels[member.membershipLevel].toLowerCase() === 'silver') {
            businessCard.innerHTML = `
            <img src="${member.image}" alt="${member.name}" class="member-logo">
            <h3>${member.name}</h3>
            <p class="description">${member.description}</p>
            <p><strong>Address:</strong>${member.address}</p>
            <p><strong>PHONE:</strong> ${member.phone}</p>
            <p><strong>URL:</strong><a href="${member.website}" target="_blank">Visit Website</a></p>
            <span class="membership-level ${membershipLevels[member.membershipLevel].toLowerCase()}">
                 ${membershipLevels[member.membershipLevel]}
            </span>

        `;
            spotlightCard.appendChild(businessCard);
        }

    });
}

// Weather Section

const currentTemp = document.querySelector('.temp');
const weatherIcon = document.querySelector('#weather-icon');
const condition = document.querySelector('.condition');
const details = document.querySelector('.details');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-4.35&lon=15.34&appid=af071b1f0f87399a17e3647149af13a2&units=metric';

async function weatherFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            // console.table(data);
            displayweather(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }

}

function displayweather(data) {

    currentTemp.innerHTML = `${data.main.temp} &deg;C`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let description = data.weather[0].description;
    condition.textContent = `${description}`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', description);
    details.innerHTML = `
        <p>High: ${data.main.temp_max} &deg;C</p>
        <p>Low: ${data.main.temp_min} &deg;C</p>
        <p>Humidity: ${data.main.humidity} %</p>
        <p>Wind Speed: ${data.wind.speed} (m/s)</p>
        <p>Location: <strong>${data.name}</strong></p>
    `;

}


//Call of Functions

weatherFetch();


loadMembers();
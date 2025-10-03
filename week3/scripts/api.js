const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&appid=af071b1f0f87399a17e3647149af13a2&units=metric';

// async function apiFetch() {
//     try {
//         const response = await fetch(url);
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error('Error loading members:', error);
//     }
// }


async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            // console.table(data);
            displayapi(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }

}

function displayapi(data) {
    currentTemp.innerHTML = `${data.main.temp} &deg;C`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    // const iconsrc2 = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}



apiFetch();



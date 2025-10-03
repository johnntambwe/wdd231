
// scripts/members.js

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
    const container = document.getElementById('members-container');

    members.forEach(member => {
        const section = document.createElement('section');
        const memberCard = document.createElement('div');
        memberCard.className = 'member-card';

        const membershipLevels = {
            1: 'Member',
            2: 'Silver',
            3: 'Gold'
        };

        memberCard.innerHTML = `
            <img src="${member.image}" alt="${member.name}" class="member-logo">
            <h3>${member.name}</h3>
            <p class="address">${member.address}</p>
            <p class="phone">${member.phone}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
            <span class="membership-level ${membershipLevels[member.membershipLevel].toLowerCase()}">
                ${membershipLevels[member.membershipLevel]}
            </span>
            <p class="description">${member.description}</p>
        `;
        section.appendChild(memberCard);
        container.appendChild(section);
        // container.appendChild(memberCard);
    });
}

// Load members when the page loads
document.addEventListener('DOMContentLoaded', loadMembers);

//Grid bouttons

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");



gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", showList);

function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
}
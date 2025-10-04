
const urlParams = new URLSearchParams(window.location.search);

document.getElementById('first-name').textContent = `First Name: ${urlParams.get('first')}`;
document.getElementById('last-name').textContent = `Last Name: ${urlParams.get('last')}`;
document.getElementById('email').textContent = `Email: ${urlParams.get('email')}`;
document.getElementById('mobile-number').textContent = `Cell Phone: ${urlParams.get('phone')}`;
document.getElementById('business-name').textContent = `Business Name: ${urlParams.get('organization')}`;
document.getElementById('business-title').textContent = `Business Position: ${urlParams.get('organization-title')}`;
document.getElementById('membership').textContent = `Membership Level: ${urlParams.get('membership-level')}`;
document.getElementById('description').textContent = `Business Description: ${urlParams.get('organization-description')}`;



document.getElementById('timestamp').textContent = `Timestamp: ${urlParams.get('timestamp')}`;

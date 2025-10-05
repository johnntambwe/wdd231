
const urlParams = new URLSearchParams(window.location.search);

document.getElementById('name').textContent = `Name of the Reviewer: ${urlParams.get('name')}`;
document.getElementById('subject').textContent = `Name of the Product Reviewed: ${urlParams.get('subject')}`;
document.getElementById('rating').textContent = `Reviewer Rating: ${urlParams.get('rating')}`;
document.getElementById('writtenreview').textContent = `Reviewer Comment: ${urlParams.get('writtenreview')}`;
document.getElementById('completeDate').textContent = `Completion Date: ${urlParams.get('completeDate')}`;


document.getElementById('timestamp').textContent = `Timestamp: ${urlParams.get('timestamp')}`;

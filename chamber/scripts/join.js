document.addEventListener('DOMContentLoaded', () => {
    const timestampField = document.getElementById('timestamp');
    const currentTime = new Date().toISOString();
    timestampField.value = currentTime;

    const modalLinks = document.querySelectorAll('[data-modal]');
    const modals = document.querySelectorAll('.modal');
    const closeModalButtons = document.querySelectorAll('.close-modal');

    modalLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const modalId = link.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            modal.classList.add('show');
        });
    });

    closeModalButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const modal = button.parentNode;
            modal.classList.remove('show');
        });
    });

    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.classList.remove('show');
        }
    });

    const form = document.getElementById('membership-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        // Submit the form data to the server or handle it here
        window.location.href = 'thankyou.html';
    });
});
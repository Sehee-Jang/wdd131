document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const messageDisplay = document.getElementById('messageDisplay');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const fname = document.getElementById('fname').value;
        const lname = document.getElementById('lname').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Store the form data in an object
        const contactInfo = { fname, lname, email, message };

        // Save the form data to localStorage
        saveToLocalStorage(contactInfo);

        // Display a thank you message
        displayMessage(contactInfo);

        // Show the message display element
        messageDisplay.style.display = 'block';

        // Reset the form
        form.reset();
    });
});

// Function to save contact info to localStorage
function saveToLocalStorage(contactInfo) {
    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    contacts.push(contactInfo);
    localStorage.setItem('contacts', JSON.stringify(contacts));
}

// Function to display a thank you message
function displayMessage(contactInfo) {
    messageDisplay.innerHTML = `
        <h2>Thank you for contacting us, ${contactInfo.fname}, ${contactInfo.lname}!</h2>
        <p>We have received your message and will get back to you at ${contactInfo.email}.</p>
        <p>Your message: ${contactInfo.message}</p>
    `;
}

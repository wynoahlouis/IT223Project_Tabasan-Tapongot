document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact');
    const popup = document.getElementById('popup');
    const popupMessage = document.querySelector('.popupMessage');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const nameInput = document.getElementById('name');
        const customerName = nameInput.value;

        popupMessage.innerHTML = `Thank you, ${customerName}, for reaching out to us!
        <br>
        <br>
        We deeply appreciate your contact with us! Your feedback is invaluable. Rest assured, we will address your concerns with utmost care and continuously enhance our services for your satisfaction.
        <br>
        <br>
        Warm regards,
        Serenitea❤`;
        
        // Show the popup by removing the 'hidden' class
        popup.classList.remove('hidden');

        setTimeout(function() {
            // Hide the popup by adding the 'hidden' class
            popup.classList.add('hidden');
            contactForm.reset();
        }, 3000);
    });
});

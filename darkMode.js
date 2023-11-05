document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    var body = document.body;
    body.classList.toggle('dark-mode'); // Toggle the dark mode class

    // Check the class of the body and change the text accordingly
    if (body.classList.contains('dark-mode')) {
        this.textContent = 'lite mode'; // If dark mode is on, set text to Light Mode
    } else {
        this.textContent = 'dark mode'; // If dark mode is off, set text to Dark Mode
    }
});

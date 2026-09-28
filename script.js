document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    document.getElementById("message").innerText =
        "Thank you! Your message has been received.";

    this.reset();
});
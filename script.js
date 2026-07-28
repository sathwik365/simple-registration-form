const form = document.getElementById("registrationForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const selectedEvent = document.getElementById("event").value;

    message.textContent =
        `Thank you, ${name}! You have successfully registered for the ${selectedEvent}.`;

    console.log("Registration Details:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Event:", selectedEvent);

    form.reset();
});
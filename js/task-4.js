"use strict";

const form = document.querySelector(".login-form");

function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();
    if (!(email && password)) alert('All form fields must be filled in');

    const output =  {
        email,
        password
    };
    console.log(output);
    form.reset();
}

form.addEventListener("submit", handleSubmit);

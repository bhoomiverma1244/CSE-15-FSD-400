const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword =
        document.getElementById("confirmPassword").value;

    const message = document.getElementById("message");

    if (name === "" || email === "" || password === "") {

        message.innerText = "Please fill all fields";
        message.style.color = "red";

    } 
    else if (password !== confirmPassword) {

        message.innerText = "Password does not match";
        message.style.color = "red";

    } 
    else {

        message.innerText = "Sign Up Successful!";
        message.style.color = "lightgreen";

        signupForm.reset();

    }

});
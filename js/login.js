function validateLogin(event) {
    event.preventDefault(); // Prevent form submission

        const numberInput =
    document.getElementById("number").value;
        const emailInput =  
    document.getElementById("email").value;
        const passwordInput =
    document.getElementById("password").value;
        const errorMessageInput =
    document.getElementById("error-message");

    if (numberInput === correctnumber, emailInput === correctemail, passwordInput === correctpassword) {
            alert("login successful!");

    // Redirect to sidebar page after successful login
    window.location.href = "sidebar.html"; 
} else {
    errorMessage.textcontext = "invalid input";
}
}
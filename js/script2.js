document.getElementById("SignupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get input values
    let username = document.getElementById("username").value.trim();
    let firstname = document.getElementById("firstname").value.trim();
    let lastname = document.getElementById("lastname").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("number").value.trim();
    let password = document.getElementById("password").value.trim();
    let errorMessage = document.getElementById("error-message");

    // Validate inputs (ensure no empty fields)
    if (username === "" || firstname === "" || lastname === "" || email === "" || number === "" || password === "") {
        errorMessage.textContent = "All fields are required!";
        return;
    }

    // Store user data in localStorage (simulating signup)
    let userData = {
        username: username,
        firstname: firstname,
        lastname: lastname,
        phone: number,
        email: email,
        password: password
    };
    localStorage.setItem("user", JSON.stringify(userData));

    // Redirect to login page after successful signup
    alert("Signup successful! Redirecting to login page...");
    window.location.href = "login.html";

    
});

document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get input values
    let phone = document.getElementById("number").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let errorMessage = document.getElementById("error-message");

    // Validate inputs (ensure no empty fields)
    if (number === "" || email === "" || password === "") {
        errorMessage.textContent = "All fields are required!";
        return;
    }

    // Store user data in localStorage (simulating login)
      let userData = { 
        phone: number,
        email: email,
        password: password
    };
    localStorage.setItem("user", JSON.stringify(userData));

    // Redirect to sidebar page after successful login
    alert("login successful! Page loading...");
    window.location.href = "sidebar.html";

    
});
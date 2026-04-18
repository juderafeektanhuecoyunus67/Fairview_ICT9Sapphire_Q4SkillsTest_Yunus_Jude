let attempt_counter = 0;

function handleLogin() {
    const username = document.getElementById('username').value;
    const pwd = document.getElementById('password').value;
    const errorDisplay = document.getElementById('errorMessage');
    const loginBtn = document.getElementById('loginBtn');

    // Instruction logic from Prompt 2 (Renn Santos)
    do {
        // Validation: For testing, use admin / 1234
        if (username === "Jude" && pwd === "2026") {
            alert("Success! Welcome to Nut School.");
            attempt_counter = 0; 
            window.location.href = "notebooks.html";
            break; 
        } else {
            attempt_counter++;
            errorDisplay.innerHTML = "Incorrect username/password. Attempt " + attempt_counter + " of 3";
        }
    } while (false);

    if (attempt_counter >= 3) {
        alert("Account Locked.");
        loginBtn.disabled = true;
        errorDisplay.innerHTML = "Too many failed attempts. Please refresh the page to try again.";
    }
}

function logout() {
    let confirmLogout = confirm("Are you sure you wanna Logout?");
    if (confirmLogout) {
        window.location.href = "index.html";
    }
}
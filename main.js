/** * main.js - VN
 * Features: Blank field validation, Attempt Counter, and Logout logic
 */

// Initialize global attempt counter
let attempt_counter = 0;

function handleLogin() {
    // 1. Assigning values to variables
    const username = document.getElementById('username').value;
    const pwd = document.getElementById('password').value;
    const errorDisplay = document.getElementById('errorMessage');
    const loginBtn = document.getElementById('loginBtn');

    // --- NEW: BLANK FIELD VALIDATION ---
    // This checks if the user left the boxes empty before processing the login
    if (username.trim() === "" || pwd.trim() === "") {
        errorDisplay.innerHTML = "‼️ Please fill out all fields.";
        // Optionally use window.alert as required by rubric for "JavaScript Outputs"
        alert("❗Please fill out this field."); 
        return; // Stops the function here so it doesn't count as a "failed attempt"
    }

    // S2.. do-while loop (Iteration Statement)
    do {
        // Examples for existing account: user: Jude and password: 2026
        if (username === "Jude" && pwd === "2026") { 
            alert("✅ Successfully logged in!");
            attempt_counter = 0; 
            errorDisplay.innerHTML = ""; 
            window.location.href = "notebooks.html"; 
            break; 
        } else {
            // Logic for incorrect credentials
            attempt_counter++;
            errorDisplay.innerHTML = 
                "❌ Incorrect username or password. Attempt " + attempt_counter + " of 10.";
        }
    } while (false); 

    // S3.. Conditional statement to lock the button after 10 failed attempts
    if (attempt_counter >= 10) {
        alert("🔒 Account Locked.");
        loginBtn.disabled = true; 
        errorDisplay.innerHTML = "⚠️ Too many failed attempts. Please refresh the page and try again.";
    }
}

/**
 * Logout function with confirmation (Functions & Events)
 */
function logout() {
    let confirmLogout = confirm("Are you sure you wanna Logout?");
    if (confirmLogout) {
        window.location.href = "index.html"; 
    }
}

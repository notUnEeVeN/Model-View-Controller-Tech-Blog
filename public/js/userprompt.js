// Checking if the user is logged in through a global variable
var loggedIn = loggedIn || false; 

const SHOW_LOGIN_PROMPT_AFTER = 2 * 60 * 1000; // 2 minutes

function isUserLoggedIn() {
    return loggedIn;
}

function showLoginPrompt() {
    const modal = document.getElementById('loginPromptModal');
    modal.style.display = 'block';
}

function closeLoginPrompt() {
    const modal = document.getElementById('loginPromptModal');
    modal.style.display = 'none';
}

// When the page loads, start the timer if the user isn't logged in
if (!isUserLoggedIn()) {
    setTimeout(showLoginPrompt, SHOW_LOGIN_PROMPT_AFTER);
}

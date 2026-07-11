// ================================
// AgentShield - Landing Page
// ================================

document.addEventListener("DOMContentLoaded", () => {

    const launchBtn = document.querySelector(".launch-btn");
    const statusBar = document.querySelector(".status-bar span");

    // Button hover text
    launchBtn.addEventListener("mouseenter", () => {
        launchBtn.textContent = "🔐 Initializing...";
    });

    launchBtn.addEventListener("mouseleave", () => {
        launchBtn.textContent = "🚀 Launch AgentShield";
    });

    // Loading effect when button is clicked
    launchBtn.addEventListener("click", function () {

        statusBar.innerHTML = "🟡 Connecting to AgentShield Network...";

        launchBtn.innerHTML = "⏳ Loading...";

        launchBtn.disabled = true;

        // The form will continue submitting to Flask
        // after a short delay.
        setTimeout(() => {
            launchBtn.form.submit();
        }, 1200);

    });

});
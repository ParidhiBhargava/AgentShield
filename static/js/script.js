// ==========================================
// AgentShield - Landing Page Script
// Windows XP Style
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    const launchBtn = document.querySelector(".launch-btn");
    const windowBox = document.querySelector(".window");

    // ===========================
    // Launch Button Animation
    // ===========================

    if (launchBtn) {

        launchBtn.addEventListener("click", function () {

            launchBtn.innerHTML = "⏳ Initializing AgentShield...";

            launchBtn.disabled = true;

            launchBtn.style.cursor = "wait";

            windowBox.style.opacity = "0.95";

            // Form submits automatically after animation
            // Flask will redirect to /dashboard

        });

    }

    // ===========================
    // XP Window Buttons
    // ===========================

    const minimize = document.querySelector(".minimize");
    const maximize = document.querySelector(".maximize");
    const closeBtn = document.querySelector(".close");

    if (minimize) {

        minimize.addEventListener("click", () => {

            alert("Minimize is disabled in the web version.");

        });

    }

    if (maximize) {

        maximize.addEventListener("click", () => {

            windowBox.classList.toggle("maximize-window");

        });

    }

    if (closeBtn) {

        closeBtn.addEventListener("click", () => {

            if (confirm("Close AgentShield?")) {

                window.location.href = "/";

            }

        });

    }

});

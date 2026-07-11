// ========================================
// AGENTSHIELD - PASSPORT.JS
// ========================================

// Register Button Animation

const registerBtn = document.querySelector(".register-btn");

if (registerBtn) {

    registerBtn.addEventListener("mouseenter", () => {

        registerBtn.style.transform = "translateY(-3px) scale(1.03)";

    });

    registerBtn.addEventListener("mouseleave", () => {

        registerBtn.style.transform = "translateY(0) scale(1)";

    });

}

// Input Focus Animation

const inputs = document.querySelectorAll("input");

inputs.forEach(input => {

    input.addEventListener("focus", () => {

        input.style.boxShadow = "0 0 12px rgba(255,105,180,0.35)";

    });

    input.addEventListener("blur", () => {

        input.style.boxShadow = "none";

    });

});

// Simple Empty Field Validation

const form = document.querySelector("form");

form.addEventListener("submit", function(event){

    const agent = document.querySelector('input[name="agent_name"]').value.trim();
    const owner = document.querySelector('input[name="owner_name"]').value.trim();
    const role = document.querySelector('input[name="role"]').value.trim();

    if(agent === "" || owner === "" || role === ""){

        event.preventDefault();

        alert("Please fill in all the fields before registering the agent.");

    }

});
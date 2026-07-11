// ========================================
// AGENTSHIELD - SUCCESS.JS
// ========================================

// Page Fade In

window.addEventListener("load", () => {

    document.querySelector(".window").style.opacity = "1";

});

// Floating Robot Animation

const robot = document.querySelector(".robot");

if(robot){

    let position = 0;
    let direction = 1;

    setInterval(() => {

        position += direction;

        if(position >= 8 || position <= 0){

            direction *= -1;

        }

        robot.style.transform = `translateY(-${position}px)`;

    },80);

}

// Button Hover Effect

const buttons = document.querySelectorAll(".button-group button");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-3px) scale(1.03)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0) scale(1)";

    });

});

// Back to Dashboard Button

const dashboardBtn = document.querySelector(".dashboard-btn");

if(dashboardBtn){

    dashboardBtn.addEventListener("click", () => {

        window.location.href = "/dashboard";

    });

}

// Register Another Agent Button

const registerBtn = document.querySelector(".register-btn");

if(registerBtn){

    registerBtn.addEventListener("click", () => {

        window.location.href = "/passport";

    });

}
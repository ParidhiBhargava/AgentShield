// ========================================
// AGENTSHIELD - LOGS.JS
// ========================================

// Page Load Animation

window.addEventListener("load", () => {

    const windowBox = document.querySelector(".window");

    if(windowBox){

        windowBox.style.opacity = "1";

    }

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

// Log Card Hover Animation

const logItems = document.querySelectorAll(".log-item");

logItems.forEach(item => {

    item.addEventListener("mouseenter", () => {

        item.style.transform = "translateX(8px)";

    });

    item.addEventListener("mouseleave", () => {

        item.style.transform = "translateX(0)";

    });

});

// Dashboard Button

const dashboardBtn = document.querySelector(".dashboard-btn");

if(dashboardBtn){

    dashboardBtn.addEventListener("click", () => {

        window.location.href = "/dashboard";

    });

}
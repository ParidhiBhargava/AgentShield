// ========================================
// AGENTSHIELD - PERMISSIONS.JS
// ========================================

// Page Animation

window.addEventListener("load", () => {

    document.querySelector(".window").style.opacity = "1";

});

// Floating Robot

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

// Table Row Hover

const rows = document.querySelectorAll("tbody tr");

rows.forEach(row => {

    row.addEventListener("mouseenter", () => {

        row.style.transform = "scale(1.01)";

    });

    row.addEventListener("mouseleave", () => {

        row.style.transform = "scale(1)";

    });

});

// Back to Dashboard Button

const dashboardBtn = document.querySelector(".dashboard-btn");

if(dashboardBtn){

    dashboardBtn.addEventListener("click", () => {

        window.location.href = "/dashboard";

    });

}
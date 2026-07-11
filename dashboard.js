// ==========================================
// AgentShield Dashboard
// dashboard.js
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    // ===============================
    // Window Buttons
    // ===============================

    const minimizeBtn = document.querySelector(".window-buttons button:nth-child(1)");
    const maximizeBtn = document.querySelector(".window-buttons button:nth-child(2)");
    const closeBtn = document.querySelector(".window-buttons .close");

    const windowBox = document.querySelector(".window");

    // Minimize

    minimizeBtn.addEventListener("click", () => {

        windowBox.style.transform = "scale(0.97)";
        windowBox.style.opacity = "0.8";

        setTimeout(() => {

            windowBox.style.transform = "scale(1)";
            windowBox.style.opacity = "1";

        }, 220);

    });

    // Maximize

    let maximized = false;

    maximizeBtn.addEventListener("click", () => {

        if(!maximized){

            windowBox.style.width = "96vw";
            windowBox.style.minHeight = "95vh";

            maximized = true;

        }

        else{

            windowBox.style.width = "920px";
            windowBox.style.minHeight = "720px";

            maximized = false;

        }

    });

    // Close

    closeBtn.addEventListener("click", () => {

        const leave = confirm("Return to Landing Page?");

        if(leave){

            window.location.href="/";

        }

    });


    // ===============================
    // Dashboard Buttons
    // ===============================

    const buttons = document.querySelectorAll(".dashboard-btn");

    buttons.forEach((button,index)=>{

        button.addEventListener("click",()=>{

            button.style.transform="scale(.97)";

            setTimeout(()=>{

                button.style.transform="";

            },120);

            switch(index){

                case 0:

                    // Register Agent

                    window.location.href="/passport";

                    break;

                case 1:

                    // View Permissions

                    window.location.href="/verify";

                    break;

                case 2:

                    // Activity Logs

                    window.location.href="/logs";

                    break;

            }

        });

    });

});
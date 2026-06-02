document.addEventListener("DOMContentLoaded", () => {

    updateDashboard();

    const startBtn = document.getElementById("startBtn");

    if(startBtn){
        startBtn.addEventListener("click", () => {
            window.location.href = "roadmap.html";
        });
    }

});


function updateDashboard(){

    let totalConcepts = Object.keys(concepts).length;

    let completedConcepts =
        JSON.parse(localStorage.getItem("completedConcepts")) || [];

    let completed = completedConcepts.length;

    let remaining = totalConcepts - completed;

    let progress =
        totalConcepts === 0
        ? 0
        : Math.round((completed / totalConcepts) * 100);

    const totalEl = document.getElementById("totalConcepts");
    const completedEl = document.getElementById("completedConcepts");
    const remainingEl = document.getElementById("remainingConcepts");
    const progressEl = document.getElementById("progressPercent");

    if(totalEl) totalEl.innerText = totalConcepts;
    if(completedEl) completedEl.innerText = completed;
    if(remainingEl) remainingEl.innerText = remaining;
    if(progressEl) progressEl.innerText = progress + "%";
}
document.addEventListener(
    "DOMContentLoaded",
    () =>
    {
        const button =
        document.getElementById(
            "themeBtn"
        );

        if(button)
        {
            button.addEventListener(
                "click",
                toggleTheme
            );
        }
    }
);

function toggleTheme()
{
    document.body.classList.toggle(
        "light-theme"
    );

    localStorage.setItem(
        "theme",
        document.body.classList.contains(
            "light-theme"
        )
    );
}
document.addEventListener(
    "DOMContentLoaded",
    function ()
    {
        const user =
        localStorage.getItem("user");

        const display =
        document.getElementById("userDisplay");

        if(display && user)
        {
            display.innerText =
            "👤 " + user;
        }
    }
);
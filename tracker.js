if(!localStorage.getItem("user"))
{
    window.location.href = "login.html";
}
document.addEventListener(
    "DOMContentLoaded",
    initializeTracker
);


// ============================
// Initialize
// ============================
function initializeTracker()
{
    renderConceptList();

    updateDashboard();

    updateCategoryStats();

    generateInsights();

    generateAnalytics();

    renderTimeline();

    generateBadges();

    loadGoal();
    renderQuickStats();

    document
    .getElementById(
        "saveGoalBtn"
    )
    .addEventListener(
        "click",
        saveGoal
    );

    document
    .getElementById(
        "reportBtn"
    )
    .addEventListener(
        "click",
        generateReport
    );
    document
    .getElementById(
        "resetBtn"
    )
    .addEventListener(
        "click",
        resetProgress
    );
    document
.getElementById(
        "certificateBtn"
    )
    .addEventListener(
        "click",
        generateCertificate
    );
        document
    .getElementById(
        "gapBtn"
    )
    .addEventListener(
        "click",
        analyzeKnowledgeGaps
    );
}
// ============================
// Render Concept List
// ============================

function renderConceptList()
{
    const container =
    document.getElementById(
        "conceptList"
    );

    container.innerHTML = "";

    Object.keys(
        concepts
    ).forEach(
        concept =>
        {
            const row =
            document.createElement(
                "div"
            );

            row.className =
            "concept-item";

            const checkbox =
            document.createElement(
                "input"
            );

            checkbox.type =
            "checkbox";

            checkbox.checked =
            isCompleted(
                concept
            );

            checkbox.addEventListener(
                "change",
                () =>
                {
                    toggleConcept(
                        concept
                    );

                    updateDashboard();
                }
            );

            const label =
            document.createElement(
                "span"
            );

            label.textContent =
            concept;

            row.appendChild(
                checkbox
            );

            row.appendChild(
                label
            );

            container.appendChild(
                row
            );
        }
    );
}


// ============================
// Dashboard
// ============================

function updateDashboard()
{
    const total =
    Object.keys(
        concepts
    ).length;

    const completed =
    getCompletedConcepts()
    .length;

    const remaining =
    total - completed;

    const percentage =
    total === 0
    ? 0
    : Math.round(
        (
            completed /
            total
        ) * 100
    );

    document.getElementById(
        "totalConcepts"
    ).textContent =
    total;

    document.getElementById(
        "completedConcepts"
    ).textContent =
    completed;

    document.getElementById(
        "remainingConcepts"
    ).textContent =
    remaining;

    document.getElementById(
        "progressPercentage"
    ).textContent =
    percentage + "%";

    const progressFill =
    document.getElementById(
        "progressFill"
    );

    progressFill.style.width =
    percentage + "%";
}


// ============================
// Category Statistics
// ============================

function updateCategoryStats()
{
    let dsa = 0;
    let system = 0;
    let web = 0;

    Object.keys(
        concepts
    ).forEach(
        concept =>
        {
            const lower =
            concept.toLowerCase();

            if(
                lower.includes(
                    "array"
                ) ||
                lower.includes(
                    "tree"
                ) ||
                lower.includes(
                    "graph"
                ) ||
                lower.includes(
                    "stack"
                ) ||
                lower.includes(
                    "queue"
                ) ||
                lower.includes(
                    "dp"
                )
            )
            {
                dsa++;
            }

            else if(
                lower.includes(
                    "system"
                ) ||
                lower.includes(
                    "database"
                ) ||
                lower.includes(
                    "sql"
                )
            )
            {
                system++;
            }

            else if(
                lower.includes(
                    "html"
                ) ||
                lower.includes(
                    "css"
                ) ||
                lower.includes(
                    "javascript"
                )
            )
            {
                web++;
            }
        }
    );

    document.getElementById(
        "dsaCount"
    ).textContent =
    dsa;

    document.getElementById(
        "systemCount"
    ).textContent =
    system;

    document.getElementById(
        "webCount"
    ).textContent =
    web;
}


// ============================
// Local Storage Helpers
// ============================

function getCompletedConcepts()
{
    return JSON.parse(
        localStorage.getItem(
            "completedConcepts"
        )
    ) || [];
}


function isCompleted(
    concept
)
{
    return getCompletedConcepts()
    .includes(
        concept
    );
}


function toggleConcept(
    concept
)
{
    let completed =
    getCompletedConcepts();

    if(
        completed.includes(
            concept
        )
    )
    {
        completed =
        completed.filter(
            item =>
            item !== concept
        );
    }
    else
    {
        completed.push(
            concept
        );
    }

    localStorage.setItem(
        "completedConcepts",
        JSON.stringify(
            completed
        )
    );
    saveTimeline(concept);

}
function generateInsights()
{
    const completed =
    JSON.parse(
        localStorage.getItem(
            "completedConcepts"
        )
    ) || [];

    const totalConcepts =
    Object.keys(
        concepts
    ).length;

    const remaining =
    totalConcepts -
    completed.length;

    let level =
    "Beginner";

    if(
        completed.length > 15
    )
    {
        level =
        "Intermediate";
    }

    if(
        completed.length > 35
    )
    {
        level =
        "Advanced";
    }

    let recommendation =
    "Programming Fundamentals";

    for(
        const concept
        of Object.keys(
            concepts
        )
    )
    {
        if(
            !completed.includes(
                concept
            )
        )
        {
            recommendation =
            concept;

            break;
        }
    }

    document
    .getElementById(
        "learningInsights"
    )
    .innerHTML =
    `
    <div class="roadmap-card">

        <p>
        Completed Concepts:
        ${completed.length}
        </p>

        <p>
        Remaining Concepts:
        ${remaining}
        </p>

        <p>
        Current Level:
        ${level}
        </p>

        <p>
        Recommended Next Concept:
        ${recommendation}
        </p>

    </div>
    `;
}
function generateAnalytics()
{
    const completed =
    JSON.parse(
        localStorage.getItem(
            "completedConcepts"
        )
    ) || [];

    const total =
    Object.keys(
        concepts
    ).length;

    const percentage =
    Math.round(
        (completed.length / total) * 100
    );

    let status =
    "Beginner";

    if(
        percentage >= 40
    )
    {
        status =
        "Intermediate";
    }

    if(
        percentage >= 75
    )
    {
        status =
        "Advanced";
    }

    document
    .getElementById(
        "analyticsContainer"
    )
    .innerHTML =
    `
    <div class="roadmap-card">

        <h3>Profile Summary</h3>

        <p>
        Completion:
        ${percentage}%
        </p>

        <p>
        Concepts Learned:
        ${completed.length}
        </p>

        <p>
        Skill Level:
        ${status}
        </p>

    </div>
    `;
}
function saveTimeline(concept)
{
    const timeline =
    JSON.parse(
        localStorage.getItem(
            "timeline"
        )
    ) || [];

    const exists =
    timeline.some(
        item =>
        item.concept === concept
    );

    if(exists)
    {
        return;
    }

    timeline.push({
        concept: concept,
        date:
        new Date()
        .toLocaleDateString()
    });

    localStorage.setItem(
        "timeline",
        JSON.stringify(
            timeline
        )
    );
}
function renderTimeline()
{
    const timeline =
    JSON.parse(
        localStorage.getItem(
            "timeline"
        )
    ) || [];

    let html = "";

    timeline.forEach(
        item =>
        {
            html +=
            `
            <div class="roadmap-card">

                <strong>
                ${item.concept}
                </strong>

                <br>

                Completed:
                ${item.date}

            </div>
            `;
        }
    );

    document
    .getElementById(
        "timelineContainer"
    )
    .innerHTML =
    html;
}
function generateBadges()
{
    const completed =
    JSON.parse(
        localStorage.getItem(
            "completedConcepts"
        )
    ) || [];

    const badges = [];

    if(
        completed.length >= 1
    )
    {
        badges.push(
            "🏅 First Concept Completed"
        );
    }

    if(
        completed.length >= 5
    )
    {
        badges.push(
            "🥉 Beginner Learner"
        );
    }

    if(
        completed.length >= 10
    )
    {
        badges.push(
            "🥈 DSA Explorer"
        );
    }

    if(
        completed.length >= 20
    )
    {
        badges.push(
            "🥇 Advanced Learner"
        );
    }

    if(
        completed.includes(
            "Graph"
        )
    )
    {
        badges.push(
            "📊 Graph Expert"
        );
    }

    if(
        completed.includes(
            "Dynamic Programming"
        )
    )
    {
        badges.push(
            "🧠 DP Master"
        );
    }

    let html = "";

    badges.forEach(
        badge =>
        {
            html +=
            `
            <div class="badge-card">
                ${badge}
            </div>
            `;
        }
    );

    document
    .getElementById(
        "badgeContainer"
    )
    .innerHTML =
    html;
}
function saveGoal()
{
    const goal =
    document
    .getElementById(
        "goalInput"
    )
    .value;

    localStorage.setItem(
        "weeklyGoal",
        goal
    );

    loadGoal();
}

function loadGoal()
{
    const goal =
    parseInt(
        localStorage.getItem(
            "weeklyGoal"
        )
    ) || 0;

    const completed =
    JSON.parse(
        localStorage.getItem(
            "completedConcepts"
        )
    ) || [];

    let percentage = 0;

    if(goal > 0)
    {
        percentage =
        Math.min(
            100,
            Math.round(
                (completed.length / goal) * 100
            )
        );
    }

    document
    .getElementById(
        "goalProgress"
    )
    .innerHTML =
    `
    <div class="goal-bar">

        <div
            class="goal-fill"
            style="
                width:${percentage}%;
            "
        >
        </div>

    </div>

    <p>

        ${completed.length}
        /
        ${goal}
        Concepts Completed

    </p>
    `;
}
function generateReport()
{
    const completed =
    JSON.parse(
        localStorage.getItem(
            "completedConcepts"
        )
    ) || [];

    const goal =
    localStorage.getItem(
        "weeklyGoal"
    ) || 0;

    const total =
    Object.keys(
        concepts
    ).length;

    const percentage =
    Math.round(
        (
            completed.length /
            total
        ) * 100
    );

    let level =
    "Beginner";

    if(
        percentage >= 40
    )
    {
        level =
        "Intermediate";
    }

    if(
        percentage >= 75
    )
    {
        level =
        "Advanced";
    }

    let report =

`CONCEPT DEPENDENCY VISUALIZER

--------------------------------

Completed Concepts:
${completed.length}

Total Concepts:
${total}

Progress:
${percentage}%

Current Level:
${level}

Weekly Goal:
${goal}

Completed Topics:

${completed.join("\n")}

--------------------------------

Generated Successfully`;

    const blob =
    new Blob(
        [report],
        {
            type:
            "text/plain"
        }
    );

    const link =
    document.createElement(
        "a"
    );

    link.href =
    URL.createObjectURL(
        blob
    );

    link.download =
    "LearningReport.txt";

    link.click();
}
function renderQuickStats()
{
    const completed =
    JSON.parse(
        localStorage.getItem(
            "completedConcepts"
        )
    ) || [];

    const total =
    Object.keys(
        concepts
    ).length;

    document
    .getElementById(
        "quickStats"
    )
    .innerHTML =
    `
    <div class="roadmap-card">
        Total Concepts: ${total}
    </div>

    <div class="roadmap-card">
        Completed: ${completed.length}
    </div>

    <div class="roadmap-card">
        Remaining: ${total - completed.length}
    </div>
    `;
}
function resetProgress()
{
    if(
        confirm(
            "Reset all progress?"
        )
    )
    {
        localStorage.clear();

        location.reload();
    }
}
function generateCertificate()
{
    const completed =
    JSON.parse(localStorage.getItem("completedConcepts")) || [];

    const total =
    Object.keys(concepts).length;

    if(completed.length < total)
    {
        alert("Complete all concepts first.");
        return;
    }

    window.open("certificate.html", "_blank");
}
function analyzeKnowledgeGaps()
{
    const completed =
    JSON.parse(
        localStorage.getItem(
            "completedConcepts"
        )
    ) || [];

    let missing = [];

    Object.keys(
        concepts
    ).forEach(
        concept =>
        {
            if(
                !completed.includes(
                    concept
                )
            )
            {
                missing.push(
                    concept
                );
            }
        }
    );

    const output =
    document.getElementById(
        "gapOutput"
    );

    if(
        missing.length === 0
    )
    {
        output.innerHTML =
        `
        <h3>
        🎉 No Knowledge Gaps!
        </h3>
        `;
    }
    else
    {
        output.innerHTML =
        `
        <h3>
        Missing Concepts
        </h3>

        <p>
        ${missing.join(", ")}
        </p>
        `;
    }
}
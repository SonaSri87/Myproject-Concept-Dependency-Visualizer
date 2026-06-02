document.addEventListener(
    "DOMContentLoaded",
    () =>
    {
        document
        .getElementById(
            "studyPlanBtn"
        )
        .addEventListener(
            "click",
            generateStudyPlan
        );
        document
        .getElementById(
            "gapBtn"
        )
        .addEventListener(
            "click",
        analyzeKnowledgeGap
        );
        document
        .getElementById(
        "topologyBtn"
        )
        .addEventListener(
        "click",
        showLearningOrder
        );
        loadConcepts();

        document
        .getElementById(
            "generateBtn"
        )
        .addEventListener(
            "click",
            generateRoadmap
        );

        document
        .getElementById(
            "searchBtn"
        )
        .addEventListener(
            "click",
            searchConcept
        );

        document
        .getElementById(
            "downloadBtn"
        )
        .addEventListener(
            "click",
            downloadRoadmap
        );
    }
);


// ============================
// Load Concepts Into Dropdown
// ============================

function loadConcepts()
{
    const dropdown =
    document.getElementById(
        "targetConcept"
    );

    Object.keys(
        concepts
    ).forEach(
        concept =>
        {
            const option =
            document.createElement(
                "option"
            );

            option.value =
            concept;

            option.textContent =
            concept;

            dropdown.appendChild(
                option
            );
        }
    );
}


// ============================
// DFS Traversal
// ============================

function dfs(
    concept,
    visited,
    roadmap
)
{
    if(
        visited.has(
            concept
        )
    )
    {
        return;
    }

    visited.add(
        concept
    );

    const prerequisites =
    concepts[concept];

    prerequisites.forEach(
        prerequisite =>
        {
            dfs(
                prerequisite,
                visited,
                roadmap
            );
        }
    );

    roadmap.push(
        concept
    );
}


// ============================
// Generate Learning Path
// ============================

function generateRoadmap()
{
    const selectedConcept =
    document
    .getElementById(
        "targetConcept"
    )
    .value;
    localStorage.setItem(
        "selectedConcept",
        selectedConcept
    );
    const container =
    document
    .getElementById(
        "roadmapContainer"
    );

    if(
        selectedConcept === ""
    )
    {
        container.innerHTML =
        "Please select a concept.";

        return;
    }

    const visited =
    new Set();

    const roadmap = [];

    dfs(
        selectedConcept,
        visited,
        roadmap
    );

    let html = "";

    roadmap.forEach(
        (
            concept,
            index
        ) =>
        {
            html +=
            `
            <div class="roadmap-card">

                <strong>
                Step ${index + 1}
                </strong>

                <br>

                ${concept}

            </div>
            `;
        }
    );

    container.innerHTML =
    html;
    showConceptDetails(
    selectedConcept
    );
}


// ============================
// Search Concept
// ============================

function searchConcept()
{
    const keyword =
    document
    .getElementById(
        "searchInput"
    )
    .value
    .toLowerCase();

    const result =
    document
    .getElementById(
        "searchResult"
    );

    let matches = [];

    Object.keys(
        concepts
    ).forEach(
        concept =>
        {
            if(
                concept
                .toLowerCase()
                .includes(
                    keyword
                )
            )
            {
                matches.push(
                    concept
                );
            }
        }
    );

    if(
        matches.length === 0
    )
    {
        result.innerHTML =
        "No Concept Found";
    }
    else
    {
        result.innerHTML =
        matches.join(
            "<br>"
        );
    }
}


// ============================
// Download Roadmap
// ============================

function downloadRoadmap()
{
    const roadmap =
    document
    .getElementById(
        "roadmapContainer"
    )
    .innerText;

    if(
        roadmap.trim() === ""
    )
    {
        alert(
            "Generate a roadmap first."
        );

        return;
    }

    const blob =
    new Blob(
        [roadmap],
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
    "LearningRoadmap.txt";

    link.click();
}
function showLearningOrder()
{
    const visited =
    new Set();

    const order = [];

    function dfsTopo(
        concept
    )
    {
        if(
            visited.has(
                concept
            )
        )
        {
            return;
        }

        visited.add(
            concept
        );

        concepts[
            concept
        ].forEach(
            prerequisite =>
            {
                dfsTopo(
                    prerequisite
                );
            }
        );

        order.push(
            concept
        );
    }

    Object.keys(
        concepts
    ).forEach(
        concept =>
        {
            dfsTopo(
                concept
            );
        }
    );

    let html = "";

    order.forEach(
        (
            concept,
            index
        ) =>
        {
            html +=
            `
            <div class="roadmap-card">
                ${index + 1}.
                ${concept}
            </div>
            `;
        }
    );

    document
    .getElementById(
        "topologyOutput"
    )
    .innerHTML =
    html;
}
function analyzeKnowledgeGap()
{
    const selectedConcept =
    document
    .getElementById(
        "targetConcept"
    )
    .value;

    const completed =
    JSON.parse(
        localStorage.getItem(
            "completedConcepts"
        )
    ) || [];

    const visited =
    new Set();

    const required = [];

    function dfsGap(
        concept
    )
    {
        if(
            visited.has(
                concept
            )
        )
        {
            return;
        }

        visited.add(
            concept
        );

        concepts[
            concept
        ].forEach(
            prerequisite =>
            {
                dfsGap(
                    prerequisite
                );
            }
        );

        required.push(
            concept
        );
    }

    dfsGap(
        selectedConcept
    );

    const missing =
    required.filter(
        concept =>
        !completed.includes(
            concept
        )
    );

    let html = "";

    if(
        missing.length === 0
    )
    {
        html =
        `
        <div class="roadmap-card">
        ✅ Ready To Learn
        </div>
        `;
    }
    else
    {
        missing.forEach(
            concept =>
            {
                html +=
                `
                <div class="roadmap-card">
                ❌ ${concept}
                </div>
                `;
            }
        );
    }

    document
    .getElementById(
        "gapOutput"
    )
    .innerHTML =
    html;
}
function showConceptDetails(
    concept
)
{
    const details =
    conceptInfo[concept];

    const container =
    document.getElementById(
        "conceptDetails"
    );

    if(!details)
    {
        container.innerHTML =
        `
        <p>
        No information available.
        </p>
        `;

        return;
    }

    container.innerHTML =
    `
    <div class="roadmap-card">

        <h3>${concept}</h3>

        <p>
        Difficulty:
        ${details.difficulty}
        </p>

        <p>
        Estimated Time:
        ${details.time}
        </p>

        <p>
        ${details.description}
        </p>

    </div>
    `;
}
function generateStudyPlan()
{
    const selectedConcept =
    document
    .getElementById(
        "targetConcept"
    )
    .value;

    if(
        selectedConcept === ""
    )
    {
        return;
    }

    const visited =
    new Set();

    const roadmap = [];

    dfs(
        selectedConcept,
        visited,
        roadmap
    );

    let html = "";

    roadmap.forEach(
        (
            concept,
            index
        ) =>
        {
            html +=
            `
            <div class="roadmap-card">

                <strong>
                Day ${index + 1}
                </strong>

                <br>

                ${concept}

            </div>
            `;
        }
    );

    document
    .getElementById(
        "studyPlanOutput"
    )
    .innerHTML =
    html;
}
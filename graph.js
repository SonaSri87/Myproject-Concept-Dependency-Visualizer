document.addEventListener(
    "DOMContentLoaded",
    renderGraph
);

function renderGraph()
{
    const container =
    document.getElementById(
        "graphContainer"
    );

    container.innerHTML = "";

    const selectedConcept =
    localStorage.getItem(
        "selectedConcept"
    );

    if(
        !selectedConcept
    )
    {
        container.innerHTML =
        `
        <h2>
        Generate a roadmap first.
        </h2>
        `;

        return;
    }

    const visited =
    new Set();

    const path = [];

    dfs(
        selectedConcept,
        visited,
        path
    );

    path.forEach(
        (
            concept,
            index
        ) =>
        {
            const node =
            document.createElement(
                "div"
            );

            node.className =
            "graph-node";

            node.textContent =
            concept;

            container.appendChild(
                node
            );

            if(
                index <
                path.length - 1
            )
            {
                const arrow =
                document.createElement(
                    "div"
                );

                arrow.className =
                "graph-arrow";

                arrow.innerHTML =
                "↓";

                container.appendChild(
                    arrow
                );
            }
        }
    );
}

function dfs(
    concept,
    visited,
    path
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
            dfs(
                prerequisite,
                visited,
                path
            );
        }
    );

    path.push(
        concept
    );
}
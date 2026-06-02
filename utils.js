// =============================
// Utility Functions
// =============================

function calculateProgress(
    completed,
    total
)
{
    if(total === 0)
    {
        return 0;
    }

    return Math.round(
        (completed / total) * 100
    );
}


function formatCategory(
    category
)
{
    return category.toUpperCase();
}


function showMessage(
    message
)
{
    console.log(message);
}
function searchConcept()
{
    const value =
    document.getElementById(
        "searchInput"
    )
    .value
    .toLowerCase();

    const result =
    concepts.find(
        concept =>
        concept.name
        .toLowerCase()
        .includes(value)
    );

    if(result)
    {
        alert(
            "Found: " +
            result.name +
            "\nCategory: " +
            result.category
        );
    }
    else
    {
        alert(
            "Concept Not Found"
        );
    }
}
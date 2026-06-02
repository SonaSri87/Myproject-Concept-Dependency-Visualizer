function searchConcept()
{
    const keyword =
    document
    .getElementById("searchInput")
    .value
    .toLowerCase();

    const result =
    document
    .getElementById("searchResult");

    let matches = [];

    Object.keys(concepts).forEach(
        concept =>
        {
            if(
                concept
                .toLowerCase()
                .includes(keyword)
            )
            {
                matches.push(concept);
            }
        }
    );

    if(matches.length === 0)
    {
        result.innerHTML =
        "No Concept Found";
    }
    else
    {
        result.innerHTML =
        matches.join("<br>");
    }
}

document
.getElementById("searchBtn")
.addEventListener(
    "click",
    searchConcept
);
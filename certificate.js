document.addEventListener(
    "DOMContentLoaded",
    function ()
    {
        const user =
        localStorage.getItem("user");

        const nameField =
        document.getElementById("certName");

        if(nameField)
        {
            nameField.innerText =
            user ? user : "Learner";
        }
    }
);
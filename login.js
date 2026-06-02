function login()
{
    const user =
    document.getElementById("username").value;

    const pass =
    document.getElementById("password").value;

    if(user.trim() === "" || pass.trim() === "")
    {
        document.getElementById("msg").innerText =
        "Please enter username and password";
        return;
    }

    localStorage.setItem("user", user);

    window.location.href = "index.html";
}
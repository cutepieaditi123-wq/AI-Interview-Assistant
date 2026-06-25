function startInterview() {

    // User ne kaunsa domain select kiya
    const domain = document.getElementById("domain").value;

    // Agar domain select nahi kiya
    if (domain === "") {
        alert("Please select a domain!");
        return;
    }

    // Domain save karo
    localStorage.setItem("domain", domain);

    // Interview page open karo
    window.location.href = "/interview";
}

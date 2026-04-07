function showLogin() {
    document.getElementById("loginForm").classList.remove("hidden");
    document.getElementById("registerForm").classList.add("hidden");
}

function showRegister() {
    document.getElementById("registerForm").classList.remove("hidden");
    document.getElementById("loginForm").classList.add("hidden");

}

function validerInscription() {
    let email = document.getElementById("registerEmail").value;
    let password = document.getElementById("registerPassword").value;

    let emailError = document.getElementById("registerEmailError");
    let passwordError = document.getElementById("registerPasswordError");

    emailError.textContent = "";
    passwordError.textContent = "";

    let emailValide = email.includes("@") && (email.includes(".com") || email.includes(".fr"));

    if (!emailValide) {
        emailError.textContent = "email erroné";
    }

    if (password.length < 8) {
        passwordError.textContent = "Le mot de passe doit contenir au moins 8 caractères";
    }

    if (emailValide && password.length >= 8) {
        alert("Inscription réussie !");
    }
}
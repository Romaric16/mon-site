let panier = [];

function ajouterAuPanier(nom, prix) {
    panier.push({ nom, prix });
    updateCartCount();
    alert(nom + " ajouté au panier");
}

function updateCartCount() {
    document.getElementById("cart-count").innerText = panier.length;
}

function voirPanier() {
    const panierDiv = document.getElementById("panier");
    panierDiv.classList.remove("hidden");

    const list = document.getElementById("panier-items");
    list.innerHTML = "";

    let total = 0;

    panier.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item.nom + " - " + item.prix + "€";
        list.appendChild(li);
        total += item.prix;
    });

    document.getElementById("total").textContent = "Total: " + total + "€";
}

function fermerPanier() {
    document.getElementById("panier").classList.add("hidden");
}

function viderPanier() {
    panier = [];
    updateCartCount();
    voirPanier();
}
// Récupération de orderId et insertion dans le HTML
const product_url = window.location.search;
const urlSearchParams = new URLSearchParams(product_url);
const orderId = urlSearchParams.get("id");
document.getElementById("orderId").innerText = orderId

// Effacer tout le localStorage
localStorage.clear();

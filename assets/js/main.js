async function loadPage(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Error al cargar " + url);
    const html = await response.text();
    document.getElementById("content").innerHTML = html;
  } catch (err) {
    document.getElementById("content").innerHTML = "<p>No se pudo cargar el contenido.</p>";
    console.error(err);
  }
}

document.addEventListener("click", (e) => {
  const link = e.target.closest("[data-link]");
  if (link) {
    e.preventDefault();
    const url = link.getAttribute("href");
    loadPage(url);
  }
});

function showAlert(message) {
  const alertBox = document.getElementById("customAlert");
  const alertMessage = document.getElementById("alertMessage");
  alertMessage.textContent = message;
  alertBox.style.display = "flex";

  document.getElementById("alertButton").onclick = function() {
    alertBox.style.display = "none";
  };
}


loadPage("pages/home.html");
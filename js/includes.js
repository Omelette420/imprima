function loadHTML(id, url) {
    fetch(url)
      .then(response => {
        if (!response.ok) throw new Error(`Failed to load ${url}`);
        return response.text();
      })
      .then(data => {
        document.getElementById(id).innerHTML = data;
      })
      .catch(error => {
        console.error(error);
      });
  }
  
  // Load header and footer on every page
  window.addEventListener("DOMContentLoaded", () => {
    loadHTML("header", "/partials/header.html");
    loadHTML("footer", "/partials/footer.html");
  });
  
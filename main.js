document.addEventListener("DOMContentLoaded", () => {
  fetch("nav.html")
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.text();
    })
    .then((data) => {
      const navbarEl = document.getElementById("navbar");
      if (!navbarEl) {
        console.warn("Navbar container (#navbar) not found in DOM.");
        return;
      }
      navbarEl.innerHTML = data;

      // Highlight active page; default to index.html for root
      const links = navbarEl.querySelectorAll("a");
      let current = window.location.pathname.split("/").pop();
      if (!current) current = "index.html";
      links.forEach((link) => {
        const href = link.getAttribute("href") || "";
        const linkName = href.split("/").pop();
        if (linkName === current) {
          link.classList.add("active");
        }
      });

      // Burger Toggle (only if elements exist)
      const toggleBtn = document.getElementById("nav-toggle");
      const navLinks = document.getElementById("nav-links");
      if (toggleBtn && navLinks) {
        toggleBtn.addEventListener("click", () => {
          navLinks.classList.toggle("show");
        });
      }
    })
    .catch((err) => console.error("Error loading navbar:", err));

  fetch("ErichJasterResume2026.docx.html")
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.text();
    })
    .then((data) => {
      const resumeEl = document.getElementById("resume");
      if (resumeEl) resumeEl.innerHTML = data;
      else console.warn("Resume container (#resume) not found in DOM.");
    })
    .catch((err) => console.error("Error loading resume:", err));
});
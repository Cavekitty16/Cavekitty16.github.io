fetch("nav.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("navbar").innerHTML = data;

    // Highlight active page
    const links = document.querySelectorAll("#navbar a");
    const current = window.location.pathname.split("/").pop();
    links.forEach((link) => {
      if (link.getAttribute("href") === current) {
        link.classList.add("active");
      }
    });

    // 🔥 Add burger toggle functionality
    const toggleBtn = document.getElementById("nav-toggle");
    const navLinks = document.getElementById("nav-links");

    toggleBtn.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  })
  .catch((err) => console.error("Error loading navbar:", err));
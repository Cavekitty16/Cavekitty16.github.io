fetch("nav.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("navbar").innerHTML = data;

    //Highlight active page in nav
    const links = document.querySelectorAll("#navbar a");
    const current = window.location.pathname.split("/").pop(); // get current page
    links.forEach((link) => {
      if (link.getAttribute("href") === current) {
        link.classList.add("active");
      }
    });
  })
  .catch((err) => console.error("Error loading navbar:", err));

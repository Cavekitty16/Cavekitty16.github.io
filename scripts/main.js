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

var shown = false;

function showhideContact() {
  if (shown) {
    document.getElementById("button").innerHTML = "Show my Contact Info";
    var mycontact = null;
    document.getElementById("contact").innerHTML = mycontact;
    shown = false;
  } else {
    var mycontact =
    '<br/>' +
    '<div class="title">' +
      '<p style="font-weight: bold;">' +
        'School Email: ' +
        '<a href="mailto:Jastere1' +
        '@' +
        'udayton.edu">Jastere1' +
        '@' +
        'udayton.edu</a>' +
      '</p>' +
      '<p style="font-weight: bold;">' +
        'Personal Email: ' +
        '<a href="mailto:erichjaster' +
        '@' +
        'gmail.com">erichjaster' +
        '@' +
        'gmail.com</a>' +
      '</p>' +
      '<p style="font-weight: bold;">' + 
      'Phone: ' + 
      '<a href="tel:614' +
      '8097373">' +
      '  (614)' +
      '  809-7373</a>' +
      '  </p>' +
      '<p style="font-weight: bold;">' +
        'Github: ' +
        '<a href="https://github.com/Cavekitty16">github.com/Cavekitty16</a>' +
      '</p>' +
      '<p style="font-weight: bold;">' +
        'Itch.io: ' +
        '<a href="https://erich-jaster.itch.io">erich-jaster.itch.io</a>' +
      '</p>' +
      '<p style="font-weight: bold;">' +
        'Linkedin: ' +
        '<a href="https://www.linkedin.com/in/erich-jaster">linkedin.com/in/erich-jaster</a>' +
      '</p>' +
      '<p style="font-weight: bold;">' +
        'Letterboxd: ' +
        '<a href="https://letterboxd.com/Cavekitty/">letterboxd.com/Cavekitty</a>' +
      '</p>'
    '</div>';
    document.getElementById("contact").innerHTML = mycontact;
    document.getElementById("button").innerHTML = "Hide my Contact Info";
    shown = true;
  }
}
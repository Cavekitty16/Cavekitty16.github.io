document.addEventListener("DOMContentLoaded", () => {
  fetch("data/projects.json")
    .then(response => response.json())
    .then(projects => {
      const container = document.getElementById("card-container");

      projects.forEach(project => {
        const card = createCard(project);
        container.appendChild(card);
      });
    })
    .catch(error => console.error("Error loading projects:", error));
});

function createCard(project) {
  const card = document.createElement("div");
  card.className = "card";

  const tagsHTML = project.tags
    .map(tag => `<li>${tag}</li>`)
    .join("");

  card.innerHTML = `
    <img src="${project.image}" alt="${project.title}" class="card-img" />
    <div class="card-content">
      <h2 class="card-title">${project.title}</h2>
      <p class="card-description">${project.description}</p>
      <ul class="card-list">
        ${tagsHTML}
      </ul>
      <a href="${project.Link}">
        <button class="card-button">Itch.io</button>
      </a>
    </div>
  `;

  return card;
}
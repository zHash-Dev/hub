// Base de dados dos seus projetos
const projectsData = [
  {
    name: "Loop Generator",
    description: "Quickly generate loops, templates, and repeating structures with support for dynamic variables and syntax highlighting.",
    url: "https://zhash-dev.github.io/loop-generator/",
    tags: ["Utility", "Tools"]
  },
  {
    name: "Manifest Generator",
    description: "Create perfect, syntax-free manifest.json files for your add-ons. Configure modules, dependencies, and automatically generate unique UUIDs.",
    url: "https://zhash-dev.github.io/manifest-generator/",
    tags: ["JSON", "Generator"]
  },
  /*
  {
    name: "Em Breve",
    description: "Um novo projeto misterioso está sendo desenvolvido no laboratório.",
    url: "#",
    tags: ["WIP", "Secret"]
  }
  */
];

function renderProjects() {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  grid.innerHTML = "";

  projectsData.forEach(project => {
    const card = document.createElement("a");
    card.className = "project-card";
    card.href = project.url;
    
    if (project.url !== "#") {
      card.target = "_blank";
    }

    const tagsHTML = project.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

    const arrowIcon = `
      <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M5 12h14M12 5l7 7-7 7"/>
      </svg>
    `;

    card.innerHTML = `
      <div class="project-title">
        ${project.name}
        ${arrowIcon}
      </div>
      <div class="project-desc">${project.description}</div>
      <div class="project-tags">${tagsHTML}</div>
    `;

    grid.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", renderProjects);
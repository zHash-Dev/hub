const Data = [
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
    name: "Base Addon Generator",
    description: "Create a base for your addon in just a few steps. Includes icon pack, manifest, scripts, and various other folders and files.",
    url: "https://zhash-dev.github.io/manifest-generator/",
    tags: ["Folder", "ZIP", "Generator"]
  },
  */
  {
    name: "Shortly",
    description: "A new project is being developed.",
    url: "",
    tags: ["WIP", "Secret"]
  },
];

const arrowIcon = `
      <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M5 12h14M12 5l7 7-7 7"/>
      </svg>
    `;

const padlockIcon = `
     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
     <path d="M7 11V7a5 5 0 0 1 10 0v4M5 11h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2z" />
     </svg>
    `;

function renderProjects() {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  grid.innerHTML = "";

  Data.forEach(project => {
    const card = document.createElement("a");
    card.className = "project-card";
    card.href = project.url;

    if (project.tags.includes("WIP")) {
      card.classList.add("project-wip");
      card.classList.remove("project-card");
    }

    card.addEventListener("click", e => {
      if (project.tags.includes("WIP")) {
        e.preventDefault();

        card.classList.remove("shake-error");
        void card.offsetWidth;
        card.classList.add("shake-error");
      }
    });

    if (project.url) {
      card.href = project.url;
      card.target = "_blank";
    } else {
      card.removeAttribute("href");
    }

    const tagsHtml = project.tags.includes("WIP") ? project.tags.map(tag => `<span class="wip-tag">${tag}</span>`).join('') : project.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

    const icon = project.tags.includes("WIP") ? padlockIcon : arrowIcon;

    card.innerHTML = `
      <div class="project-title">
        ${project.name}
        ${icon}
      </div>
      <div class="project-desc">${project.description}</div>
      <div class="project-tags">${tagsHtml}</div>
    `;

    grid.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", renderProjects);
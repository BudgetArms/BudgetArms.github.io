const projectsContainer = document.getElementById("projects");

async function loadProjects() {
    try {
        const response = await fetch("Resources/Data/PinnedProjects.json", {
            cache: "no-store"
        });

        if (!response.ok) {
            throw new Error("Could not load pinned projects.");
        }

        const projects = await response.json();

        projectsContainer.innerHTML = "";

        if (projects.length === 0) {
            projectsContainer.innerHTML = "<p>No pinned projects found.</p>";
            return;
        }

        projects.forEach(project => {
            const card = document.createElement("article");
            card.className = "project-card";

            const language = project.primaryLanguage
                ? project.primaryLanguage.name
                : "";

            card.innerHTML = `
                <h3>
                    <a
                        href="${project.url}"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        ${escapeHtml(project.name)}
                    </a>
                </h3>

                ${
                    project.description
                        ? `<p>${escapeHtml(project.description)}</p>`
                        : ""
                }

                <div class="project-meta">
                    ${language ? `<span>${escapeHtml(language)}</span>` : ""}
                    <span>★ ${project.stargazerCount}</span>
                    <span>⑂ ${project.forkCount}</span>
                </div>
            `;

            projectsContainer.appendChild(card);
        });

    } catch (error) {
        console.error(error);

        projectsContainer.innerHTML = `
            <p>Unable to load projects.</p>
        `;
    }
}

function escapeHtml(value) {
    const div = document.createElement("div");
    div.textContent = value;
    return div.innerHTML;
}

loadProjects();
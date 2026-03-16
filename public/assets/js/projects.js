/**
 * projects.js – Load project data from JSON and render cards & modal
 */

export async function initProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    if (!projectsGrid) return;

    try {
        const response = await fetch('data/projects.json');
        if (!response.ok) throw new Error('Failed to load projects');
        const projects = await response.json();

        renderProjects(projects);
        setupFilters(projects);
        setupModal(projects);
    } catch (error) {
        console.error('Error loading projects:', error);
        projectsGrid.innerHTML = '<p class="error">Failed to load projects.</p>';
    }
}

function renderProjects(projects) {
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;

    grid.innerHTML = projects.map(project => `
        <div class="project-card" data-category="${project.category}" data-id="${project.id}">
            <div class="project-card__image">
                <img src="${project.image}" alt="${project.title}" loading="lazy">
            </div>
            <div class="project-card__content">
                <h3 class="project-card__title">${project.title}</h3>
                <p class="project-card__desc">${project.description}</p>
                <div class="project-card__tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

function setupFilters(projects) {
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Filter projects
            const cards = document.querySelectorAll('.project-card');
            cards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

function setupModal(projects) {
    const modal = document.getElementById('projectModal');
    const cards = document.querySelectorAll('.project-card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const projectId = card.dataset.id;
            const project = projects.find(p => p.id == projectId); // id could be string or number
            if (!project) return;

            // Fill modal content
            document.getElementById('modalTitle').textContent = project.title;
            document.getElementById('modalTag').textContent = project.tags.join(' · ');
            document.getElementById('modalConcept').textContent = project.concept;
            document.getElementById('modalArchDesc').textContent = project.architecture;

            // Build visual architecture diagram
            const archDiv = document.getElementById('modalArchitecture');
            if (project.archSteps) {
                archDiv.innerHTML = project.archSteps.map(step => `
                    <div class="arch-step">
                        <i class="fas fa-${step.icon}"></i>
                        <span>${step.label}</span>
                        <i class="fas fa-arrow-right"></i>
                    </div>
                `).join('');
            } else {
                archDiv.innerHTML = '<p>Architecture diagram not available.</p>';
            }

            // Tech stack
            const techStack = document.getElementById('modalTechStack');
            techStack.innerHTML = project.techStack.map(tech =>
                `<span class="tech-item">${tech}</span>`
            ).join('');

            // Differentiators
            const diffList = document.getElementById('modalDifferentiators');
            diffList.innerHTML = project.differentiators.map(diff =>
                `<li>${diff}</li>`
            ).join('');

            // GitHub link
            const githubLink = document.getElementById('modalGithubLink');
            if (project.github) {
                githubLink.href = project.github;
                githubLink.style.display = 'inline-flex';
            } else {
                githubLink.style.display = 'none';
            }

            // Show modal
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
}
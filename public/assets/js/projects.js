/**
 * projects.js – Load project data from JSON and render cards & modal
 */

export async function initProjects() {
    const allProjectsGrid = document.getElementById('allProjectsGrid');
    const flagshipGrid = document.getElementById('flagshipGrid');
    const notableGrid = document.getElementById('notableGrid');
    const listGrid = document.getElementById('listGrid');
    const projectsGrid = document.getElementById('projectsGrid');

    // If none of the grids exist, we're not on a page that needs projects
    if (!allProjectsGrid && !flagshipGrid && !notableGrid && !listGrid && !projectsGrid) return;

    try {
        const response = await fetch('data/projects.json');
        if (!response.ok) throw new Error('Failed to load projects');
        const projects = await response.json();

        // All projects in one grid (projects.html new layout)
        if (allProjectsGrid) {
            renderAllProjectsGrid(projects, allProjectsGrid);
            setupFilters(projects);
        }

        // Flagship projects (ids 1-2) on projects page (legacy)
        if (flagshipGrid) {
            renderFlagship(projects.filter(p => p.id <= 2), flagshipGrid);
        }

        // Notable projects (ids 3-7) on projects page (legacy)
        if (notableGrid) {
            renderNotable(projects.filter(p => p.id >= 3 && p.id <= 7), notableGrid);
        }

        // All others (ids 8-14) on projects page (legacy)
        if (listGrid) {
            renderList(projects.filter(p => p.id >= 8), listGrid);
        }

        // Legacy single grid (if present)
        if (projectsGrid) {
            renderProjects(projects, projectsGrid);
            setupFilters(projects);
        }

        // Setup modal click handlers for all clickable project elements
        setupModal(projects);
    } catch (error) {
        console.error('Error loading projects:', error);
        const target = allProjectsGrid || flagshipGrid || notableGrid || listGrid || projectsGrid;
        if (target) {
            target.innerHTML = '<p class="error">Failed to load projects.</p>';
        }
    }
}

function renderAllProjectsGrid(projects, grid) {
    if (!grid) return;

    grid.innerHTML = projects.map(project => `
        <div class="project-card" data-category="${project.category}" data-id="${project.id}">
            <div class="project-card__img-wrap">
                <img class="project-card__img"
                     src="${project.image}"
                     alt="${project.title}"
                     loading="lazy">
            </div>
            <div class="project-card__body">
                <h3 class="project-card__title">${project.title}</h3>
                <p class="project-card__desc">${project.description}</p>
                <div class="project-card__footer">
                    <div class="project-card__tags">
                        ${project.tags.map(tag => `<span class="tag tag--default">${tag}</span>`).join('')}
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function renderProjects(projects, grid) {
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

function renderFlagship(projects, grid) {
    if (!grid) return;

    grid.innerHTML = projects.map(project => `
        <div class="project-flagship reveal" data-id="${project.id}">
            <div class="project-flagship__img-wrap">
                <img class="project-flagship__img"
                     src="${project.image}"
                     alt="${project.title}"
                     loading="lazy">
            </div>
            <div class="project-flagship__body">
                <p class="project-flagship__problem">
                    ${project.tags[0] || 'Featured'}
                </p>
                <h3 class="project-flagship__title">${project.title}</h3>
                <p class="project-flagship__desc">
                    ${project.description}
                </p>
                <div class="project-flagship__footer">
                    <div class="project-flagship__tags">
                        ${project.tags.map(tag => `<span class="tag tag--accent">${tag}</span>`).join('')}
                    </div>
                    <span class="project-flagship__link">
                        View details <i class="fas fa-arrow-right" style="font-size:0.625rem"></i>
                    </span>
                </div>
            </div>
        </div>
    `).join('');
}

function renderNotable(projects, grid) {
    if (!grid) return;

    grid.innerHTML = projects.map(project => `
        <div class="project-card" data-category="${project.category}" data-id="${project.id}">
            <div class="project-card__img-wrap">
                <img class="project-card__img"
                     src="${project.image}"
                     alt="${project.title}"
                     loading="lazy">
            </div>
            <div class="project-card__body">
                <h3 class="project-card__title">${project.title}</h3>
                <p class="project-card__desc">${project.description}</p>
                <div class="project-card__footer">
                    <div class="project-card__tags">
                        ${project.tags.map(tag => `<span class="tag tag--default">${tag}</span>`).join('')}
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function renderList(projects, grid) {
    if (!grid) return;

    grid.innerHTML = projects.map(project => `
        <div class="project-list-item" data-category="${project.category}" data-id="${project.id}">
            <span class="project-list-item__icon">
                <i class="fas fa-arrow-right"></i>
            </span>
            <div>
                <p class="project-list-item__title">${project.title}</p>
                <p class="project-list-item__desc">${project.description}</p>
                <div class="project-list-item__tags">
                    ${project.tags.map(tag => `<span class="tag tag--default">${tag}</span>`).join('')}
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

            // Filter all project elements across tiers
            const allItems = document.querySelectorAll('.project-flagship, .project-card, .project-list-item');
            allItems.forEach(item => {
                if (filter === 'all' || item.dataset.category === filter) {
                    item.style.display = '';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

function setupModal(projects) {
    const modal = document.getElementById('projectModal');

    // Attach click to all clickable project elements
    const clickables = document.querySelectorAll('.project-flagship, .project-card, .project-list-item');

    clickables.forEach(card => {
        card.addEventListener('click', () => {
            const projectId = card.dataset.id;
            const project = projects.find(p => p.id == projectId);
            if (!project || !modal) return;

            // Fill modal content
            const modalCategory = document.getElementById('modalCategory');
            const modalTitle = document.getElementById('modalTitle');
            const modalConcept = document.getElementById('modalConcept');
            const modalArchDesc = document.getElementById('modalArchDesc');
            const modalArchitecture = document.getElementById('modalArchitecture');
            const modalTechStack = document.getElementById('modalTechStack');
            const modalDifferentiators = document.getElementById('modalDifferentiators');
            const modalGithub = document.getElementById('modalGithub');

            if (modalCategory) modalCategory.textContent = project.category.toUpperCase();
            if (modalTitle) modalTitle.textContent = project.title;
            if (modalConcept) modalConcept.textContent = project.concept || 'No concept description available.';
            if (modalArchDesc) modalArchDesc.textContent = project.architecture || 'Architecture details not available.';

            // Build visual architecture diagram
            if (modalArchitecture) {
                if (project.archSteps && project.archSteps.length > 0) {
                    modalArchitecture.innerHTML = project.archSteps.map((step, idx) => `
                        <div class="arch-step">
                            <div class="arch-node">
                                <div class="arch-node__icon"><i class="fas fa-${step.icon}"></i></div>
                                <div class="arch-node__label">${step.label}</div>
                            </div>
                        </div>
                        ${idx < project.archSteps.length - 1 ? '<span class="arch-arrow"><i class="fas fa-arrow-right"></i></span>' : ''}
                    `).join('');
                } else {
                    modalArchitecture.innerHTML = '<p class="modal__text">Architecture diagram not available.</p>';
                }
            }

            // Tech stack
            if (modalTechStack) {
                modalTechStack.innerHTML = project.techStack.map(tech =>
                    `<span class="tech-pill">${tech}</span>`
                ).join('');
            }

            // Differentiators
            if (modalDifferentiators) {
                if (project.differentiators && project.differentiators.length > 0) {
                    modalDifferentiators.innerHTML = project.differentiators.map(diff =>
                        `<div class="modal__diff-item">${diff}</div>`
                    ).join('');
                } else {
                    modalDifferentiators.innerHTML = '<p class="modal__text">No differentiators listed.</p>';
                }
            }

            // GitHub link
            if (modalGithub) {
                if (project.github) {
                    modalGithub.href = project.github;
                    modalGithub.style.display = 'inline-flex';
                } else {
                    modalGithub.style.display = 'none';
                }
            }

            // Show modal
            modal.classList.add('active');
            modal.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
        });
    });
}
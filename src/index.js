// Create the header div
const header = document.createElement('div');
header.classList.add('header');

// Create the GitHub link
const githubLink = document.createElement('a');
githubLink.href = 'https://github.com/PeterG-ithub';
githubLink.classList.add('github-icon');
githubLink.target = '_blank';

// Create the GitHub icon
const githubIcon = document.createElement('i');
githubIcon.classList.add('fab', 'fa-github');
githubLink.appendChild(githubIcon);

// Create the logo image
const logoImg = document.createElement('img');
logoImg.src = 'images/portfolio-logo.png';
logoImg.alt = 'portfolio logo';

// Create the header description
const headerDesc = document.createElement('div');
headerDesc.classList.add('header-desc');
headerDesc.textContent = 'a small portfolio website by Peter';

// Append elements to the header
header.appendChild(githubLink);
header.appendChild(logoImg);
header.appendChild(headerDesc);

// Create the filter container
const filterContainer = document.createElement('div');
filterContainer.classList.add('filter-container');

// Create the projects container
const projectsContainer = document.createElement('div');
projectsContainer.classList.add('projects-container');

// Append the header, filter container, and projects container to the body
document.body.appendChild(header);
document.body.appendChild(filterContainer);
document.body.appendChild(projectsContainer);
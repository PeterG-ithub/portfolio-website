import { getProjectsData } from '../utils/dataLoader';
document.addEventListener('DOMContentLoaded', () => {
    console.log("hi")
    const projectsData = getProjectsData();
    const projectContainer = document.querySelector('.projects-container');
    createProjects(projectsData, projectContainer);
});

export function createProjects(data, container) {
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            const project = data[key];
            const projectElement = createProject(project);
            container.appendChild(projectElement);
        }
    }
}

function createProject(project) {
    // Create project container
    const projectElement = document.createElement('div');
    projectElement.className = 'project-container';

    // Project status container
    const projectStatusContainer = document.createElement('div');
    projectStatusContainer.className = 'project-status-container';
    const projectStatus = document.createElement('div');
    projectStatus.className = 'project-status';
    projectStatus.innerText = project.devStage; // Join array values for display

    const statusIcon = document.createElement('img');
    statusIcon.className = 'status-icon';
    // Assuming the first devStage represents the current status
    const status = project.devStage.toLowerCase().replace(/ /g, '-');
    statusIcon.src = require(`../images/status/${status}-icon.png`); // Construct the image path
    statusIcon.alt = `${project.devStage[0]} Icon`; // Use the devStage as the alt text

    projectStatusContainer.appendChild(projectStatus);
    projectStatusContainer.appendChild(statusIcon);

    // Project thumbnail
    const projectThumbnail = document.createElement('div');
    projectThumbnail.className = 'project-thumbnail';
    const thumbnailImage = document.createElement('img');
    thumbnailImage.src = require(`../images/thumbnail/${project.image}`);
    thumbnailImage.alt = 'Project Thumbnail';

    projectThumbnail.appendChild(thumbnailImage);

    // Project technologies
    const projectTechContainer = document.createElement('div');
    projectTechContainer.className = 'project-tech-container';
    project.technology.forEach(tech => {
        const techElement = document.createElement('div');
        techElement.className = 'project-tech';
        techElement.innerText = tech;
        projectTechContainer.appendChild(techElement);
    });

    projectThumbnail.appendChild(projectTechContainer);

    // See more dropdown (initially hidden)
    const seeMoreDropdown = document.createElement('div');
    seeMoreDropdown.className = 'see-more-dropdown';
    seeMoreDropdown.style.display = 'none'; // Hide the description initially

    const projectDescription = document.createElement('div');
    projectDescription.className = 'project-description';
    projectDescription.innerText = project.description;
    // const projectLink = document.createElement('a');
    // projectLink.className = 'project-link';
    // projectLink.href = project.link;
    // projectLink.target = '_blank';
    // projectLink.innerText = 'Learn more...';

    seeMoreDropdown.appendChild(projectDescription);
    //seeMoreDropdown.appendChild(projectLink);

    // Dropdown icon
    const dropdownIcon = document.createElement('img');
    dropdownIcon.className = 'dropdown-icon';
    dropdownIcon.src = require('../images/icons/project-dropdown.png');
    dropdownIcon.alt = 'Dropdown Icon';

    // Add click event listener to toggle project description visibility and rotate dropdown icon
    projectElement.addEventListener('click', () => {
        if (seeMoreDropdown.style.display === 'none') {
            seeMoreDropdown.style.display = 'block';
            dropdownIcon.style.transform = 'rotate(180deg)';
        } else {
            seeMoreDropdown.style.display = 'none';
            dropdownIcon.style.transform = 'rotate(0deg)';
        }
    });

    // Append all elements to the project container
    projectElement.appendChild(projectStatusContainer);
    projectElement.appendChild(projectThumbnail);
    projectElement.appendChild(seeMoreDropdown);
    projectElement.appendChild(dropdownIcon);

    return projectElement;
}

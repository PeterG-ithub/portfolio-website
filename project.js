document.addEventListener('DOMContentLoaded', () => {
    console.log("hi")
    fetch('projects.json') // Assuming the JSON file is named 'projects.json'
        .then(response => response.json())
        .then(data => {
            const projectContainer = document.querySelector('.projects-container');
            createProjects(data, projectContainer);
        })
        .catch(error => console.error('Error loading the project data:', error));
});

function createProjects(data, container) {
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
    projectStatus.innerText = project.devStage.join(', '); // Join array values for display

    const statusIcon = document.createElement('img');
    statusIcon.className = 'status-icon';
    // Assuming the first devStage represents the current status
    const status = project.devStage[0].toLowerCase().replace(/ /g, '-');
    statusIcon.src = `images/status/${status}-icon.png`; // Construct the image path
    statusIcon.alt = `${project.devStage[0]} Icon`; // Use the devStage as the alt text

    projectStatusContainer.appendChild(projectStatus);
    projectStatusContainer.appendChild(statusIcon);

    // Project thumbnail
    const projectThumbnail = document.createElement('div');
    projectThumbnail.className = 'project-thumbnail';
    const thumbnailImage = document.createElement('img');
    thumbnailImage.src = project.image;
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

    // See more dropdown
    const seeMoreDropdown = document.createElement('div');
    seeMoreDropdown.className = 'see-more-dropdown';
    const projectDescription = document.createElement('div');
    projectDescription.className = 'project-description';
    projectDescription.innerText = project.description;
    const projectLink = document.createElement('a');
    projectLink.className = 'project-link';
    projectLink.href = project.link;
    projectLink.target = '_blank';
    projectLink.innerText = 'View Project';

    seeMoreDropdown.appendChild(projectDescription);
    seeMoreDropdown.appendChild(projectLink);

    // Append all elements to the project container
    projectElement.appendChild(projectStatusContainer);
    projectElement.appendChild(projectThumbnail);
    projectElement.appendChild(projectTechContainer);
    projectElement.appendChild(seeMoreDropdown);

    return projectElement;
}
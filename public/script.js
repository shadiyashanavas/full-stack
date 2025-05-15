
/*
 
function addProject() {
    // Get the project name and description from input fields
    const projectName = document.getElementById('project-name').value;
    const projectDescription = document.getElementById('project-description').value;

    // Check if both fields are filled
    if (projectName && projectDescription) {
        // Create a new <li> element for the project
        const projectItem = document.createElement('li');
        
        // Create a new <h3> element for the project name
        const projectTitle = document.createElement('h3');
        projectTitle.textContent = projectName;

        // Create a new <p> element for the project description
        const projectDesc = document.createElement('p');
        projectDesc.textContent = projectDescription;

        // Append title and description to the project item
        projectItem.appendChild(projectTitle);
        projectItem.appendChild(projectDesc);

        // Append the project item to the project list
        document.getElementById('project-list').appendChild(projectItem);

        // Clear the input fields after adding the project
        document.getElementById('project-name').value = '';
        document.getElementById('project-description').value = '';
    } else {
        alert("Please fill in both the project name and description.");
    }
}*/
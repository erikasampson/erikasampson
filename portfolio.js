function addProjectToGallery(title, imagePath, description) {
    // create a new project element
    const projectElement = document.createElement("div");
    projectElement.classList.add("project");
  
    // add the project image
    const imageElement = document.createElement("img");
    imageElement.src = imagePath;
    projectElement.appendChild(imageElement);
  
    // add the project title
    const titleElement = document.createElement("h2");
    titleElement.textContent = title;
    projectElement.appendChild(titleElement);
  
    // add the project description (if provided)
    if (description) {
      const descriptionElement = document.createElement("p");
      descriptionElement.textContent = description;
      projectElement.appendChild(descriptionElement);
    }
  
    // add the project element to the gallery
    const galleryElement = document.getElementById("project-gallery");
    galleryElement.appendChild(projectElement);
  }

addProjectToGallery("Project 1", "images/project1.jpg", "This is a description of Project 1.");
addProjectToGallery("Project 2", "images/project2.jpg", "This is a description of Project 2.");
addProjectToGallery("Project 3", "images/project3.jpg");
  
  
// Toggle full-capsule dropdown on click
document.addEventListener("DOMContentLoaded", function() {
    const capsules = document.querySelectorAll('.capsule');

    capsules.forEach(capsule => {
        capsule.addEventListener('click', function() {
            capsule.classList.toggle('active');
        });
    });

    // Fetch top 5 projects from GitHub
    const projectsList = document.getElementById("projects-list");

    fetch('https://api.github.com/users/arunavsameer/repos?sort=updated&per_page=5')
        .then(response => response.json())
        .then(data => {
            data.forEach(project => {
                const projectItem = document.createElement("a");
                projectItem.href = project.html_url;
                projectItem.textContent = project.name;
                projectItem.target = "_blank";
                projectsList.appendChild(projectItem);
            });
        })
        .catch(error => {
            const errorMessage = document.createElement("p");
            errorMessage.textContent = "Unable to fetch projects.";
            projectsList.appendChild(errorMessage);
        });
});

document.querySelectorAll('.dropbtn-full').forEach(button => {
    button.addEventListener('click', function() {
        const capsule = this.closest('.capsule');
        capsule.classList.toggle('active');
    });
});

document.querySelectorAll('.capsule-section').forEach(section => {
    section.addEventListener('click', function () {
        this.classList.toggle('active');
    });
});
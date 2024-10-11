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

document.addEventListener('DOMContentLoaded', function() {
    const element = document.getElementById('typing-effect');
    const texts = ["Arunav Sameer", "@err_hexa"];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 120;
    const deletingSpeed = 50;
    const delayBetweenTexts = 3500;

    function type() {
        const currentText = texts[textIndex];
        if (isDeleting) {
            element.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            if (charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                setTimeout(type, typingSpeed);
            } else {
                setTimeout(type, deletingSpeed);
            }
        } else {
            element.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            if (charIndex === currentText.length) {
                isDeleting = true;
                setTimeout(type, delayBetweenTexts);
            } else {
                setTimeout(type, typingSpeed);
            }
        }
    }

    type();
});
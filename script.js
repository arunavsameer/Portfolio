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
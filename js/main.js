document.addEventListener('DOMContentLoaded', () => {

    const buttonFolder = document.getElementById('folder-button');
    const folder = document.getElementsByClassName('folder-items')[0];

    buttonFolder.addEventListener('click', () => {
        folder.classList.toggle('closed');
        buttonFolder.classList.toggle('closed');
    })

    const elementsToAnimate = document.querySelectorAll(
        '.footer-image, .timeline-container'
    );

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                if(entry.target.classList.contains('footer-image')) {
                    entry.target.classList.add('visible');
                }
                if(entry.target.classList.contains('timeline-container')) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            } else {
                if(entry.target.classList.contains('footer-image')) {
                    entry.target.classList.remove('visible');
                }
            }
        });
    });
    elementsToAnimate.forEach(el => observer.observe(el));
});

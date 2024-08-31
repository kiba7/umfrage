document.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.scroll-section');
    sections.forEach(section => {
        if (section.style.display === 'flex') {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

function ani() {
    const element = document.getElementsByClassName("progress")[0];
    element.className = ''
    void element.offsetWidth;
    element.className = 'progress'
}

function aniMobile() {
    const element = document.getElementsByClassName("progress-mobile")[0];
    element.className = ''
    void element.offsetWidth;
    element.className = 'progress-mobile'
}
document.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.scroll-section');
    sections.forEach(section => {
        if (section.style.display === 'flex') {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

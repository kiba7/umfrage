document.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.scroll-section');
    sections.forEach(section => {
        if (section.style.display === 'flex') {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

const observer = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
        // If the element is visible
        if (entry.isIntersecting) {
            entry.target.className = ''
            void entry.target.offsetWidth;
            entry.target.className = 'progress'
        }
    });
});

observer.observe(document.querySelector('.progress'));

const observerMobile = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
        // If the element is visible
        if (entry.isIntersecting) {
            entry.target.className = ''
            void entry.target.offsetWidth;
            entry.target.className = 'progress-mobile'
        }
    });
});

observerMobile.observe(document.querySelector('.progress-mobile'));

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
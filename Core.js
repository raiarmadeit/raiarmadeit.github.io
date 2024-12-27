window.addEventListener('scroll', function() {
    const aboutOption = document.querySelector('.AboutOption');
    const scriptOption = document.querySelector('.ScriptOption');
    const Title = document.querySelector('.Title'); 
    const scrollPosition = window.scrollY;

    let opacity = 1 - scrollPosition / 200; 
    opacity = Math.max(opacity, 0);

    aboutOption.style.opacity = opacity;
    scriptOption.style.opacity = opacity;
    Title.style.opacity = opacity;
});

document.addEventListener('DOMContentLoaded', function() {
    const scrollButton = document.getElementById('scrollButton');
    const scriptImage = document.getElementById('scriptImage');

    scrollButton.addEventListener('click', function() {
        scriptImage.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

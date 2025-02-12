window.addEventListener('scroll', function() {
    const Title = document.querySelector('.Title'); 
    const About53 = document.querySelector('.About53');
    const VideoButton = document.querySelector('.VideoButton');
    const CoreContacts = document.querySelector('.CoreContact');
    const WEBSITE = document.querySelector('.WEBSITE');
    const scrollPosition = window.scrollY;

    let opacity = 1 - scrollPosition / 200; 
    opacity = Math.max(opacity, 0);
   
    WEBSITE.style.opacity = opacity; 
    VideoButton.style.opacity = opacity;
    About53.style.opacity = opacity;
    Title.style.opacity = opacity;
    CoreContacts.style.opacity = opacity;
});


const video1 = document.querySelector('.Video1');
const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
        } else {
            entry.target.style.opacity = 0; 
        }
    });
}, { threshold: 0.5 });

videoObserver.observe(video1);

const video2 = document.querySelector('.Video2');
const video2Observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
        } else {
            entry.target.style.opacity = 0;
        }
    });
}, { threshold: 0.5 });


video2Observer.observe(video2);


     document.addEventListener('DOMContentLoaded', function() {
            const Video23 = document.getElementById('Video23');
            const VideoScole = document.getElementById('VideoSection2');
            const scrollButton = document.getElementById('scrollButton');
            const AboutRaiarID = document.getElementById('AboutRaiarID');
            const Test1 = document.querySelector('.CoreContact');
            const Test2 = document.getElementById('Raiar_Cutie');
            const aboutMeSection = document.getElementById('aboutMeSection');
    
            if (Video23 && VideoScole) {
                Video23.addEventListener('click', function() {
                    VideoScole.scrollIntoView({ behavior: 'smooth' });
                });
            }
    
            if (scrollButton && AboutRaiarID) {
                scrollButton.addEventListener('click', function() {
                    AboutRaiarID.scrollIntoView({ behavior: 'smooth' });
                });
            }
    
            if (Test1 && Test2) {
                Test1.addEventListener('click', function() {
                    Test2.scrollIntoView({ behavior: 'smooth' });
                });
            }
    
            window.addEventListener('scroll', function() {
                var scrollPosition = window.scrollY;
                var windowHeight = window.innerHeight;
                var sectionPosition = aboutMeSection.getBoundingClientRect().top + scrollPosition;
                var sectionHeight = aboutMeSection.offsetHeight;
    
                var opacity = 1 - Math.min(1, (scrollPosition - sectionPosition + windowHeight) / (sectionHeight + windowHeight));
                aboutMeSection.style.opacity = opacity;
            });
        });


// const video3 = document.querySelector('.Video3');
// const video3Observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.style.opacity = 1;
//         } else {
//             entry.target.style.opacity = 0; 
//         }
//     });
// }, { threshold: 0.5 });

// video3Observer.observe(video3);




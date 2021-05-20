// TOP OF PAGE CODE

document.onscroll = () => {
    const progressBar = document.querySelector('#progress');
    const distanceTop = window.pageYOffset;
    const pageHeight = document.body.scrollHeight - window.innerHeight;

    progressBar.style.width = (distanceTop / pageHeight) * 100 + '%';

    const navBar = document.querySelector('nav');
    const elem = document.getElementById('changeNav');
    const divTop = elem.getBoundingClientRect().top;
    const scrolled = window.pageYOffset;
    
    const projects = document.querySelector('#projects');
    const contact = document.querySelector('#contact');

    if (scrolled > divTop) {
        navBar.style.border = 'none';
        navBar.classList.add('bg-honey');
        projects.style.animation = 'makeOpaque 4s ease-in forwards';
        contact.style.animation = 'makeOpaque 7s ease-in forwards';
    } else {
        navBar.style.borderBottom = '1px solid thistle';
        navBar.classList.remove('bg-honey');
    }
}

document.body.onload = () => {
    const navBar = document.querySelector('nav');
    const elem = document.getElementById('changeNav');
    const divTop = elem.getBoundingClientRect().top;
    const scrolled = window.pageYOffset;

    const projects = document.querySelector('#projects');
    const contact = document.querySelector('#contact');

    if (scrolled > divTop) {
        navBar.style.border = "none";
        navBar.classList.add('bg-honey');
        projects.style.animation = 'makeOpaque 4s ease-in forwards';
        contact.style.animation = 'makeOpaque 7s ease-out forwards';
    } else {
        navBar.style.borderBottom = "1px solid thistle";
        navBar.classList.remove('bg-honey');
    }
}

// CAROUSEL CODE

const project = document.querySelectorAll('.box');
let currentlyActive = 0;
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

// FUNCTIONS FOR CAROUSEL

function backToStart() {
    project[currentlyActive].classList.remove('active');
    currentlyActive = 0;
    project[currentlyActive].classList.add('active');
}

function nextSlide() {
    project[currentlyActive].classList.remove('active');
    currentlyActive++;
    project[currentlyActive].classList.add('active');
}

function backToEnd() {
    project[currentlyActive].classList.remove('active');
    currentlyActive = project.length - 1;
    project[currentlyActive].classList.add('active');
}

function prevSlide() {
    project[currentlyActive].classList.remove('active');
    currentlyActive--;
    project[currentlyActive].classList.add('active');
}

// ARROW CLICK EVENTS FOR CAROUSEL

prevBtn.addEventListener('click', function() {
    if (currentlyActive === 0) {
        backToEnd();
    } else {
        prevSlide();
    }
});

nextBtn.addEventListener('click', function() {
    if (currentlyActive === project.length - 1) {
        backToStart();
    } else {
        nextSlide();
    }
});
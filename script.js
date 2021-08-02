// TOP OF PAGE CODE

document.onscroll = () => {
    const progressBar = document.querySelector('#progress');
    const distanceTop = window.pageYOffset;
    const pageHeight = document.body.scrollHeight - window.innerHeight;

    progressBar.style.width = (distanceTop / pageHeight) * 100 + '%';

    const elem = document.getElementById('change-nav');
    const elemTop = elem.getBoundingClientRect().top;
    const scrolled = window.pageYOffset;

    if (scrolled > elemTop) {
        document.querySelector('#up').style.opacity = 1;
    } else {
        document.querySelector('#up').style.opacity = 0;
    }
}

document.body.onload = () => {
    const progressBar = document.querySelector('#progress');
    const distanceTop = window.pageYOffset;
    const pageHeight = document.body.scrollHeight - window.innerHeight;

    progressBar.style.width = (distanceTop / pageHeight) * 100 + '%';

    const elem = document.getElementById('change-nav');
    const elemTop = elem.getBoundingClientRect().top;
    const scrolled = window.pageYOffset;

    if (scrolled > elemTop) {
        document.querySelector('#up').style.opacity = 1;
    } else {
        document.querySelector('#up').style.opacity = 0;
    }
}

// CAROUSEL CODE

// const project = document.querySelector('.project');
// const projectBox = document.querySelectorAll('.box');
// let currentlyActive = 0;
// const prevBtn = document.querySelector('.prev');
// const nextBtn = document.querySelector('.next');

// FUNCTIONS FOR CAROUSEL

// function backToStart() {
//     projectBox[currentlyActive].classList.remove('active');
//     currentlyActive = 0;
//     projectBox[currentlyActive].classList.add('active');
// }

// function nextSlide() {
//     projectBox[currentlyActive].classList.remove('active');
//     currentlyActive++;
//     projectBox[currentlyActive].classList.add('active');
// }

// function backToEnd() {
//     projectBox[currentlyActive].classList.remove('active');
//     currentlyActive = projectBox.length - 1;
//     projectBox[currentlyActive].classList.add('active');
// }

// function prevSlide() {
//     projectBox[currentlyActive].classList.remove('active');
//     currentlyActive--;
//     projectBox[currentlyActive].classList.add('active');
// }

// EVENTS FOR CAROUSEL

// document.body.onload = () => {
//     setInterval(() => {
//         if (currentlyActive == projectBox.length - 1) {
//             projectBox[currentlyActive].classList.remove('active');
//             currentlyActive = 0;
//             projectBox[currentlyActive].classList.add('active');
//         } else {
//             projectBox[currentlyActive].classList.remove('active');
//             currentlyActive++;
//             projectBox[currentlyActive].classList.add('active');
//         }
//     }, 5000);
// };

// prevBtn.addEventListener('click', function() {
//     if (currentlyActive === 0) {
//         backToEnd();
//     } else {
//         prevSlide();
//     }
// });

// nextBtn.addEventListener('click', function() {
//     if (currentlyActive === projectBox.length - 1) {
//         backToStart();
//     } else {
//         nextSlide();
//     }
// });

// TOUCH FUNCTIONS
// let startingPos;
// let currentPos;

// function touchStart(event) {
//     startingPos = event.touches[0].clientX;
//     console.log("touchStart working!");
// }

// function touchMove(event) {
//     currentPos = event.touches[0].clientX;
// }

// function touchEnd() {
//     if (currentPos - startingPos > 100) {
//         if (currentlyActive === 0) {
//             backToEnd();
//         } else {
//             prevSlide();
//         }
//     } else if (currentPos !== 0 && startingPos - currentPos > 100) {
//         if (currentlyActive === projectBox.length - 1) {
//             backToStart();
//         } else {
//             nextSlide();
//         }
//     }
//     startingPos, currentPos = 0;
// }

// project.addEventListener('touchstart', touchStart);
// project.addEventListener('touchmove', touchMove);
// project.addEventListener('touchend', touchEnd);
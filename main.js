const sup = document.getElementById('sup');
const sub = document.getElementById('sub');
const title = document.getElementById('title');
const section2 = document.getElementById('header');
const underline = document.getElementById('underline');
const section4 = document.getElementById('section4');
const section3 = document.getElementById('section3');
const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        sup.classList.remove('scrolled');
        sub.classList.remove('scrolled');
        title.classList.remove('scrolled');
        underline.classList.remove('scrolled');


    } else {
        sup.classList.add('scrolled');
        sub.classList.add('scrolled');
        title.classList.add('scrolled');
        underline.classList.add('scrolled');
    }
}, { threshold: 0.1 })


const observer3 = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        sup.classList.remove('scrolled');
        sub.classList.remove('scrolled');
        title.classList.remove('scrolled');
        underline.classList.remove('scrolled');


    }
}, { threshold: 0.85 })


const observer4 = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        sup.classList.add('scrolled');
        sub.classList.add('scrolled');
        title.classList.add('scrolled');
        underline.classList.add('scrolled');


    }
}, { threshold: 0.15 })


setTimeout(() => { title.style.position = 'fixed' }, 3000)

observer.observe(section2)

observer3.observe(section4)
observer4.observe(section3)

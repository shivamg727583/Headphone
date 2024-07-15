/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu');
    })
}
/*===== MENU HIDDEN =====*/
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu');
    })
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav_link');

function linkWork(){
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkWork));


/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const head = document.getElementById('header');
    if(this.scrollY >= 100){
        head.classList.add('scroll-header');
    } else {
        head.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll', scrollHeader);


/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollBox = document.getElementById('scrollup');
    if(this.scrollY >= 200){
        scrollBox.classList.add('showing');
    } else {
        scrollBox.classList.remove('showing');
    }
}
window.addEventListener('scroll', scrollUp);


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const parts = document.querySelectorAll('section[id]');

function activeScroll(){
    const sY = window.scrollY;

    parts.forEach(current => {
        const partHeight = current.offsetHeight;
        const partTop = current.offsetTop - 50;
        partId = current.getAttribute('id');

        if(sY > partTop && sY <= partTop + partHeight){
            document.querySelector('.nav_menu a[href*=' + partId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav_menu a[href*=' + partId + ']').classList.remove('active-link');
        }
    })
}
window.addEventListener('scroll', activeScroll)


/*=============== SCROLL REVEAL ANIMATION ===============*/
const scrollReveal = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
})

scrollReveal.reveal(`.home_head, .section_title`, {delay: 600});
scrollReveal.reveal(`.home_footer`, {delay: 650});
scrollReveal.reveal(`.home_img`, {delay: 900, origin: `top`});


scrollReveal.reveal(`.sponsor_img, .products_card, .footer_logo, .footer_content, .copyright`, {origin: `top`, interval: 100});
scrollReveal.reveal(`.specs_data, .discount_animate`, {origin: `left`, interval: 100});
scrollReveal.reveal(`.specs_img, .discount_img`, {origin: `right`});
scrollReveal.reveal(`.case_img`, {origin: `top`});
scrollReveal.reveal(`.case_data`);

/*============ BUTTON HOVER ANIMATION ============*/
// let buttons = document.querySelectorAll('.button');
// buttons.forEach(btn => {
//     btn.addEventListener('mouseover', function(e){
//         let x = e.clientX - e.target.offsetLeft;
//         let y = e.clientY - e.target.offsetTop;

//         let ripples = document.createElement('button::after');
//         ripples.style.left = x + 'px';
//         ripples.style.top = y + 'px';
//         this.appendChild(ripples);

//         setTimeout(() => {
//             ripples.remove();
//         }, 1000);
//     })
//     let x = e.clientX - e.target.offsetLeft;
// })
/*=============== show menu ===============*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

/* show menu */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* hide menu */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== remove menu mobile ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // when we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};

navLink.forEach((i) => i.addEventListener("click", linkAction));

/*=============== ADD BLUR HEADER ===============*/
const blurHeader = document.getElementById("header");
// Add a class if the bottom offset is grater that 50 of the viewport
window.addEventListener("scroll", () => {
  blurHeader.classList.toggle("blur-header", window.scrollY > 50);
});


/*=============== SHOW SCROLL UP ===============*/
// when the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
const scrollUp = document.getElementById("scroll-up");

window.addEventListener('scroll', () => {
  scrollUp.classList.toggle('show-scroll', window.scrollY >= 350);
});


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight,
          sectionTop = section.offsetTop - 58,
          sectionId = section.getAttribute('id'),
          sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

          if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link');
          } else {
            sectionsClass.classList.remove('active-link');
          }
  });
};

window.addEventListener('scroll', scrollActive);


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2500,
  delay: 300,
  //reset: true, //Animations repeat
});

sr.reveal('.home__img, .new__data, .care__img, .contact__content, .footer');
sr.reveal('.home__data, .care__list, .contact__img', {delay: 500});
sr.reveal('.new__card', {delay: 500, interval:100});
sr.reveal('.shop__card', {interval:100});
sr.reveal('.galery__title, .galery__description, .galery__video, .galery__photo', {delay: 500});
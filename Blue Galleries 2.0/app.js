const menu = document.querySelector('#menu');
const menulinks = document.querySelector('.nav-bar-menu');

// Drop down menu bar that forms an x when activated
const Menu = () => {
    menu.classList.toggle('is-active');
    menulinks.classList.toggle('active');
};

menu.addEventListener('click', Menu)

window.addEventListener("scroll", function(){
    var navBar = document.querySelector('.nav-bar');
    navBar.classList.toggle("sticky", window.scrollY > 0);
})


// Slider

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const images = document.querySelector('.slider').children;
const totalImages = images.length;
let index = 0;

prev.addEventListener('click', () => {
  nextImage('next');
})

next.addEventListener('click', () => {
  nextImage('prev');
})

function nextImage(direction) {
  if(direction == 'next') {
    index++;
    if(index == totalImages) {
      index = 0;
    }
  } else {
    if(index == 0) {
      index = totalImages - 1;
    } else {
      index--;
    }
  }

  for(let i = 0; i < images.length; i++) {
    images[i].classList.remove('main');
  }
  images[index].classList.add('main');
}












// const navBar = () => {
//     const elm = document.querySelector('.nav-bar-active-scroll');
//     const navScroll = document.querySelector('.nav-bar') 
//     let scrollPos = window.scrollY;

//     if(window.innerWidth > 960 && scrollPos < 0) {
//         // navScroll.classList.remove('.nav-bar-active-scroll')
//         navScroll.classList.toggle('inactive')
//     }

//     if(window.innerWidth > 960 && scrollPos < 80) {
//         // navScroll.classList.add('.nav-bar-active-scroll')
//         navScroll.classList.toggle('active')
//     }
// }






// // const navBar = document.querySelector('.nav-bar');

// window.addEventListener('scroll', navBar);
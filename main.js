// my code

// header off code
let header= document.querySelector('header');
let menu= document.querySelector('#menu-icon');
let navbar= document.querySelector('.navbar');

window.addEventListener('scroll', ()=>{
  header.classList.toggle('shadow',window.scrollY>0);
});

menu.onclick = () =>{
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

// to remove toggle data while user scroll
window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
}


/*swiper code */

var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    
  });


  /*swiper code for coming soon */
  var swiper = new Swiper(".coming-container", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
      delay: 55000,
      disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints:{
      0: {
        slidesPerView: 2,
      },
      568: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      968: {
        slidesPerView: 5,
      },
    },
  });


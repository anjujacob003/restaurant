
let menus =  document.querySelector("nav");
let menuBtn =  document.querySelector(".menu-btn");
let closeBtn =  document.querySelector(".close-btn");

menuBtn.addEventListener("click",function(){
    menus.classList.add("active");
})

closeBtn.addEventListener("click",function(){
    menus.classList.remove("active");
})


//---------Swiper JS Code----//
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  breakpoints:{
    0:{
        slidePerView: 1,
    },
    768:{
        slidePerView: 2,
    },
    968:{
        slidePerView: 3,
    },
    }
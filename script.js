let navbar = document.querySelector('.header .navbar');
let menu = document.querySelector('#menu');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}


$(document).ready(function(){
    $('.buttons').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        var filter = $(this).attr('data-filter')
        if(filter == "all"){
            $('.diet .box').show(400);
        }
        else{
            $('.diet .box').not('.' + filter) .hide(200);
            $('.diet .box').filter('.' + filter) .show(400);
        }
    });
});

var swiper = new Swiper('.review-slider',{
    loop: true,
    slidesPerView: 3,
    spaceBetween:20,
    grabCursor:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    breakpoints:{
        0:{
            slidesPreView: 1,
        },
        640:{
            slidesPreView: 2,
        },
        768:{
            slidesPreView: 3,
        },
    },
});
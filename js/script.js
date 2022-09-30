
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 6,
    spaceBetween: 25,
    // direction: 'vertical',
    loop: false,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  
    breakpoints:{
                  0: {
                      slidesPerView: 1,
                  },
                  520: {
                      slidesPerView: 2,
                  },
                  750: { 
                      slidesPerView: 3,
                  },
                  1280: {
                      slidesPerView: 4,
                  },
                  // 1440: {
                  //     slidesPerView: 5,
                  // },
              },
  
  });
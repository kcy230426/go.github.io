var swiper = new Swiper("#section .swiper", {
    spaceBetween: 30,
    effect: "fade",
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },

      pagination: {
        el: '.swiper-pagination',
      },
    
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
      scrollbar: {
        el: '.swiper-scrollbar',
      },
  });
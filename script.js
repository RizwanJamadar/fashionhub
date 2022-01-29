let searchbox = document.querySelector('.search_form');

document.querySelector('#search-btn').onclick = () => {
  searchbox.classList.toggle('active');
}


var swiper = new Swiper(".home_slider", {
  centeredSlides: true,
  loop:true,
  autoplay: {
      delay: 5000,
      disableOnInteraction: false,
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
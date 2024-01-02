function menuTogle() {
    let navbar = document.getElementById("navbar");
    navbar.classList.toggle('navOpen');
  }

  function show(elementID) {
    let description = document.getElementById(elementID);
    description.classList.toggle('expanded');
}


// Inisialisasi Swiper
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto', // Menggunakan 'auto' agar Swiper menyesuaikan jumlah slide yang tampil
    spaceBetween: 20,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      // Untuk layar yang lebih kecil dari 768px (tampilan mobile)
      768: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      // Untuk layar yang lebih besar dari 1200px (tampilan desktop)
      1200: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    },
  });
  
  
  
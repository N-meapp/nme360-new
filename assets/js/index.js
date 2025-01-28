

//  scroll card
  // const scrollContainer = document.querySelector('.scroll-container');
  // const nextButton = document.getElementById('next');
  // const prevButton = document.getElementById('prev');

  // nextButton.addEventListener('click', () => {
  //   scrollContainer.scrollBy({
  //     left: 300, 
  //     behavior: 'smooth',
  //   });
  // });

  // prevButton.addEventListener('click', () => {
  //   scrollContainer.scrollBy({
  //     left: -300, 
  //     behavior: 'smooth',
  //   });
  // });






// projects slide
const carousel = document.getElementById("carousel");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let currentIndex = 0;
const totalItems = 2;

const updateCarousel = () => {
  const translateXValue = -currentIndex * 100;
  carousel.style.transform = `translateX(${translateXValue}%)`;
};

nextBtn.addEventListener("click", () => {
  if (currentIndex < totalItems - 1) {
    currentIndex++;
    updateCarousel();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});




//menubar
// const menuBtn = document.getElementById('menu-btn');
// const mobileMenu = document.getElementById('mobile-menu');

// menuBtn.addEventListener('click', () => {
//   mobileMenu.classList.toggle('hidden');
// });


  document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    menuBtn.addEventListener("click", function () {
      mobileMenu.classList.toggle("hidden");
    });
  });




//cardslider
document.getElementById('cardContainer').addEventListener('click', function(event) {
  const container = document.getElementById('cardContainer');
  const cardWidth = container.querySelector('div').offsetWidth;
  const scrollAmount = cardWidth + 24; 

  container.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
      
  });

  setTimeout(() => {
      const firstCard = container.querySelector('div:first-child');
      container.appendChild(firstCard);
      container.scrollBy({
          left: -scrollAmount,
          behavior: 'instant'
      });
  }, 500); 
});


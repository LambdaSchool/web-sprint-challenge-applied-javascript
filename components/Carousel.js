/*
  STRETCH GOAL
  STRETCH GOAL
  STRETCH GOAL

  If You've gotten this far, you're on your own! Although we will give you some hints:

    3. Create a current index
    4. Those buttons are gonna need some click handlers
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="https://tk-assets.lambdaschool.com/ba687af4-3a1e-43d7-87b2-f30453264c9d_mountains.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/8aa075b0-67cf-47ce-9a7f-8cc9d754675d_computer.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/5b7441c6-6e4b-4feb-a4ec-8dd2eb76238a_trees.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/0b770382-d0eb-4465-8bf2-692a79fcda71_turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

// 1. You will need to write a function that creates the carousel component, you will find the HTML below.

function Carousel (urls) {
    // create elements
    let carousel = document.createElement('div');
    let leftButton = document.createElement('div');
    let rightButton = document.createElement('div');

    // create image elements with loop over
    let urlsArray = urls;
    for (let i = 0; i < urlsArray.length; i++) {
      let image = document.createElement('img');
      image.src = urlsArray[i];
      image.classList.add('slide'); // will use class .slide later to pull out images
      carousel.appendChild(image);
      // console.log(image);  // creates image correctly
    }; // end of loop

    // assign classes
    carousel.classList.add('carousel');
    leftButton.classList.add('left-button');
    rightButton.classList.add('right-button');

    // add event listener to buttons
    leftButton.addEventListener('click', (event) => {
      indexIncrementor(-1);
      previousSlide();
    });
    rightButton.addEventListener('click', (event) => {
      indexIncrementor(1);
      nextSlide();
    });

    // append to heirarchy
    carousel.appendChild(leftButton);
    carousel.appendChild(rightButton);

    // return statement
    return carousel;
};

// 2. You will need to grab a reference to all of the images

let url1 = "https://tk-assets.lambdaschool.com/ba687af4-3a1e-43d7-87b2-f30453264c9d_mountains.jpeg";
let url2 = "https://tk-assets.lambdaschool.com/8aa075b0-67cf-47ce-9a7f-8cc9d754675d_computer.jpeg";
let url3 = "https://tk-assets.lambdaschool.com/5b7441c6-6e4b-4feb-a4ec-8dd2eb76238a_trees.jpeg";
let url4 = "https://tk-assets.lambdaschool.com/0b770382-d0eb-4465-8bf2-692a79fcda71_turntable.jpeg";

let urls = [url1, url2, url3, url4];

//  coding the carousel functionality ---------------------------------------------------------------------------

// invoke Carousel function, append to hmtl
let carouselContainer = document.querySelector('.carousel-container');  
carouselContainer.appendChild(Carousel(urls));

// console.log("Carousel Function: ", Carousel(urls));   // function returns correctly

// select all slides, set to variable slides as an array of 4 images
let slides = document.querySelectorAll('.slide');
console.log("Slides: ", slides);  // returns a NodeList array of 4 images

let carouselIndex = 0; // global variable, initial value of 0

function indexIncrementor(changeIndex) {
  // increment the global index
  let carouselIndex = carouselIndex + changeIndex;

  // check if index is valid (b/t 0 & 3), reset if not
  if (carouselIndex > (slides.length - 1) {
    carouselIndex = 0;
  } else if (carouselIndex < 0) {
    carouselIndex = (slides.length - 1);
  };

};

function refreshCarousel() {

  // all slides are hidden except the carouselIndex
  for (let i = 0; i < slides.length; i++) {
    if (i === carouselIndex) {
      slide[i].style.display = "block";
    } else {
      slide[i].style.display = "none";
    };
  };  // end of for loop
};

function nextSlide() {

  refreshCarousel();

};

function previousSlide() {

  refreshCarousel();

};

// event listener for window on load, refresh the carousel

window.addEventListener('load', (event) => {
  function refreshCarousel();
});



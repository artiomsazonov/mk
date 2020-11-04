 import './owl.carousel.js';
 import './owl.carousel.min.js'

 // Corusel
 $(document).ready(function() {
     $('.owl-carousel_gallery').owlCarousel({
         loop: true,
         margin: 2,
         nav: true,
         navText: ["", ""],
         dots: false,
         responsive: {
             1000: {
                 items: 1
             }
         }
     });

     $('.owl-carousel_reviews').owlCarousel({
         loop: true,
         margin: 30,
         nav: true,
         navText: ["", ""],
         dots: true,
         responsive: {
             600: {
                 items: 1
             },
             1000: {
                 items: 2
             }
         }
     });
 });

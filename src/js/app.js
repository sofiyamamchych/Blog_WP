import sayHello from './lib/sayHello.js';
import 'slick-carousel'; //from './lib/sayHello.js';

sayHello();


$(document).ready(function() {
  $('.postsarea__carousel').slick({
    autoplay: true,
    prevArrow: '.carousel__prevpng',
    nextArrow: '.carousel__nextpng'
  });
});

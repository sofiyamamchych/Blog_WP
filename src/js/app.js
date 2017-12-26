import sayHello from './lib/sayHello.js';
import 'slick-carousel'; //from './lib/sayHello.js';

sayHello();


$(document).ready(function() {
  $('.postsarea__carousel').slick({
    autoplay: true,
    prevArrow: '.icon-prev',
    nextArrow: '.icon-next'
  });
});

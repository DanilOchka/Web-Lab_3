$(document).ready(function () {

   $('.header__burger').click(function (event) {
      $('.header__burger, .hrader__menu, .logo, .name').toggleClass('active');
      $('body').toggleClass('lock');
   });
   $('.header__list').click(function (event) {
      $('.header__burger,.hrader__menu').removeClass('active');
      $('body').removeClass('lock');
   })


});
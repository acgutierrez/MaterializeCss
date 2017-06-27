$(document).ready(function(){

      $(".button-collapse").sideNav();

      $('.materialboxed').materialbox(); // gallery picture

      //when scrolling
      $(function () {
      $(document).scroll(function () {
        var $nav = $("nav");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      });
      });

      // modal
      $('.modal').modal();


});

// WOW.JS
new WOW().init();

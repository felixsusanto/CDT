$(document).ready(function(){
  //**NAVBAR
  //Scroll spy
  $('body').scrollspy({ target: '#navbar-spy' });
  //**SMOOTH SCROLLING
  //init code for smooth scrolling
  smoothScroll.init();
  //**PARALLAX
  //parallax only if browser in desktop
  if(!Modernizr.touch){$('#portfolio').enllax();};
  
  //**WAYPOINT JS
  //Scrolling trigger something
  // $('#team').waypoint(function(){
  //   $('#team .circle').addClass('bounceIn');
  // });
  //**PORTFOLIO
  //Plugin setup for portfolio section
  var $container = $('.grid');

  // preventing top scroll for buttons
  $('a[href="#"]').click(function(e){e.preventDefault();});

  // filter items on button click
  $('.control').on( 'click', 'a', function() {
    var filterValue = $(this).attr('data-filter');
    $container.isotope({ filter: filterValue });
  });

  // initializing isotope when all image are ready
  $container.imagesLoaded(function(){
    $container.isotope({
      itemSelector: '.element-item',
      sortBy:'random'
    });
  });
});

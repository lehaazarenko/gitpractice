$(document).ready(function(){
    
    /* For the sticky navigation */
    $('.jsSectionFeatures').waypoint(function(direction) {
        if (direction == "down") {
                $('nav').addClass('sticky');
            } else {
                $('nav').removeClass('sticky');
            }
    }, {
        offset: '60px;'
    })
    
    
    /* For scroll buttons */
    $('.jsScrollToPlans').click(function() {
        $('html , body').animate({scrollTop: $('.jsSectionPlans').offset().top}, 1000)
    })
    
    $('.jsScrollToFeatures').click(function() {
        $('html , body').animate({scrollTop: $('.jsSectionFeatures').offset().top}, 1000)
    })
    
    // Select all links with hashes
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
          && 
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }
      });
    
    /* Animations on scroll */
    $('.jsWp1').waypoint(function(direction) {
        $('.jsWp1').addClass('animated fadeIn');
    }, {
        offset: '50%;'
    })
    
    $('.jsWp2').waypoint(function(direction) {
        $('.jsWp2').addClass('animated fadeInUp');
    }, {
        offset: '50%;'
    })
    
    $('.jsWp3').waypoint(function(direction) {
        $('.jsWp3').addClass('animated fadeIn');
    }, {
        offset: '50%;'
    })
    
    $('.jsWp4').waypoint(function(direction) {
        $('.jsWp4').addClass('animated pulse');
    }, {
        offset: '50%;'
    })
    
    
    /* Mobile navigation */
    
    $('.jsNavIcon').click(function() {
        var nav = $('.jsMainNav');
        var icon = $('.jsNavIcon i');
        
        nav.slideToggle(200);
        
        if (icon.hasClass('ion-navicon-round')) {
            icon.removeClass('ion-navicon-round');
            icon.addClass('ion-close-round');
        } else {
            icon.removeClass('ion-close-round');
            icon.addClass('ion-navicon-round');
        }
        
    })
    
    var map = new GMaps({
        div: '.map',
        lat: 53.9115614,
        lng: 27.65,//5943659,
        zoom: 13
    });
    
    map.addMarker({
        lat: 53.9115614,
        lng: 27.5943659,
        title: 'BSUIR',
        infoWindow: {
            content: '<p>Not quite correct</p>'
        }
    });
    
    
});  

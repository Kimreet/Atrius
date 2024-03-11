// team slider starts
document.addEventListener('DOMContentLoaded', function () {
var splide = new Splide( '#splide1', {
  type   : 'loop',
  perPage: 4,
  perMove: 1,
  breakpoints: {
		1200: {
			perPage: 3,
		},
    992: {
			perPage: 2,
		},
    588: {
			perPage: 1,
		},
  }
} );

splide.mount();
// team slider ends
// facilities slider
  var splide1 = new Splide('#splide', {
    direction: 'ttb', // 'ttb' for top to bottom direction
    height: '30rem',
    perPage: 2, // Display 2 slides at a time
    perMove: 1, // Move 1 slide at a time
    gap: '1.5rem' // Gap between slides
  })
  splide1.mount();
});
// facilities slider ends
// number slider
var splide2 = new Splide( '#splide3' );
splide2.mount();
// number slider ends
// story accordion autoplay 
function autoPlayAccordion() {
  var $accordions = $('.toggle');
  var $autoplayDiv = $('.autoplay'); 
  var maxAccordions = $accordions.length;
  var redWidth = 0;
  var currentIndex = 0;

  setInterval(function() {
    if (currentIndex === maxAccordions) {
      // Reset redWidth and currentIndex if all accordions are opened
      redWidth = 0;
      currentIndex = 0;
      
      // Close all accordion sections
      $accordions.each(function() {
        $(this).next().removeClass('show').slideUp(350);
      });
    } else {
      // Simulate a click on the next accordion toggle
      $accordions.eq(currentIndex).click();
      
      // Increase redWidth
      redWidth += 80; // Adjust the width based on your requirements

      // Calculate the percentage of red width
      var redPercentage = (redWidth / 320) * 100;
      var greyPercentage = 100 - redPercentage;

      // Set the width and background color dynamically
      $autoplayDiv.css({
        'width': redPercentage + '%',
        'background': 'linear-gradient(to right, #CE0539 ' + redPercentage + '%, #C9CED0 ' + greyPercentage + '%)'
      });

      currentIndex++;
    }
  }, 3000); // Adjust the interval as needed (in milliseconds)

  // Original accordion click handler
  $('.toggle').click(function(e) {
    e.preventDefault();
    $(this).parent().removeClass('active');
    $(this).parent().siblings().removeClass('active');
    var $this = $(this);

    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.next().slideUp(350);
    } else {
        $this.parent().parent().find('.inner').removeClass('show');
        $this.parent().toggleClass('active');
        $this.parent().parent().find('.inner').slideUp(350);
        $this.next().toggleClass('show');
        $this.next().slideToggle(350);
    }
  });
}

// Call the autoPlayAccordion function to start autoplay
autoPlayAccordion();
// story accordion autoplay ends
// mobile menu accordion
$(document).ready(function() {
  $(".set > a").on("click", function(e) {
      e.preventDefault();
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this)
        .siblings(".acccontent")
        .slideUp(200);
     
    } else {
      $(this)
        .find("i")
        .removeClass("fa-plus")
        .addClass("fa-minus");
      $(".set > a").removeClass("active");
      $(this).addClass("active");
      $(".acccontent").slideUp(200);
      $(this)
        .siblings(".acccontent")
        .slideDown(200);
    }
  });
});
// mobile menu accordion ends


// ham menu

$(document).ready(function(){
            $('#nav-icon1').click(function(){
                $(this).toggleClass('open'); // Toggle .open class on #nav-icon1
                $('.menu').toggleClass('open'); // Toggle .open class on .menu
            });
        });
// ham menu
// location dropdown
$(".list-unstyled").on("click", ".init", function() {
  $(this).closest(".list-unstyled").children('li:not(.init)').toggle();
});

var allOptions = $(".list-unstyled").children('li:not(.init)');
$(".list-unstyled").on("click", "li:not(.init)", function() {
  allOptions.removeClass('selected');
  $(this).addClass('selected');
  $(".list-unstyled").children('.init').html($(this).html());
  allOptions.toggle();
});
  

// Show loader
function showLoader() {
  const loader = document.querySelector('.loader');
  loader.classList.remove('loader-hidden');
}

// Hide loader
function hideLoader() {
  const loader = document.querySelector('.loader');
  loader.classList.add('loader-hidden');
}

// Example usage:
showLoader(); // Show loader
setTimeout(hideLoader, 3000); // Hide loader after 3 seconds (example)






var animationDelay = 2500;

animateHeadline($('.cd-headline'));

function animateHeadline($headlines) {
   $headlines.each(function(){
      var headline = $(this);
      //trigger animation
      setTimeout(function(){ hideWord( headline.find('.is-visible') ) }, animationDelay);
      //other checks here ...
   });
}
function hideWord($word) {
  var nextWord = takeNext($word);
  switchWord($word, nextWord);
  setTimeout(function(){ hideWord(nextWord) }, animationDelay);
}

function takeNext($word) {
  return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
}

function switchWord($oldWord, $newWord) {
  $oldWord.removeClass('is-visible').addClass('is-hidden');
  $newWord.removeClass('is-hidden').addClass('is-visible');
}



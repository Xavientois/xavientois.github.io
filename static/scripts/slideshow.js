// Constants
var interval = 7000; // Time interval for slides
var slideIndex = 0; // Index of current slide

// Increment to next slide
function incSlide(n = 1) {
  showSlide(slideIndex += n);
}

function showSlide(n) {
  let slideCount = $(".slide").length;
  $(".slide").each(function(index){
    if(index % slideCount === n % slideCount){
      $(".slide").eq(index).show();
      $(".slideBtn").eq(index).css("background-color", "#ccc");
    }else{
      $(".slide").eq(index).hide();
      $(".slideBtn").eq(index).css("background-color", "#9495a5");
    }
  });
}

$(".slideBtn").on("click", function(index){
  showSlide($(".slideBtn").index(this));
  // Reset slide auto-increment timer
  clearInterval(slideInterval);
  slideInterval = setInterval(incSlide, interval);
});

showSlide(slideIndex);
var slideInterval = setInterval(incSlide, interval);

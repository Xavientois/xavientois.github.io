// Change the highlighting of the nav bar on scroll
$(window).on('scroll', function(){
  // Check for home section
  if($(window).scrollTop() >= $('#home').offset().top) {
    $('nav a').removeClass('w3-black');
    $("a[href='#home']").addClass('w3-black');
  }

  $('.content').each(function() {
    // Only active the last nav where the window is above top
    if($(window).scrollTop() >= $(this).offset().top) {
      $('nav a').removeClass('w3-black');
      $("a[href='#"+ $(this).attr('id')+"']").addClass('w3-black');
    }
  });
});

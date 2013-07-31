


$(document).ready( function() {
    $('#header').attr('left', $('#header').attr('left'));

    $(window).scroll( function() {
        if ($(window).scrollTop() >= $('#header-wrapper').offset().top)
            $('#header').addClass('floating');
        else
            $('#header').removeClass('floating');
    } );

} );


$(document).ready(function(){
  $('a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target
      || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body')
        .animate({scrollTop: targetOffset}, 1000);
       return false;
      }
    }
  });
});

(function ($) {
  "use strict";

  var scrollTo = function(element, duration, callback) {
    duration = duration || 500;
    callback = callback || function() { };

    var offset = element.offset().top;
        offset = (offset > 20) ? (offset - 20) : offset;

    $('html,body').stop().animate({ scrollTop: offset }, duration, callback);
  };

  $(document).ready(function() {
    $(".post-content").fitVids();

    // Calculates Reading Time
    $('.post-content').readingTime({
      readingTimeTarget: '.post-reading-time',
      wordCountTarget: '.post-word-count',
    });

    // Creates anchors links on headers
    $(".post-content :header[id]").each(function() {
      var target = $(this).attr('id'),
          $anchor;

      $anchor = $('<a href="#' + target + '" class="header-anchor"><i class="fa fa-link"></i></a>');
      $anchor.on('click', function(e) {
        e.stopPropagation();
        scrollTo($(this), null, function() { location.hash = target; });
        return false;
      });

      $(this).prepend($anchor);
    });

    // Creates Captions from Alt tags
    $(".post-content img:not(.emoji)").each(function() {
      // Let's put a caption if there is one
      if ($(this).attr("alt"))
        $(this).wrap('<figure class="image"></figure>')
          .after('<figcaption>'+$(this).attr("alt")+'</figcaption>');
    });

    var $window = $(window),
    $image = $('.post-image-image, .teaserimage-image');
    $window.on('scroll', function() {
      var top = $window.scrollTop();
      if (top < 0 || top > 1500) { return; }
      $image
        .css('transform', 'translate3d(0px, '+top/3+'px, 0px)')
        .css('opacity', 1-Math.max(top/700, 0));
    });
    $window.trigger('scroll');

    var height = $('.article-image').height();
    $('.post-content').css('padding-top', height + 'px');

    // Scroll to anchor
    $('a[href*=#]:not([href=#]):not(.header-anchor)').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

        if (target.length) {
          scrollTo(target);
          return false;
        }
      }
    });
  });
}(jQuery));

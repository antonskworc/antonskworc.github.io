$(window).load(function() {
	
    // Scroll to top
    var scrollTimeout;

    $('a.scroll-top').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
	
	$(window).scroll(function () {
        clearTimeout(scrollTimeout);
        if ($(window).scrollTop() > 400) {
            scrollTimeout = setTimeout(function () {
                $('a.scroll-top:hidden').fadeIn()
            }, 100);
        } else {
            scrollTimeout = setTimeout(function () {
                $('a.scroll-top:visible').fadeOut()
            }, 100);
        }
    });
	
	// Smooth Scrolling https://css-tricks.com/snippets/jquery/smooth-scrolling/
    $(function () {
        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
});
$(window).load(function() {
    //projects spoiler

    $('.timeline-item-trigger i').click(function () {
        if ($(this).hasClass('fa fa-plus')) {
            $(this).parent().parent().find('.timeline-item-content-spoiler').toggle(300);
            $(this).removeClass('fa fa-plus').addClass('fa fa-minus');
        } else {
            $(this).parent().parent().find('.timeline-item-content-spoiler').toggle(300);
            $(this).removeClass('fa fa-minus').addClass('fa fa-plus');
        }
    });

    $('.timeline-item-content > h3').click(function () {
        $trigger = $(this).parent().parent().find('.timeline-item-trigger i');
        if ($trigger.hasClass('fa fa-plus')) {
            $trigger.removeClass('fa fa-plus').addClass('fa fa-minus');
            $(this).parent().find('.timeline-item-content-spoiler').toggle(300);
        } else {
            $trigger.removeClass('fa fa-minus').addClass('fa fa-plus');
            $(this).parent().find('.timeline-item-content-spoiler').toggle(300);

        }
    });
    
    // Scroll to top
    var scrollTimeout;

    $('a.scroll-top').click(function () {
        $('html, body').animate({
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
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
});

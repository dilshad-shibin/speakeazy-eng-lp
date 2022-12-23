// Index of jQuery Active Code

// :: 1.0 PRELOADER ACTIVE CODE
// :: 2.0 NAVIGATION MENU ACTIVE CODE
// :: 3.0 SCROLL TO TOP ACTIVE CODE
// :: 4.0 SCROLL LINK ACTIVE CODE
// :: 5.0 SMOOTH SCROLLING ACTIVE CODE
// :: 7.0 AOS ACTIVE CODE
// :: 8.0 PREVENT DEFAULT ACTIVE CODE
// :: 14.0 FANCYBOX IMAGE GALLERY

(function($) {
    'use strict';

    var $window = $(window);
    var zero = 0;

    // :: 1.0 PRELOADER ACTIVE CODE
    $window.on('load', function() {
        $('#preloader').fadeOut('slow', function() {
            $(this).remove();
        });
    });

    // :: 2.0 NAVIGATION MENU ACTIVE CODE
    function navMenu() {

        // MAIN MENU TOGGLER ICON (MOBILE SITE ONLY)
        $('[data-toggle="navbarToggler"]').click(function() {
            $('.navbar').toggleClass('active');
            $('body').toggleClass('canvas-open');
        });
        // MAIN MENU TOGGLER ICON
        $('.navbar-toggler').click(function() {
            $('.navbar-toggler-icon').toggleClass('active');
        });

        // NAVBAR STICKY
        var $stickyNav = $(".navbar-sticky");

        $(window).on("scroll load", function() {
            var scroll = $(window).scrollTop();
            if (scroll >= 120) {
                $stickyNav.addClass("navbar-sticky-moved-up");
            } else {
                $stickyNav.removeClass("navbar-sticky-moved-up");
            }
            // apply transition
            if (scroll >= 250) {
                $stickyNav.addClass("navbar-sticky-transitioned");
            } else {
                $stickyNav.removeClass("navbar-sticky-transitioned");
            }
            // sticky on
            if (scroll >= 500) {
                $stickyNav.addClass("navbar-sticky-on");
            } else {
                $stickyNav.removeClass("navbar-sticky-on");
            }

        });
    }
    navMenu();

    // :: 3.0 SCROLL TO TOP ACTIVE CODE
    var offset = 300;
    var duration = 500;

    $window.on('scroll', function() {
        if ($(this).scrollTop() > offset) {
            $("#scrollUp").fadeIn(duration);
        } else {
            $("#scrollUp").fadeOut(duration);
        }
    });

    $("#scrollUp").on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, duration);
    });

    // :: 4.0 SCROLL LINK ACTIVE CODE
    var scrollLink = $('.scroll');

    // SCROLLSPY ACTIVE CODE
    $('body').scrollspy({
        target: '#appo-header'
    });

    // :: 5.0 SMOOTH SCROLLING ACTIVE CODE
    scrollLink.on('click', function(e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });

    // :: 7.0 AOS ACTIVE CODE
    AOS.init();

    // :: 8.0 PREVENT DEFAULT ACTIVE CODE
    $("a[href='#']").on('click', function($) {
        $.preventDefault();
    });

    // :: 14.0 FANCYBOX IMAGE GALLERY
    $('[data-fancybox="images"]').fancybox({
        afterLoad: function(instance, current) {
            var pixelRatio = window.devicePixelRatio || 1;

            if (pixelRatio > 1.5) {
                current.width = current.width / pixelRatio;
                current.height = current.height / pixelRatio;
            }
        }
    });

    $('[data-fancybox]').fancybox({
        youtube: {
            controls: true,
            showinfo: 0
        },
        vimeo: {
            color: 'f00'
        }
    });


    // :: 0.0 work SLIDER ACTIVE CODE
    $('.work-slider.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        smartSpeed: 2000,
        autoplay: false,
        navText: ['<img src="assets/img/nav-arrow-left.png">', '<img src="assets/img/nav-arrow-right.png">'],
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            }
        }
    });

    // :: 0.0 testi SLIDER ACTIVE CODE
    $('.testi-slider.owl-carousel').owlCarousel({
        loop: true,
        margin: 100,
        nav: false,
        dots: true,
        smartSpeed: 2000,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 2
            },
            1140: {
                items: 2
            }
        }
    });

    // :: 0.0 CLIENT SLIDER ACTIVE CODE
    $('.clients-slider.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        smartSpeed: 2000,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 3,
            },
            576: {
                items: 3
            },
            768: {
                items: 3
            }
        }
    });

    // :: 0.0 Media SLIDER ACTIVE CODE
    $('.media-slider.owl-carousel').owlCarousel({
        loop: false,
        margin: 0,
        nav: true,
        dots: false,
        smartSpeed: 2000,
        autoplay: false,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 1
            },
            768: {
                items: 1
            },
            991: {
                items: 1
            }
        }
    });

    // :: 0.0 Short testi SLIDER ACTIVE CODE
    $('.short-slider.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        smartSpeed: 2000,
        autoplay: false,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 1
            },
            768: {
                items: 1
            },
            991: {
                items: 1
            }
        }
    });

    // :: 0.0 Right testi SLIDER ACTIVE CODE
    $('.right-testi-slider.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        smartSpeed: 2000,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 1
            },
            768: {
                items: 1
            },
            991: {
                items: 1
            }
        }
    });

    // :: 0.0 Success SLIDER ACTIVE CODE
    $('.success-slider.owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: false,
        smartSpeed: 2000,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 1
            },
            768: {
                items: 1
            },
            991: {
                items: 1
            }
        }
    });

    // faq accrodion

    if ($('.accrodion-grp').length) {
        var accrodionGrp = $('.accrodion-grp');
        accrodionGrp.each(function() {
            var accrodionName = $(this).data('grp-name');
            var Self = $(this);
            var accordion = Self.find('.accrodion');
            Self.addClass(accrodionName);
            Self.find('.accrodion .accrodion-content').hide();
            Self.find('.accrodion.active').find('.accrodion-content').show();
            accordion.each(function() {
                $(this).find('.accrodion-title').on('click', function() {
                    if ($(this).parent().parent().hasClass('active') === false) {
                        $('.accrodion-grp.' + accrodionName).find('.accrodion').removeClass('active');
                        $('.accrodion-grp.' + accrodionName).find('.accrodion').find('.accrodion-content').slideUp();
                        $(this).parent().parent().addClass('active');
                        $(this).parent().parent().find('.accrodion-content').slideDown();
                    };

                });
            });
        });
    };



    // :: 0.0 SHOW-LESS ACTIVE CODE

    // testimonialSlider.on("translate.owl.carousel", function () {
    //     $(".single-testimonial img, .single-testimonial-thumb img, .client-rating").removeClass("animated zoomIn").css("opacity", "0");
    // });
    // testimonialSlider.on("translated.owl.carousel", function () {
    //     $(".single-testimonial img, .single-testimonial-thumb img, .client-rating").addClass("animated zoomIn").css("opacity", "1");
    // });
    // $('.thumb-next').on('click', function () {
    //     testimonialSlider.trigger('next.owl.carousel', [300]);
    //     return false;
    // });
    // $('.thumb-prev').on('click', function () {
    //     testimonialSlider.trigger('prev.owl.carousel', [300]);
    //     return false;
    // });

    // :: 9.0 COUNTERUP ACTIVE CODE
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // :: 15.0 CONTACT FORM ACTIVE CODE
    // Get the form.
    var form = $('#contact-form');
    // Get the messages div.
    var formMessages = $('.form-message');
    // Set up an event listener for the contact form.
    $(form).submit(function(e) {
        // Stop the browser from submitting the form.
        e.preventDefault();
        // Serialize the form data.
        var formData = $(form).serialize();
        // Submit the form using AJAX.
        $.ajax({
                type: 'POST',
                url: $(form).attr('action'),
                data: formData
            })
            .done(function(response) {
                // Make sure that the formMessages div has the 'success' class.
                $(formMessages).removeClass('error');
                $(formMessages).addClass('success');

                // Set the message text.
                $(formMessages).text(response);

                // Clear the form.
                $('#contact-form input,#contact-form textarea').val('');
            })
            .fail(function(data) {
                // Make sure that the formMessages div has the 'error' class.
                $(formMessages).removeClass('success');
                $(formMessages).addClass('error');

                // Set the message text.
                if (data.responseText !== '') {
                    $(formMessages).text(data.responseText);
                } else {
                    $(formMessages).text('Oops! An error occured and your message could not be sent.');
                }
            });
    });

}(jQuery));
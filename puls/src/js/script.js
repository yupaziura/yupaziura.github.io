$(document).ready(function(){
    $('.carusel__inner').slick({
        speed: 1200,
        adaptiveHeight: false,
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/icons/chevron_left_solid.svg"/></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/icons/chevron_right_solid.svg"/></button>'
    });

    $('ul.catalog__list').on('click', 'li:not(.catalog__item_active)', function() {
        $(this)
          .addClass('catalog__item_active').siblings().removeClass('catalog__item_active')
          .closest('div.container').find('div.catalog__cards').removeClass('catalog__cards_active').eq($(this).index()).addClass('catalog__cards_active');
      });



    function toggleSlide (item) {
        $(item).each(function(i){
            $(this).on('click',function (e) {
                e.preventDefault();
                $('.catalog-card__main').eq(i).toggleClass('catalog-card__main_active');
                $('.catalog-card__secondary').eq(i).toggleClass('catalog-card__secondary_active');
            })
        })
    }

    toggleSlide('.catalog-card__details');
    toggleSlide('.catalog-card__back');

    //MODAL

    $('[data-modal=consult]').on('click', function(){
        $('.overlay, #consult').fadeIn();
    })

    $('.modal__close').on('click', function (){
        $('.overlay, #consult, #success, #order').fadeOut();
    })

    $('.button_catalog').each(function(i){
        $(this).on('click', function (){
            $('#order .modal__descr').text($('.catalog-card__title').eq(i).text());
            $('.overlay, #order').fadeIn();
        })
    })


    function validForm (form) {
        $(form).validate({
            rules: {
                name: 'required',
                phone: 'required',
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: "Enter name",
                email: {
                    required: "Enter valid email",
                    email: "Must be valid"
                },
                phone: "Enter phone"
            }
        }); 
    };

    validForm('#main-form');
    validForm('#order .form');
    validForm('#consult .form');

    $('input[name=phone]').mask("+380 99 999 99 99")

    $(window).scroll(function (){
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        }
        else {
            $('.pageup').fadeOut();
        }
    })

    new WOW().init();

    function hoverAnimate (item, newClass) {
        
            $(item).hover(function (e) {
                
                $(item).addClass(newClass);
            })

            $(item).mouseleave(function (e) {
                
                $(item).removeClass(newClass);
            })
        
    }

    hoverAnimate('[data-anim=cup]', 'animate__animated  animate__bounce');
    hoverAnimate('[data-anim=heart]', 'animate__animated  animate__heartBeat');
    hoverAnimate('[data-anim=shoe]', 'animate__animated  animate__swing');



  });
      
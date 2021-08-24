var interval = null;
var m_bPreviousTest = true;

function slideSwitch() {
    // var $menuActive = $('#slider-menu').find('DIV.slider-menu-active');
    // var $menuNext = $menuActive.next().length ? $menuActive.next()
    //     : $('#slider-menu1');

    var $sliderActive = $('#slider').find('DIV.slider-active');
    var $sliderNext = $sliderActive.next().length ? $sliderActive.next()
        : $('#slider1');

    // $menuNext.addClass('slider-menu-active').removeClass('hidden-xs hidden-sm');
    // $menuActive.removeClass('slider-menu-active').addClass('hidden-xs hidden-sm');

    $sliderActive.addClass('last-active');

    $sliderNext.css({opacity: 0.0})
        .removeClass('hidden').addClass('slider-active')
        .animate({opacity: 1.0}, 1000, function() {
            $sliderActive.removeClass('slider-active last-active').addClass('hidden');
            m_bPreviousTest = true;
        });
}

// function buttonSwitch($id) {
//     if (m_bPreviousTest == false) return;
//
//     m_bPreviousTest = false;
//
//     var $menuActive = $('#slider-menu').find('DIV.slider-menu-active');
//     var $menuNext = $('#slider-menu' + $id);
//
//     if ($menuActive.attr('id') == 'slider-menu' + $id) return;
//
//     var $sliderActive = $('#slider').find('DIV.slider-active');
//     var $sliderNext = $('#slider' + $id);
//
//     $menuNext.addClass('slider-menu-active');
//     $menuActive.removeClass('slider-menu-active');
//
//     $sliderActive.addClass('last-active');
//
//     $sliderNext.css({opacity: 0.0})
//         .removeClass('hidden').addClass('slider-active')
//         .animate({opacity: 1.0}, 1000, function() {
//             $sliderActive.removeClass('slider-active last-active').addClass('hidden');
//             m_bPreviousTest = true;
//         });
//
//     clearInterval(interval);
//     interval = setInterval( 'slideSwitch()', 5000 );
// }

$(function() {
    interval = setInterval( 'slideSwitch()', 5000 );
});
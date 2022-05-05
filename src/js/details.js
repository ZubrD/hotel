$('.js-header-burger').on('click', function(){
    $('.js-substrate').toggleClass('substrate-burger')
    if($('.js-right-menu-list').css('display') ==  'none') {
        $('.js-right-menu-list').addClass('display-block')
        $('.js-right-menu-list').removeClass('display-none')
    } else {
        if($('.js-right-menu-list').css('display') ==  'block') {
            $('.js-right-menu-list').removeClass('display-block')
            $('.js-right-menu-list').addClass('display-none') 
        }
    }
    $('.js-right-menu-list').toggleClass('right-menu-list-burger')
    $('.js-right-menu__link').toggleClass('right-menu__link-burger')
    $('.js-right-menu__item').toggleClass('right-menu__item-burger')
})

$('.header-burger').on('click', function(){
    $('.substrate').toggleClass('substrate-burger')
    if($('.right-menu-list').css('display') ==  'none') {
        $('.right-menu-list').addClass('display-block')
        $('.right-menu-list').removeClass('display-none')
    } else {
        if($('.right-menu-list').css('display') ==  'block') {
            $('.right-menu-list').removeClass('display-block')
            $('.right-menu-list').addClass('display-none') 
        }
    }
    $('.right-menu-list').toggleClass('right-menu-list-burger')
    $('.right-menu__link').toggleClass('right-menu__link-burger')
    $('.right-menu__item').toggleClass('right-menu__item-burger')
})

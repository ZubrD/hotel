import datepicker from "air-datepicker"

$('#calendar').datepicker({
    position: "bottom right",
    range: true,
    minDate: new Date(),
    inline: true,
    navTitles: {
        days: 'MM yyyy'
    },
    onSelect(formattedDate, date, inst) {
        console.log(date)
        if (date[0]) {
            let month_1 = parseInt(date[0].getMonth(), 10) + 1;
            $('#date_1').val(date[0].getDate() + '.' + month_1 + '.' + date[0].getFullYear());
        }
        if (date[1]) {
            let month_2 = parseInt(date[1].getMonth(), 10) + 1;
            $('#date_2').val(date[1].getDate() + '.' + month_2 + '.' + date[1].getFullYear());
        }
    }
})

$('.datepicker__clear').on('click', function(){
    $('#date_1').val('');
    $('#date_2').val('');
})

$('.datepicker__ok').on('click', function(){
    $('.datepicker-form').hide()
})

$('.dates-form__input').on('click', function(){
    $('.datepicker-form').show()
    console.log('Is this working?');
})


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






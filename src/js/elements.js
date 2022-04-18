import $ from "jquery";

// new AirDatepicker('#input', {
//   inline: true
// })

$('#calendar').datepicker({
    position: "bottom right",
    range: true,
    minDate: new Date(),
    inline: true,
    navTitles: {
        days: 'MM yyyy'
    },
    onSelect(formattedDate, date, inst) {
        month_1 = parseInt(date[0].getMonth(), 10) + 1;
        month_2 = parseInt(date[1].getMonth(), 10) + 1;
        $('#date_1').val(date[0].getDate() + '.' + month_1 + '.' + date[0].getFullYear());
        $('#date_2').val(date[1].getDate() + '.' + month_2 + '.' + date[1].getFullYear());
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

$(function() {
    $('.iqdropdown').iqDropdown();
})

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





//////////////////////////////////////////СПАЛЬНИ/////////////////////////////////////////////////////////////////

$('#plus-sleep').on('click', function(){
    let value = parseInt($('.amenity-form__input').attr('sleep'))
    if (value < 3) {
        value = value + 1
        $('.amenity-form__input').attr({'sleep': value})        
    }
    if (value > 0) {
        $('#minus-sleep').css('border', '1px solid rgba(31, 32, 65, 0.25)')
    }
    $('.amenity-form__input').val(my_select())
    $('#sleep-result').text(value)
})

$('#minus-sleep').on('click', function(){
    let value = $('.amenity-form__input').attr('sleep')
    if (value != 0) {
        value = value - 1
        $('.amenity-form__input').attr({'sleep': value})         
    } 
    if (value == 0) {
         $(this).css('border', '1px solid rgba(31, 32, 65, 0.1)')
    }
    $('.amenity-form__input').val(my_select())
    $('#sleep-result').text(value)
})

/////////////////////////////////////////////////////КРОВАТИ///////////////////////////////////////////////////////

$('#plus-bed').on('click', function(){
    let value = parseInt($('.amenity-form__input').attr('bed'))
    if (value < 6) {
        value = value + 1
        $('.amenity-form__input').attr({'bed': value})        
    }
    if (value > 0) {
        $('#minus-bed').css('border', '1px solid rgba(31, 32, 65, 0.25)')
    }    
    $('.amenity-form__input').val(my_select())
    $('#bed-result').text(value)
})

$('#minus-bed').on('click', function(){
    let value = $('.amenity-form__input').attr('bed')
    if (value != 0) {
        value = value - 1
        $('.amenity-form__input').attr({'bed': value})         
    }
    if (value == 0) {
        $(this).css('border', '1px solid rgba(31, 32, 65, 0.1)')
   }     
    $('.amenity-form__input').val(my_select())
    $('#bed-result').text(value)
})

////////////////////////////////////////////////////////ВАННЫЕ КОМНАТЫ//////////////////////////////////////////////

$('#plus-bath').on('click', function(){
    let value = parseInt($('.amenity-form__input').attr('bath'))
    if (value < 3) {
        value = value + 1
        $('.amenity-form__input').attr({'bath': value})        
    }
    if (value > 0) {
        $('#minus-bath').css('border', '1px solid rgba(31, 32, 65, 0.25)')
    }    
    $('.amenity-form__input').val(my_select())
    $('#bath-result').text(value)
})

$('#minus-bath').on('click', function(){
    let value = $('.amenity-form__input').attr('bath')
    if (value != 0) {
        value = value - 1
        $('.amenity-form__input').attr({'bath': value})         
    }
    if (value == 0) {
        $(this).css('border', '1px solid rgba(31, 32, 65, 0.1)')
    }    
    $('.amenity-form__input').val(my_select())
    $('#bath-result').text(value)
})

$('.amenity-form__input').on('focus', function(){
    $('.amenity-block').toggleClass('block-open')
}) 

function my_select() {
    sleep = parseInt($('.amenity-form__input').attr('sleep'))
    bed = parseInt($('.amenity-form__input').attr('bed'))
    bath = parseInt($('.amenity-form__input').attr('bath'))
    let sleep_pl, bed_pl, bath_pl

    switch (sleep) {
        case 1: sleep_pl = 'спальня'; break;
        case 2: sleep_pl = 'спальни'; break;
        case 3: sleep_pl = 'спальни'; break;
    }

    switch (bed) {
        case 1: bed_pl = 'кровать'; break;
        case 2: bed_pl = 'кровати'; break;
        case 3: bed_pl = 'кровати'; break;
        case 4: bed_pl = 'кровати'; break;
        case 5: bed_pl = 'кроватей'; break;
        case 6: bed_pl = 'кроватей'; break;
    }

    switch (bath) {
        case 1: bath_pl = 'ванная комната'; break;
        case 2: bath_pl = 'ванных комнаты'; break;
        case 3: bath_pl = 'ванных комнаты'; break;
    }
    
    if (sleep == 0){
        sleep_ms = ''  
    } else if (bed != 0 || bath != 0) {
        sleep_ms = sleep + ' ' + sleep_pl + ', '
    } else {
        sleep_ms = sleep + ' ' + sleep_pl
    }

    if (bed == 0){
        bed_ms = ''
    } else if (bath != 0) {
        bed_ms = bed + ' ' + bed_pl + ', '
    } else {
        bed_ms = bed + ' ' + bed_pl
    }
    
    if (bath == 0){
        bath_ms = ''
    } else {
        bath_ms = bath + ' ' + bath_pl
    }    
    return sleep_ms + bed_ms  + bath_ms
}


$('#plus-sleep').on('click', function(){
    let value = parseInt($('.amenity-form__input').attr('sleep'))
    value = value + 1
    $('.amenity-form__input').val(value)
    $('.amenity-form__input').attr({'sleep': value})
})

$('#minus-sleep').on('click', function(){
    let value = $('.amenity-form__input').attr('sleep')
    if (value != 0) {
        value = value - 1
        $('.amenity-form__input').val(value)
        $('.amenity-form__input').attr({'sleep': value})         
    } else {
        $('.amenity-form__input').val()
    }
})

$('.amenity-form__input').on('focus', function(){
    alert('888')
}) 
import $ from "jquery";

// 10 человек, в том числе не больше 2 младенцев

$('.js-guest__input').on('focus', function(){
  $('.js-guests-block').toggleClass('block-open')
}) 

//////////////////////////////////////////ВЗРОСЛЫЕ/////////////////////////////////////////////////////////////////

$('.js-plus-adult').on('click', function(event){
  event.preventDefault()
  $('.js-guests-confirmation__clear').removeClass('opaque')
  let value = parseInt($('.js-guest__input').attr('adult'))
  let guests = parseInt($('.js-guest__input').attr('guests'))
  if (guests < 10) {
      value = value + 1
      guests = guests + 1
      $('.js-guest__input').attr({'adult': value})        
      $('.js-guest__input').attr({'guests': guests})        
  }
  if (value > 0) {
      $('.js-minus-adult').css('border', '1px solid rgba(31, 32, 65, 0.25)')
  }
  $('.js-guest__input').val(messangeInput())
  $('.js-adult-result').text(value)
  messangeInput()
})

$('.js-minus-adult').on('click', function(event){
  event.preventDefault()
  let value = $('.js-guest__input').attr('adult')
  let guests = parseInt($('.js-guest__input').attr('guests'))
  let child = parseInt($('.js-guest__input').attr('child'))

  
  if (value != 0) {

    /* Если есть дети, то должен остаться хоть один взрослый */
    if (!(value == 1 && guests > 1)) {
      value = value - 1
      guests = guests - 1
      $('.js-guest__input').attr({'adult': value})         
      $('.js-guest__input').attr({'guests': guests})       
    }
  }

  if (value == 0) {
        $(this).css('border', '1px solid rgba(31, 32, 65, 0.1)')
  }

  if (guests == 0) {
    $('.js-guests-confirmation__clear').addClass('opaque')    
  }

  $('.js-guest__input').val(messangeInput())
  $('.js-adult-result').text(value)
})

/////////////////////////////////////////////////////ДЕТИ///////////////////////////////////////////////////////

$('.js-plus-child').on('click', function(event){
  event.preventDefault()
  $('.js-guests-confirmation__clear').removeClass('opaque')
  let value = parseInt($('.js-guest__input').attr('child'))
  let guests = parseInt($('.js-guest__input').attr('guests'))
  let adult = parseInt($('.js-guest__input').attr('adult'))

  /* Не более 5 детей */
  if (value < 5 && guests < 10) {

  /* Должен быть как минимум один взрослый */
    if ( adult === 0) {
      adult = 1
      guests = guests + 1
    }

    value = value + 1
    guests = guests + 1
    $('.js-guest__input').attr({'child': value})        
    $('.js-guest__input').attr({'guests': guests})        
    $('.js-guest__input').attr({'adult': adult})        
  }
  if (value > 0) {
      $('.js-minus-child').css('border', '1px solid rgba(31, 32, 65, 0.25)')
  }    
  $('.js-guest__input').val(messangeInput())
  $('.js-child-result').text(value)
  $('.js-adult-result').text(adult)
})

$('.js-minus-child').on('click', function(event){
  event.preventDefault()
  let value = $('.js-guest__input').attr('child')
  let guests = $('.js-guest__input').attr('guests')
  if (value != 0) {
      value = value - 1
      guests = guests - 1
      $('.js-guest__input').attr({'child': value})         
      $('.js-guest__input').attr({'guests': guests})         
  }

  if (value == 0) {
      $(this).css('border', '1px solid rgba(31, 32, 65, 0.1)')
  }     
 
  $('.js-guest__input').val(messangeInput())
  $('.js-child-result').text(value)
})

////////////////////////////////////////////////////////МЛАДЕНЦЫ//////////////////////////////////////////////

$('.plus-baby').on('click', function(event){
  event.preventDefault()
  $('.js-guests-confirmation__clear').removeClass('opaque')
  let value = parseInt($('.js-guest__input').attr('baby'))
  let guests = parseInt($('.js-guest__input').attr('guests'))
  let adult = parseInt($('.js-guest__input').attr('adult'))

  /* Не более 2 младенцев */
  if (value < 2 && guests < 10) {

    /* Должен быть как минимум один взрослый */
    if ( adult === 0) {
      adult = 1
      guests = guests + 1
    }

    value = value + 1
    guests = guests + 1
    $('.js-guest__input').attr({'baby': value})        
    $('.js-guest__input').attr({'guests': guests})  
    $('.js-guest__input').attr({'adult': adult})      
  }
  if (value > 0) {
      $('.js-minus-baby').css('border', '1px solid rgba(31, 32, 65, 0.25)')
  }    
  $('.js-guest__input').val(messangeInput())
  $('.js-baby-result').text(value)
  $('.js-adult-result').text(adult)
})

$('.js-minus-baby').on('click', function(event){
  event.preventDefault()
  let value = $('.js-guest__input').attr('baby')
  let guests = $('.js-guest__input').attr('guests')
  if (value != 0) {
      value = value - 1
      guests = guests - 1
      $('.js-guest__input').attr({'baby': value})         
      $('.js-guest__input').attr({'guests': guests})         
  }

  if (value == 0) {
      $(this).css('border', '1px solid rgba(31, 32, 65, 0.1)')
  }    

  $('.js-guest__input').val(messangeInput())
  $('.js-baby-result').text(value)
})

///////////////////////////СОСТАВЛЕНИЕ СООБЩЕНИЯ ВЫВОДА В ИНПУТ КОЛИЧЕСТВА ГОСТЕЙ////////////////////////////////////

function messangeInput() {
    let guests = parseInt($('.js-guest__input').attr('guests'))
    let baby = parseInt($('.js-guest__input').attr('baby'))
    let guestsPl, babyPl
    let messange
    let onlyGuests = guests - baby
    
    if (onlyGuests == 1){
        guestsPl = 'гость' 
    } else if (onlyGuests > 1 && onlyGuests < 5) {
        guestsPl = 'гостя'
    } else if (guests > 4) {
        guestsPl = 'гостей'
    }

    if (baby == 1){
        babyPl = 'младенец'
    } else {
        babyPl = 'младенца'
    }

    if (onlyGuests > 0 && baby == 0) {
      messange = onlyGuests + ' ' + guestsPl
    } else if (onlyGuests > 0 && baby > 0) {
      messange = onlyGuests + ' ' + guestsPl + ', ' + baby + ' ' + babyPl
    }
 
    return messange
}

///////////////////////////////////СБРОС ЗНАЧЕНИЙ В ФОРМЕ ПОДБОРА КОЛИЧЕСТВА ГОСТЕЙ///////////////////////////////

$('.js-guests-confirmation__clear').on('click', function () {
  $('.js-guest__input').val('')
  $('.js-guest__input').attr('adult', 0)
  $('.js-guest__input').attr('child', 0)
  $('.js-guest__input').attr('baby', 0)
  $('.js-guest__input').attr('guests', 0)

  $('.js-adult-result').text('0')
  $('.js-child-result').text('0')
  $('.js-baby-result').text('0')

  $('.js-minus-adult').css('border', '1px solid rgba(31, 32, 65, 0.1)')
  $('.js-minus-child').css('border', '1px solid rgba(31, 32, 65, 0.1)')
  $('.js-minus-baby').css('border', '1px solid rgba(31, 32, 65, 0.1)')
  
  $('.js-guests-confirmation__clear').addClass('opaque')    
})

///////////////////////////////////ПРИНЯТЬ ЗНАЧЕНИЯ (СКРЫТЬ ФОРМУ)///////////////////////////////

$('.js-guests-confirmation__assume').on('click', function () {
  $('.js-guests-block').addClass('block-open')
})
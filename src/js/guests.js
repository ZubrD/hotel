import $ from "jquery";

// 10 человек, в том числе не больше 2 младенцев

$('.guest__input').on('focus', function(){
  $('.guests-block').toggleClass('block-open')
}) 

//////////////////////////////////////////ВЗРОСЛЫЕ/////////////////////////////////////////////////////////////////

$('.plus-adult').on('click', function(event){
  event.preventDefault()
  $('.guests-confirmation__clear').removeClass('opaque')
  let value = parseInt($('.guest__input').attr('adult'))
  let guests = parseInt($('.guest__input').attr('guests'))
  if (guests < 10) {
      value = value + 1
      guests = guests + 1
      $('.guest__input').attr({'adult': value})        
      $('.guest__input').attr({'guests': guests})        
  }
  if (value > 0) {
      $('.minus-adult').css('border', '1px solid rgba(31, 32, 65, 0.25)')
  }
  $('.guest__input').val(messangeInput())
  $('.adult-result').text(value)
  messangeInput()
})

$('.minus-adult').on('click', function(event){
  event.preventDefault()
  let value = $('.guest__input').attr('adult')
  let guests = parseInt($('.guest__input').attr('guests'))
  let child = parseInt($('.guest__input').attr('child'))

  
  if (value != 0) {

    /* Если есть дети, то должен остаться хоть один взрослый */
    if (!(value == 1 && guests > 1)) {
      value = value - 1
      guests = guests - 1
      $('.guest__input').attr({'adult': value})         
      $('.guest__input').attr({'guests': guests})       
    }
  }

  if (value == 0) {
        $(this).css('border', '1px solid rgba(31, 32, 65, 0.1)')
  }

  if (guests == 0) {
    $('.guests-confirmation__clear').addClass('opaque')    
  }

  $('.guest__input').val(messangeInput())
  $('.adult-result').text(value)
})

/////////////////////////////////////////////////////ДЕТИ///////////////////////////////////////////////////////

$('.plus-child').on('click', function(event){
  event.preventDefault()
  $('.guests-confirmation__clear').removeClass('opaque')
  let value = parseInt($('.guest__input').attr('child'))
  let guests = parseInt($('.guest__input').attr('guests'))
  let adult = parseInt($('.guest__input').attr('adult'))

  /* Не более 5 детей */
  if (value < 5 && guests < 10) {

  /* Должен быть как минимум один взрослый */
    if ( adult === 0) {
      adult = 1
      guests = guests + 1
    }

    value = value + 1
    guests = guests + 1
    $('.guest__input').attr({'child': value})        
    $('.guest__input').attr({'guests': guests})        
    $('.guest__input').attr({'adult': adult})        
  }
  if (value > 0) {
      $('.minus-child').css('border', '1px solid rgba(31, 32, 65, 0.25)')
  }    
  $('.guest__input').val(messangeInput())
  $('.child-result').text(value)
  $('.adult-result').text(adult)
})

$('.minus-child').on('click', function(event){
  event.preventDefault()
  let value = $('.guest__input').attr('child')
  let guests = $('.guest__input').attr('guests')
  if (value != 0) {
      value = value - 1
      guests = guests - 1
      $('.guest__input').attr({'child': value})         
      $('.guest__input').attr({'guests': guests})         
  }

  if (value == 0) {
      $(this).css('border', '1px solid rgba(31, 32, 65, 0.1)')
  }     
 
  $('.guest__input').val(messangeInput())
  $('.child-result').text(value)
})

////////////////////////////////////////////////////////МЛАДЕНЦЫ//////////////////////////////////////////////

$('.plus-baby').on('click', function(event){
  event.preventDefault()
  $('.guests-confirmation__clear').removeClass('opaque')
  let value = parseInt($('.guest__input').attr('baby'))
  let guests = parseInt($('.guest__input').attr('guests'))
  let adult = parseInt($('.guest__input').attr('adult'))

  /* Не более 2 младенцев */
  if (value < 2 && guests < 10) {

    /* Должен быть как минимум один взрослый */
    if ( adult === 0) {
      adult = 1
      guests = guests + 1
    }

    value = value + 1
    guests = guests + 1
    $('.guest__input').attr({'baby': value})        
    $('.guest__input').attr({'guests': guests})  
    $('.guest__input').attr({'adult': adult})      
  }
  if (value > 0) {
      $('.minus-baby').css('border', '1px solid rgba(31, 32, 65, 0.25)')
  }    
  $('.guest__input').val(messangeInput())
  $('.baby-result').text(value)
  $('.adult-result').text(adult)
})

$('.minus-baby').on('click', function(event){
  event.preventDefault()
  let value = $('.guest__input').attr('baby')
  let guests = $('.guest__input').attr('guests')
  if (value != 0) {
      value = value - 1
      guests = guests - 1
      $('.guest__input').attr({'baby': value})         
      $('.guest__input').attr({'guests': guests})         
  }

  if (value == 0) {
      $(this).css('border', '1px solid rgba(31, 32, 65, 0.1)')
  }    

  $('.guest__input').val(messangeInput())
  $('.baby-result').text(value)
})

///////////////////////////СОСТАВЛЕНИЕ СООБЩЕНИЯ ВЫВОДА В ИНПУТ КОЛИЧЕСТВА ГОСТЕЙ////////////////////////////////////

function messangeInput() {
    let guests = parseInt($('.guest__input').attr('guests'))
    let baby = parseInt($('.guest__input').attr('baby'))
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

$('.guests-confirmation__clear').on('click', function () {
  $('.guest__input').val('')
  $('.guest__input').attr('adult', 0)
  $('.guest__input').attr('child', 0)
  $('.guest__input').attr('baby', 0)
  $('.guest__input').attr('guests', 0)

  $('.adult-result').text('0')
  $('.child-result').text('0')
  $('.baby-result').text('0')

  $('.minus-adult').css('border', '1px solid rgba(31, 32, 65, 0.1)')
  $('.minus-child').css('border', '1px solid rgba(31, 32, 65, 0.1)')
  $('.minus-baby').css('border', '1px solid rgba(31, 32, 65, 0.1)')
  
  $('.guests-confirmation__clear').addClass('opaque')    
})

///////////////////////////////////ПРИНЯТЬ ЗНАЧЕНИЯ (СКРЫТЬ ФОРМУ)///////////////////////////////

$('.guests-confirmation__assume').on('click', function () {
  $('.guests-block').addClass('block-open')
})
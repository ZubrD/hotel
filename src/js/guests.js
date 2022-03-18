// 100 человек, но младенцев не больше 10

$('.guest__input').on('focus', function(){
  $('.guests-block').toggleClass('block-open')
}) 

//////////////////////////////////////////ВЗРОСЛЫЕ/////////////////////////////////////////////////////////////////

$('.plus-adult').on('click', function(event){
  event.preventDefault()
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
  $('.guest__input').val(my_select())
  $('.adult-result').text(value)
})

$('.minus-adult').on('click', function(event){
  event.preventDefault()
  let value = $('.guest__input').attr('adult')
  let guests = parseInt($('.guest__input').attr('guests'))
  if (value != 0) {
      value = value - 1
      guests = guests - 1
      $('.guest__input').attr({'adult': value})         
      $('.guest__input').attr({'guests': guests})         
  } 
  if (value == 0) {
        $(this).css('border', '1px solid rgba(31, 32, 65, 0.1)')
  }
  $('.guest__input').val(my_select())
  $('.adult-result').text(value)
})

/////////////////////////////////////////////////////ДЕТИ///////////////////////////////////////////////////////

$('.plus-child').on('click', function(event){
  event.preventDefault()
  let value = parseInt($('.guest__input').attr('child'))
  let guests = parseInt($('.guest__input').attr('guests'))
  if (guests < 10) {
      value = value + 1
      guests = guests + 1
      $('.guest__input').attr({'child': value})        
      $('.guest__input').attr({'guests': guests})        
  }
  if (value > 0) {
      $('.minus-child').css('border', '1px solid rgba(31, 32, 65, 0.25)')
  }    
  $('.guest__input').val(my_select())
  $('.child-result').text(value)
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
  $('.guest__input').val(my_select())
  $('.child-result').text(value)
})

////////////////////////////////////////////////////////МЛАДЕНЦЫ//////////////////////////////////////////////

$('.plus-baby').on('click', function(event){
  event.preventDefault()
  let value = parseInt($('.guest__input').attr('baby'))
  let guests = parseInt($('.guest__input').attr('guests'))
  if (value < 5 && guests < 10) {
      value = value + 1
      guests = guests + 1
      $('.guest__input').attr({'baby': value})        
      $('.guest__input').attr({'guests': guests})        
  }
  if (value > 0) {
      $('.minus-baby').css('border', '1px solid rgba(31, 32, 65, 0.25)')
  }    
  $('.guest__input').val(my_select())
  $('.baby-result').text(value)
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
  $('.guest__input').val(my_select())
  $('.baby-result').text(value)
})

function my_select() {
    let guests = parseInt($('.guest__input').attr('guests'))
    // let adult = parseInt($('.guest__input').attr('adult'))
    // let child = parseInt($('.guest__input').attr('child'))
    let baby = parseInt($('.guest__input').attr('baby'))
    let sleep_pl, bed_pl, bath_pl

    switch (guests) {
        case 1: sleep_pl = 'гость'; break;
        case 2: sleep_pl = 'гостя'; break;
        case 3: sleep_pl = 'гостей'; break;
    }

    // switch (bed) {
    //     case 1: bed_pl = 'кровать'; break;
    //     case 2: bed_pl = 'кровати'; break;
    //     case 3: bed_pl = 'кровати'; break;
    //     case 4: bed_pl = 'кровати'; break;
    //     case 5: bed_pl = 'кроватей'; break;
    //     case 6: bed_pl = 'кроватей'; break;
    // }

    switch (baby) {
        case 1: bath_pl = 'младенец'; break;
        case 2: bath_pl = 'младенца'; break;
        case 3: bath_pl = 'младенцев'; break;
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

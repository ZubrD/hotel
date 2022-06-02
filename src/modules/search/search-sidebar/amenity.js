const amenityFormInput = document.querySelector('.js-amenity-form__input');
const plusSleep = document.querySelector('.js-plus-sleep');
const minusSleep = document.querySelector('.js-minus-sleep');
const plusBed = document.querySelector('.js-plus-bed');
const minusBed = document.querySelector('.js-minus-bed');
const plusBath = document.querySelector('.js-plus-bath');
const minusBath = document.querySelector('.js-minus-bath');

class Amenity {
    bindEventListeners() {
        amenityFormInput.addEventListener('click', this.amenityFormInputClick);
        plusSleep.addEventListener('click', this.plusSleepClick);
        minusSleep.addEventListener('click', this.minusSleepClick);
        plusBed.addEventListener('click', this.plusBedClick);
        minusBed.addEventListener('click', this.minusBedClick);
        plusBath.addEventListener('click', this.plusBathClick);
        minusBath.addEventListener('click', this.minusBathClick);
    }

    amenityFormInputClick() {
        $('.js-amenity-block').toggleClass('block-open')
    }

    ///////////////СПАЛЬНИ/////////////////

    plusSleepClick() {
        let value = parseInt($('.js-amenity-form__input').attr('sleep'))
        if (value < 3) {
            value = value + 1
            $('.js-amenity-form__input').attr({'sleep': value})        
        }
        if (value > 0) {
            $('.js-minus-sleep').css('border', '1px solid rgba(31, 32, 65, 0.25)')
        }
        $('.js-amenity-form__input').val(my_select())
        $('.js-sleep-result').text(value)        
    }

    minusSleepClick() {
        let value = $('.js-amenity-form__input').attr('sleep')
        if (value != 0) {
            value = value - 1
            $('.js-amenity-form__input').attr({'sleep': value})         
        } 
        if (value == 0) {
             $(this).css('border', '1px solid rgba(31, 32, 65, 0.1)')
        }
        $('.js-amenity-form__input').val(my_select())
        $('.js-sleep-result').text(value)        
    }

    //////////////////КРОВАТИ///////////////////

    plusBedClick() {
        let value = parseInt($('.js-amenity-form__input').attr('bed'))
        if (value < 6) {
            value = value + 1
            $('.js-amenity-form__input').attr({'bed': value})        
        }
        if (value > 0) {
            $('.js-minus-bed').css('border', '1px solid rgba(31, 32, 65, 0.25)')
        }    
        $('.js-amenity-form__input').val(my_select())
        $('.js-bed-result').text(value)        
    }

    minusBedClick() {
        let value = $('.js-amenity-form__input').attr('bed')
        if (value != 0) {
            value = value - 1
            $('.js-amenity-form__input').attr({'bed': value})         
        }
        if (value == 0) {
            $(this).css('border', '1px solid rgba(31, 32, 65, 0.1)')
       }     
        $('.js-amenity-form__input').val(my_select())
        $('.js-bed-result').text(value)        
    }

    /////////////ВАННЫЕ КОМНАТЫ/////////////

    plusBathClick() {
        let value = parseInt($('.js-amenity-form__input').attr('bath'))
        if (value < 3) {
            value = value + 1
            $('.js-amenity-form__input').attr({'bath': value})        
        }
        if (value > 0) {
            $('.js-minus-bath').css('border', '1px solid rgba(31, 32, 65, 0.25)')
        }    
        $('.js-amenity-form__input').val(my_select())
        $('.js-bath-result').text(value)        
    }

    minusBathClick() {
        let value = $('.js-amenity-form__input').attr('bath')
        if (value != 0) {
            value = value - 1
            $('.js-amenity-form__input').attr({'bath': value})         
        }
        if (value == 0) {
            $(this).css('border', '1px solid rgba(31, 32, 65, 0.1)')
        }    
        $('.js-amenity-form__input').val(my_select())
        $('.js-bath-result').text(value)        
    }
}

const amenity = new Amenity()
amenity.bindEventListeners()

////////////////////////////////////////////////////////////////////////////////////////////////////

function my_select() {
    let sleep = parseInt($('.js-amenity-form__input').attr('sleep'))
    let bed = parseInt($('.js-amenity-form__input').attr('bed'))
    let bath = parseInt($('.js-amenity-form__input').attr('bath'))
    let sleep_pl, bed_pl, bath_pl
    let sleep_ms
    let bed_ms
    let bath_ms

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

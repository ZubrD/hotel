import datepicker from "air-datepicker"

const datepickerClear = document.querySelector('.datepicker__clear');
const datepickerOk = document.querySelector('.datepicker__ok');
const dateFormInput_1 = document.querySelector('#date_1');
const dateFormInput_2 = document.querySelector('#date_2');
const headerBurger = document.querySelector('.js-header-burger');

class MyDatepicker {
    bindEventListeners() {
        datepickerClear.addEventListener('click', this.datepickerClearClick);
        datepickerOk.addEventListener('click', this.datepickerOkClick);
        dateFormInput_1.addEventListener('click', this.dateFormInputClick_1);
        dateFormInput_2.addEventListener('click', this.dateFormInputClick_2);
        headerBurger.addEventListener('click', this.headerBurgerClick);
    }

    datepickerClearClick() {
        $('#date_1').val('');
        $('#date_2').val('');
    }

    datepickerOkClick() {
        $('.datepicker-form').hide()
    }

    dateFormInputClick_1() {
        $('.datepicker-form').show()
    }

    dateFormInputClick_2() {
        $('.datepicker-form').show()
    }

    headerBurgerClick() {
        $('.js-substrate').toggleClass('substrate-burger')
        if($('.js-right-menu-list').css('display') ==  'none') {
            $('.js-right-menu-list').addClass('display-block');
            $('.js-right-menu-list').removeClass('display-none');
        } else {
            if($('.js-right-menu-list').css('display') ==  'block') {
                $('.js-right-menu-list').removeClass('display-block');
                $('.js-right-menu-list').addClass('display-none'); 
            }
        }
        $('.js-right-menu-list').toggleClass('right-menu-list-burger');
        $('.js-right-menu__link').toggleClass('right-menu__link-burger');
        $('.js-right-menu__item').toggleClass('right-menu__item-burger') ;       
    }
}

const myDatepicker = new MyDatepicker()
myDatepicker.bindEventListeners()

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

const additionalTitle = document.querySelector('.js-additional__title');
const additionalIcon = document.querySelector('.js-additional__icon');
console.log(additionalTitle)

class Additional {
    bindEventListeners() {
        additionalTitle.addEventListener('click', this.additionalTitleClick);
        additionalIcon.addEventListener('click', this.additionalIconClick)
    }

    additionalTitleClick() {
        console.log('Дополнительный титул')
        $('.js-additional__icon').toggleClass('rotated__icon')
        $('.js-additional-block').toggleClass('block-open')        
    }

    additionalIconClick (event) {
        $(event.target).toggleClass('rotated__icon')
        $('.js-additional-block').toggleClass('block-open')
    }
}

const additional = new Additional()
additional.bindEventListeners()

// $('.js-additional__title').on('click', function(){
//     $('.js-additional__icon').toggleClass('rotated__icon')
//     $('.js-additional-block').toggleClass('block-open')
// })

// $('.js-additional__icon').on('click', function(){
//     $(this).toggleClass('rotated__icon')
//     $('.js-additional-block').toggleClass('block-open')
// })
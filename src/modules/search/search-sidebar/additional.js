const additionalTitle = document.querySelector('.js-additional__title');
const additionalIcon = document.querySelector('.js-additional__icon');

class Additional {
    bindEventListeners() {
        additionalTitle.addEventListener('click', this.additionalTitleClick);
        additionalIcon.addEventListener('click', this.additionalIconClick)
    }

    additionalTitleClick() {
        $('.js-additional__icon').toggleClass('js-rotated__icon')
        $('.js-additional-block').toggleClass('block-open')        
    }

    additionalIconClick (event) {
        $(event.target).toggleClass('js-rotated__icon')
        $('.js-additional-block').toggleClass('block-open')
    }
}

const additional = new Additional()
additional.bindEventListeners()

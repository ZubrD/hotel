import $ from "jquery";

$('.js-additional__title').on('click', function(){
    $('.js-additional__icon').toggleClass('rotated__icon')
    $('.js-additional-block').toggleClass('block-open')
})

$('.js-additional__icon').on('click', function(){
    $(this).toggleClass('rotated__icon')
    $('.js-additional-block').toggleClass('block-open')
})
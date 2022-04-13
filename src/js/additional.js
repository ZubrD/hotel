import $ from "jquery";

$('.additional__title').on('click', function(){
    $('.additional__icon').toggleClass('rotated__icon')
    $('.additional-block').toggleClass('block-open')
})

$('.additional__icon').on('click', function(){
    $(this).toggleClass('rotated__icon')
    $('.additional-block').toggleClass('block-open')
})
$('#calendar').datepicker({
    position: "bottom right",
    range: true,
    minDate: new Date(),
    inline: true,
    navTitles: {
        days: 'MM yyyy'
    },
    onSelect(formattedDate, date, inst) {
        month_1 = parseInt(date[0].getMonth(), 10) + 1;
        month_2 = parseInt(date[1].getMonth(), 10) + 1;
        $('#date_1').val(date[0].getDate() + '.' + month_1 + '.' + date[0].getFullYear());
        $('#date_2').val(date[1].getDate() + '.' + month_2 + '.' + date[1].getFullYear());
    }
})

$('.datepicker__clear').on('click', function(){
    $('#date_1').val('');
    $('#date_2').val('');
})

$('.datepicker__ok').on('click', function(){
    $('.datepicker-form').hide()
})

$('.dates-form__input').on('click', function(){
    $('.datepicker-form').show()
})




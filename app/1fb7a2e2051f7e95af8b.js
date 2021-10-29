$('.header-burger').on('click', function(){
    $('.substrate').toggleClass('substrate-burger')
    if($('.right-menu-list').css('display') ==  'none') {
        $('.right-menu-list').addClass('display-block')
        $('.right-menu-list').removeClass('display-none')
    } else {
        if($('.right-menu-list').css('display') ==  'block') {
            $('.right-menu-list').removeClass('display-block')
            $('.right-menu-list').addClass('display-none') 
        }
    }
    $('.right-menu-list').toggleClass('right-menu-list-burger')
    $('.right-menu__link').toggleClass('right-menu__link-burger')
    $('.right-menu__item').toggleClass('right-menu__item-burger')
})


// var ctx = document.getElementById('myChart');
// var myChart = new Chart(ctx, {
//     type: 'doughnut',
//     data: {
//         labels: ['Великолепно', 'Хорошо', 'Удовлетворительно', 'Разочарован'],
//         datasets: [{
//             label: '# of Votes',
//             data: [10, 5, 5, 0],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         responsive: true,
//         // maintainAspectRatio: false,
        
//         scales: {
             
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// });
# Hotel Toxin

Учебный проект вёрстки сайта гостиницы 'Toxin' в рамках практического курса в Metalamp. Посмотреть можно здесь https://zubrd.github.io/hotel/

## Кратое описание

При разработке структуры html-страницы использовался шаблонизатор Pug. Файлы .pug и .html страниц находятся в корне директории src. Раздел body каждой страницы представляет собой ссылки на модули, в которых находится основное содержимое данной страницы. Модули всех страниц размещены здесь (src/modules).

Стили описаны с использованием препроцессора SCSS (src/styles/style.scss).

## Внешние библиотеки

- Node.js (v1.17.6)
- npm (6.14.15)
- Плагин календаря datepicker
- Плагин nouislider (range slider) для выбора диапазона цен на странице search.html

## Собственные скрипты

- Выбор удобств номера - количество спален, кроватей, ванных комнат (src/js/amenity.js) 
- Выбор количества гостей - взрослых, детей, младенцев (src/js/guests.js)
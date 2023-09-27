# Hotel Toxin

Учебный проект вёрстки сайта гостиницы 'Toxin'. Посмотреть можно здесь https://zubrd.github.io/hotel/

## Кратое описание

При разработке структуры html-страницы использовался шаблонизатор Pug. Файлы .pug и .html страниц находятся в корне директории src. Раздел body каждой страницы представляет собой ссылки на модули, в которых находится основное содержимое данной страницы. Модули всех страниц размещены здесь (src/modules).

Стили описаны с использованием препроцессора SCSS (src/styles/style.scss).

## Страницы

- Главная страница https://zubrd.github.io/hotel/index.html
- Выбор номера (переход по кнопке "Подобрать номер") https://zubrd.github.io/hotel/search.html
- Инофрмация о номере (переход по номеру "888 Люкс") https://zubrd.github.io/hotel/details.html
- Страница-заглушка (переход при нажатии на все номера, кроме "888 Люкс") https://zubrd.github.io/hotel/empty.html

## Внешние библиотеки

- Node.js (v1.17.6)
- npm (6.14.15)
- Плагин календаря datepicker
- Плагин nouislider (range slider) для выбора диапазона цен на странице search.html

## Собственные скрипты

- Выбор удобств номера - количество спален, кроватей, ванных комнат 
- Выбор количества гостей - взрослых, детей, младенцев
- Слайдер - перелистывание фотографий номера на странице выбора номера

## UI kit

Компоненты UI kit можно посмотреть здесь: https://zubrd.github.io/hotel/uikit/uikit_index.html
/* eslint-disable */
/* eslint-disable */

window.getYaMap = null;

setTimeout(function(){
    var elem = document.createElement('script');
    elem.type = 'text/javascript';
    elem.src = '//api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=4a0b6ab4-8bf5-40ba-8974-73f63ab09f63&load=package.standard&lang=ru-RU&onload=getYaMap';
    document.getElementsByTagName('body')[0].appendChild(elem);
}, 3000);

window.getYaMap = function(){
    var myMap = new ymaps.Map('map', {
          center: [55.796128, 49.106416],
          zoom: 14
      }, {
          searchControlProvider: 'yandex#search'
      }),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
          hintContent: 'Собственный значок метки',
          balloonContent: 'Это красивая метка'
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: 'img/svg/marker.svg',
          // Размеры метки.
          iconImageSize: [62, 70],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-5, -38]
      });

    myMap.geoObjects.add(myPlacemark);
}

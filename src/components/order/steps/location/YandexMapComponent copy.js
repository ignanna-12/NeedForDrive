import React, { useEffect } from 'react';
import { YMaps, Map, Clusterer, Placemark } from 'react-yandex-maps';
import styles from './YandexMapComponent.module.scss';
import Point from '../../../../assets/icons/Ellipse_1.svg';

const YandexMapComponent = ({ checkedObjects }) => {
  let myMap;

  function myGeoCode(ymaps, myMap, address) {
    ymaps
      .geocode(address, {
        results: 1,
      })
      .then(function (res) {
        // Выбираем первый результат геокодирования.
        let firstGeoObject = res.geoObjects.get(0);
        // Координаты геообъекта.
        let coords = firstGeoObject.geometry.getCoordinates();
        // Область видимости геообъекта.
        let bounds = firstGeoObject.properties.get('boundedBy');

        firstGeoObject.options.set('preset', 'islands#greenCircleIcon');
        // Получаем строку с адресом и выводим в иконке геообъекта.
        //firstGeoObject.properties.set('iconCaption', firstGeoObject.getAddressLine());

        // Добавляем первый найденный геообъект на карту.
        //myMap.geoObjects.add(firstGeoObject);
        // Масштабируем карту на область видимости геообъекта.
        myMap.setBounds(bounds, {
          // Проверяем наличие тайлов на данном масштабе.
          checkZoomRange: true,
        });

        let myPlacemark = new ymaps.Placemark(
          coords,
          {},
          {
            preset: 'islands#greenCircleIcon',
          }
          //   {
          //     iconLayout: 'default#image',
          //     //preset: 'islands#greenCircleIcon',
          //     //iconColor: '#0EC261',
          //     iconImageHref: { Point },
          //     iconImageSize: [100, 140],
          //   }
        );

        myPlacemark.events.add('click', function () {
          alert(address);
        });

        myMap.geoObjects.add(myPlacemark);
      });
  }

  function init(ymaps, myMap) {
    myGeoCode(ymaps, myMap, 'Самара, ново-Садовая, 21');
    myGeoCode(ymaps, myMap, 'Самара, московское шоссе, 77');
  }

  return (
    <YMaps
      query={{
        ns: 'use-load-option',
        apikey: 'c35b820f-e6ef-4e88-b934-2f7af84c28af',
        load: 'package.full',
      }}
    >
      <Map
        key={checkedObjects}
        defaultState={{
          center: [50.47, 38.47],
          zoom: 9,
          controls: ['zoomControl', 'fullscreenControl'],
        }}
        modules={['geolocation', 'geocode']}
        onLoad={(ymaps) => {
          ymaps.ready(() => {
            init(ymaps, myMap);
          });
        }}
        instanceRef={(yaMap) => {
          if (yaMap) {
            myMap = yaMap;
          }
        }}
        className={styles.map}
      />
    </YMaps>
  );
};

export default YandexMapComponent;

import React from 'react';
import { YMaps, Map } from 'react-yandex-maps';
import styles from './YandexMapComponent.module.scss';

const YandexMapComponent = ({ userCity, checkedObjects, onSelectPoint, selectedPoint }) => {
  let myMap;
  function mapCenter(ymaps, myMap, city) {
    ymaps
      .geocode('Россия' + city, {
        results: 1,
      })
      .then(function (res) {
        let centerGeoObject = res.geoObjects.get(0);
        let coords = centerGeoObject.geometry.getCoordinates();
        let bounds = centerGeoObject.properties.get('boundedBy');
        myMap.setCenter(coords);
        myMap.setBounds(bounds);
      });
  }

  function myGeoCode(ymaps, myMap, address) {
    ymaps
      .geocode(address, {
        results: 1,
      })
      .then(function (res) {
        let firstGeoObject = res.geoObjects.get(0);
        let coords = firstGeoObject.geometry.getCoordinates();
        let bounds = firstGeoObject.properties.get('boundedBy');
        myMap.setBounds(bounds);
        myMap.setZoom(12);

        let myPlacemark = new ymaps.Placemark(
          coords,
          {},
          {
            preset: 'islands#greenCircleIcon',
          }
        );

        myPlacemark.events.add('click', function () {
          myMap.setCenter(coords);
          myMap.setZoom(14, { duration: 1000 });
          onSelectPoint(address.slice(userCity.length));
        });

        myMap.geoObjects.add(myPlacemark);
      });
  }

  function init(ymaps, myMap) {
    if (selectedPoint == '') {
      mapCenter(ymaps, myMap, userCity);
      for (var i in checkedObjects) {
        myGeoCode(ymaps, myMap, userCity + checkedObjects[i]);
      }
    } else {
      mapCenter(ymaps, myMap, userCity + selectedPoint);
      myGeoCode(ymaps, myMap, userCity + selectedPoint);
      myMap.setZoom(14, { duration: 1000 });
    }
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
          zoom: 12,
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

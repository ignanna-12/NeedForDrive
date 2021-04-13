import React, { useState } from 'react';
import { filterPointsByCity } from '../../../../redux/thunk/point.thunk';
import Autocomplete from '../../../autocomplete/Autocomplete';
import styles from './Location.module.scss';
import YandexMapComponent from './YandexMapComponent';

const Location = ({ cities, points, onChangeCity, onChangePoint, userPoint, userCity }) => {
  const onChangeInputCity = (value) => {
    onChangeCity(value);
  };
  const onChangeInputPoint = (value) => {
    onChangePoint(value);
  };

  return (
    <div className={styles.location}>
      <div className={styles.location_autocomplete}>
        <Autocomplete
          active={true}
          title={'Город'}
          innerText={userCity == '' ? 'Начните вводить город' : userCity}
          list={cities}
          onChange={onChangeInputCity}
        />
      </div>
      <div className={styles.location_autocomplete}>
        <Autocomplete
          active={userCity !== ''}
          title={'Пункт выдачи'}
          innerText={
            userCity == ''
              ? 'Сначала выберите город'
              : filterPointsByCity(points, userCity) == 0
              ? 'В этом городе нет пунктов'
              : userPoint == ''
              ? 'Начните вводить пункт'
              : userPoint
          }
          list={filterPointsByCity(points, userCity)}
          onChange={onChangeInputPoint}
        />
      </div>
      <div className={styles.map_block}>
        <p>Выбрать на карте:</p>
        <YandexMapComponent
          checkedObjects={filterPointsByCity(points, userCity)}
          userCity={userCity}
          onSelectPoint={(e) => onChangeInputPoint(e)}
          selectedPoint={userPoint}
        />
      </div>
    </div>
  );
};

export default Location;

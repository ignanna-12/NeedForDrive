import React, { useState } from 'react';
import { filterPointsByCity } from '../../../../redux/point-reducer';
import Autocomplete from '../../../autocomplete/Autocomplete';
import styles from './Location.module.scss';
import YandexMapComponent from './YandexMapComponent';

const Location = ({ cities, points, onChangeCity, onChangePoint }) => {
  const [userCity, setUserCity] = useState('');
  const [userPoints, setUserPoints] = useState(points);
  const [selectedPoint, setSelectedPoint] = useState('');
  const onChangeInputCity = (value) => {
    setUserPoints(filterPointsByCity(points, value));
    setUserCity(value);
    onChangeCity(value);
    setSelectedPoint('');
  };
  const onChangeInputPoint = (value) => {
    onChangePoint(value);
    setSelectedPoint(value);
  };

  return (
    <div className={styles.location}>
      <div className={styles.location_autocomplete}>
        <Autocomplete
          active={true}
          title={'Город'}
          innerText={'Начните вводить город'}
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
              : userPoints.length == 0
              ? 'В этом городе нет пунктов'
              : selectedPoint == ''
              ? 'Начните вводить пункт'
              : selectedPoint
          }
          list={userPoints}
          onChange={onChangeInputPoint}
        />
      </div>
      <div className={styles.map_block}>
        <p>Выбрать на карте:</p>
        <YandexMapComponent
          checkedObjects={userPoints}
          userCity={userCity}
          onSelectPoint={(e) => onChangeInputPoint(e)}
        />
      </div>
    </div>
  );
};

export default Location;

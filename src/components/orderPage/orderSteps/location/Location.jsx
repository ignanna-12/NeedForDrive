import React from 'react';
import { filterPointsByCity } from '../../../../redux/thunk/point.thunk';
import Autocomplete from '../../../common/autocomplete/Autocomplete';
import styles from './Location.module.scss';
import YandexMapComponent from './YandexMapComponent';

const Location = ({ cities, points, onChangeCity, onChangePoint, userPoint, userCity }) => {
  const changeCity = (value) => {
    onChangeCity(value);
  };

  return (
    <div className={styles.location}>
      <div className={styles.selectors}>
        <div className={styles.location_autocomplete}>
          <Autocomplete
            active={true}
            title={'Город'}
            innerText={userCity == '' ? 'Начните вводить город' : userCity}
            list={cities}
            onChange={changeCity}
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
                ? 'Начните вводить пункт...'
                : userPoint
            }
            list={filterPointsByCity(points, userCity)}
            onChange={onChangePoint}
          />
        </div>
      </div>
      <div className={styles.map_block}>
        <p>Выбрать на карте:</p>
        <YandexMapComponent
          checkedObjects={filterPointsByCity(points, userCity)}
          userCity={userCity}
          selectedPoint={userPoint}
          onSelectPoint={(e) => onChangePoint(e)}
        />
      </div>
    </div>
  );
};

export default Location;

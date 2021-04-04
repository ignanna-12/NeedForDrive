import React, { useLayoutEffect, useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import SVG from 'react-inlinesvg';
import { requestCities } from '../../../../redux/city-reducer';
import { requestPoints } from '../../../../redux/point-reducer';
import Autocomplete from '../../../autocomplete/Autocomplete';
import Point from '../../../../assets/icons/Ellipse_1.svg';
import styles from './Location.module.scss';

class Location extends React.Component {
  constructor(props) {
    super(props);
    this.state = { city: '', ymaps: null };
  }

  componentDidMount() {
    this.props.requestCities();
  }
  componentDidUpdate() {
    this.props.requestPoints(this.state.city);
  }
  render() {
    const onChangeInputCity = (value) => {
      this.setState({ city: value });
    };
    const onChangeInputPoint = () => {};
    // var myGeocoder = ymaps.geocode('Moscow');
    // myGeocoder.then(
    //   function (res) {
    //     // Выведем в консоль данные, полученные в результате геокодирования объекта.
    //     console.log('Все данные геообъекта: ', res.geoObjects.get(0).properties.getAll());
    //   },
    //   function (err) {
    //     // Обработка ошибки.
    //   }
    // );

    return (
      <div className={styles.location}>
        <div className={styles.location_autocomplete}>
          <Autocomplete
            active={true}
            title={'Город'}
            innerText={'Начните вводить город'}
            list={this.props.cities}
            onChange={onChangeInputCity}
          />
        </div>
        <div className={styles.location_autocomplete}>
          <Autocomplete
            active={this.state.city !== ''}
            title={'Пункт выдачи'}
            innerText={
              this.state.city == ''
                ? 'Сначала выберите город'
                : this.newMethod().props.points.length == 0
                ? 'В этом городе нет пунктов'
                : 'Начните вводить пункт'
            }
            list={this.props.points}
            onChange={onChangeInputPoint}
          />
        </div>
        <div className={styles.map_block}>
          <p>Выбрать на карте:</p>
          <YMaps
            version="2.1.77"
            onApiAvaliable={(ymaps) => this.setState(ymaps)}
            query={{
              apikey: 'c35b820f-e6ef-4e88-b934-2f7af84c28af',
            }}
          >
            <Map
              defaultState={{
                center: [54.3282, 48.3866],
                zoom: 11,
              }}
              className={styles.map}
              modules={['geocode']}
            >
              <Placemark
                geometry={[54.3533559, 48.3702736]}
                properties={{}}
                options={{
                  // iconLayout: 'default#image',
                  preset: 'islands#greenCircleIcon',
                  iconColor: '#0EC261',
                  // iconImageHref: { Point },
                  // iconImageSize: [100, 140],
                }}
              />
              <Placemark
                geometry={[54.300985, 48.288264]}
                properties={{}}
                options={{
                  // iconLayout: 'default#image',
                  preset: 'islands#greenCircleIcon',
                  iconColor: '#0EC261',
                  // iconImageHref: { Point },
                  // iconImageSize: [100, 140],
                }}
              />
              <Placemark
                geometry={[54.32088, 48.39994]}
                properties={{}}
                options={{
                  // iconLayout: 'default#image',
                  preset: 'islands#greenCircleIcon',
                  iconColor: '#0EC261',
                  // iconImageHref: { Point },
                  // iconImageSize: [100, 140],
                }}
              />
              <Placemark
                geometry={[54.299357, 48.344571]}
                properties={{}}
                options={{
                  // iconLayout: 'default#image',
                  preset: 'islands#greenCircleIcon',
                  iconColor: '#0EC261',
                  // iconImageHref: { Point },
                  // iconImageSize: [100, 140],
                }}
              />
            </Map>
          </YMaps>
        </div>
      </div>
    );
  }

  newMethod() {
    return this;
  }
}

let mapStateToProps = (state) => {
  return {
    cities: state.citiesTable.cities,
    id: state.citiesTable.id,
    index: state.citiesTable.index,
    points: state.pointsTable.points,
  };
};

export default compose(connect(mapStateToProps, { requestCities, requestPoints }))(Location);

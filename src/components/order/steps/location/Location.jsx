import React, { useLayoutEffect, useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import SVG from 'react-inlinesvg';
import { requestCities } from '../../../../redux/city-reducer';
import { requestPoints, filterPointsByCity } from '../../../../redux/point-reducer';
import { getCoordinates } from '../../../../redux/map-reducer';
import Autocomplete from '../../../autocomplete/Autocomplete';
import Point from '../../../../assets/icons/Ellipse_1.svg';
import styles from './Location.module.scss';
import YandexMapComponent from './YandexMapComponent';

class Location extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      ymaps: null,
      points: this.props.points,
      coords: [],
      address: 'Кинель, Овсянникова, 29',
    };
  }

  componentDidMount() {
    this.props.requestCities();
    this.props.requestPoints();
    // {
    //   for (var i in this.props.points) {
    //     let addr = this.props.points[i].city + this.props.points[i].address;
    //     this.state.coopds.push(this.props.getCoordinates(addr));
    //   }
    // }
  }
  render() {
    const onChangeInputCity = (value) => {
      this.setState({ points: filterPointsByCity(this.props.points, value) });
      this.setState({ city: value });
    };
    const onChangeInputPoint = () => {};

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
                : this.state.points.length == 0
                ? 'В этом городе нет пунктов'
                : 'Начните вводить пункт'
            }
            list={this.state.points}
            onChange={onChangeInputPoint}
          />
        </div>
        <div className={styles.map_block}>
          <p>Выбрать на карте:</p>
          <YandexMapComponent checkedObjects={this.props.points} />
          {/* <YMaps
            query={{
              ns: 'use-load-option',
              load: 'package.full',
              apikey: 'c35b820f-e6ef-4e88-b934-2f7af84c28af',
            }}
          >
            <Map
              key={checkedObjects}
              onLoad={ymaps => {
                  ymaps.ready(() => {
                    init(ymaps, myMap)
                  });
              }}
              instanceRef={yaMap => {
                if (yaMap) {
                  myMap = yaMap;
                }
              }}
              modules={['geolocation','geocode']}
              defaultState={{
                center: [],
                zoom: 11,
              }}
              className={styles.map}
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
          </YMaps> */}
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    cities: state.citiesTable.cities,
    id: state.citiesTable.id,
    index: state.citiesTable.index,
    points: state.pointsTable.points,
    coords: state.coordinates.coordinates,
  };
};

export default compose(connect(mapStateToProps, { requestCities, requestPoints }))(Location);

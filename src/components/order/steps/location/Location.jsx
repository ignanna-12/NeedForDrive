import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { requestCities } from '../../../../redux/city-reducer';
import { requestPoints, filterPointsByCity } from '../../../../redux/point-reducer';
import Autocomplete from '../../../autocomplete/Autocomplete';
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
    };
  }

  componentDidMount() {
    this.props.requestCities();
    this.props.requestPoints();
  }
  render() {
    const onChangeInputCity = (value) => {
      this.setState({ points: filterPointsByCity(this.props.points, value) });
      this.setState({ city: value });
      this.props.onChangeCity(value);
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
          <YandexMapComponent checkedObjects={this.state.points} userCity={this.state.city} />
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

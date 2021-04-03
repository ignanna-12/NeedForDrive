import React, { useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Map, Placemark } from 'react-yandex-maps';
import { requestCities } from '../../../../redux/city-reducer';
import { requestPoints } from '../../../../redux/point-reducer';
import Autocomplete from '../../../autocomplete/Autocomplete';
import styles from './Location.module.scss';

class Location extends React.Component {
  constructor(props) {
    super(props);
    this.state = { city: '' };
  }
  componentDidMount() {
    this.props.requestCities();
  }
  render() {
    const onChangeInputCity = (value) => {
      this.setState({ city: value });
      this.props.requestPoints(this.state.city);
    };
    const onChangeInputPoint = () => {};
    return (
      <div className={styles.location}>
        <Autocomplete
          active={true}
          title={'Город'}
          innerText={'Начните вводить город'}
          list={this.props.cities}
          onChange={onChangeInputCity}
        />
        <Autocomplete
          active={this.state.city !== ''}
          title={'Пункт выдачи'}
          innerText={'Начните вводить пункт'}
          list={this.props.points}
          onChange={onChangeInputPoint}
        />
        <div>
          <Map defaultState={{ center: [53.221004, 50.634394], zoom: 6 }} width={736} height={356}>
            <Placemark geometry={[53.221004, 50.634394]} />
          </Map>
          {/* <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A9180b1b0e445c3eb724c41523741e39923041e364c29df6cb8b8a103e44b30e8&amp;source=constructor"
            width="736"
            height="352"
            frameBorder="0"
            apikey="c35b820f-e6ef-4e88-b934-2f7af84c28af"
          ></iframe> */}
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
  };
};

export default compose(connect(mapStateToProps, { requestCities, requestPoints }))(Location);

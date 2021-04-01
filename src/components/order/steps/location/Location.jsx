import React, { useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { requestCities } from '../../../../redux/city-reducer';
import { requestPoints } from '../../../../redux/point-reducer';
import Autocomplete from '../../../autocomplete/Autocomplete';
import styles from './Location.module.scss';

class Location extends React.Component {
  constructor(props) {
    super(props);
    this.state = { index: 100 };
  }
  componentDidMount() {
    this.props.requestCities();
  }
  render() {
    const onChangeInput = (value) => {
      this.setState({ index: this.props.cities.indexOf(value) });
      this.props.requestPoints(this.props.id[this.state.index]);
    };
    return (
      <div className={styles.location}>
        <Autocomplete
          active={true}
          title={'Город'}
          innerText={'Начните вводить город'}
          list={this.props.cities}
          onChange={onChangeInput}
        />
        <Autocomplete
          active={this.state.index < 100}
          title={'Пункт выдачи'}
          innerText={'Начните вводить пункт'}
          list={this.props.points}
          onChange={onChangeInput}
        />
        {this.props.id[this.state.index]}
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

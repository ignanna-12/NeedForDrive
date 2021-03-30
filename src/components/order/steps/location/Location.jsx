import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { requestCities } from '../../../../redux/city-reducer';
import Autocomplete from '../../../startScreen/autocomplete/Autocomplete';
import styles from './Location.module.scss';

class Location extends React.Component {
  componentDidMount() {
    this.props.requestCities();
  }
  render() {
    return (
      <div className={styles.location}>
        <Autocomplete
          title={'Город'}
          innerText={'Начните вводить город'}
          list={this.props.cities}
        />
        <Autocomplete title={'Пункт выдачи'} innerText={'Начните вводить пункт'} />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    cities: state.citiesTable.cities,
  };
};

export default compose(connect(mapStateToProps, { requestCities }))(Location);

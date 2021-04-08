import React, { useState } from 'react';
import { Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { requestCities } from '../../redux/city-reducer';
import { requestPoints, filterPointsByCity } from '../../redux/point-reducer';
import SVG from 'react-inlinesvg';
import styles from './Order.module.scss';
import SideBar from '../sideBar/SideBar';
import Logo from '../startScreen/logo/Logo';
import City from '../startScreen/city/City';
import Vector from '../../assets/icons/Vector.svg';
import Location from './steps/location/Location';
import Model from './steps/model/Model';
import AddOptions from './steps/addOptions/AddOptions';
import Summary from './steps/summary/Summary';
import UserChoise from '../userChoise/UserChoise';

class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 0,
      userCity: this.props.match.params.city ? this.props.match.params.city : '',
      userPoint: this.props.match.params.point ? this.props.match.params.point : '',
    };
  }
  componentDidMount() {
    this.props.requestCities();
    this.props.requestPoints();
  }

  render() {
    return (
      <div className={styles.order_page}>
        <SideBar />
        <div className={styles.info}>
          <div className={styles.top_row}>
            <Logo />
            <City userCity={this.state.userCity} />
          </div>
          <div className={styles.links}>
            <button
              className={
                this.state.activePage == 0 ? styles.links_button_active : styles.links_button
              }
              onClick={(e) => {
                this.setState({ activePage: 0 });
              }}
            >
              Местоположение
            </button>
            <SVG src={Vector} />
            <button
              className={
                this.state.activePage == 1 ? styles.links_button_active : styles.links_button
              }
              disabled={this.state.userCity == '' || this.state.userPoint == ''}
              onClick={(e) => {
                this.setState({ activePage: 1 });
              }}
            >
              Модель
            </button>
            <SVG src={Vector} />
            <button
              className={
                this.state.activePage == 2 ? styles.links_button_active : styles.links_button
              }
              disabled={true}
              onClick={(e) => {
                this.setState({ activePage: 2 });
              }}
            >
              Дополнительно
            </button>
            <SVG src={Vector} />
            <button
              className={
                this.state.activePage == 3 ? styles.links_button_active : styles.links_button
              }
              disabled={true}
              onClick={(e) => {
                this.setState({ activePage: 3 });
              }}
            >
              Итого
            </button>
          </div>
          <div className={styles.order_settings}>
            {this.state.activePage == 0 ? (
              <Location
                cities={this.props.cities}
                points={this.props.points}
                onChangeCity={(e) => {
                  this.setState({ userCity: e });
                  this.props.history.push({
                    pathname: '/Order/' + e,
                  });
                }}
                onChangePoint={(e) => {
                  this.setState({ userPoint: e });
                  this.props.history.push({
                    pathname: '/Order/' + this.state.userCity + '/' + e,
                  });
                }}
              />
            ) : this.state.activePage == 1 ? (
              <Model />
            ) : this.state.activePage == 2 ? (
              <AddOptions />
            ) : (
              <Summary />
            )}
            <UserChoise
              city={this.props.match.params.city}
              address={this.props.match.params.point}
              btnText={
                this.state.activePage == 0
                  ? 'Выбрать модель'
                  : this.state.activePage == 1
                  ? 'Дополнительно'
                  : this.state.activePage == 2
                  ? 'Итого'
                  : 'Заказать'
              }
              disable_btn={
                this.state.activePage == 0
                  ? this.state.userCity == '' || this.state.userPoint == ''
                  : ''
              }
              onClick={(e) => {
                this.state.activePage < 3
                  ? this.setState({ activePage: this.state.activePage + 1 })
                  : this.setState({ activePage: 3 });
              }}
            />
          </div>
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

export default compose(connect(mapStateToProps, { requestCities, requestPoints }))(Order);

import React, { useEffect, useState } from 'react';
import { Route, NavLink } from 'react-router-dom';
import { connect, useDispatch, useSelector } from 'react-redux';
import { compose } from 'redux';
import { requestCities } from '../../redux/thunk/city.thunk';
import { requestPoints } from '../../redux/thunk/point.thunk';
import { requestCars } from '../../redux/thunk/car.thunk';
import styles from './Order.module.scss';
import SideBar from '../sideBar/SideBar';
import Logo from '../startScreen/logo/Logo';
import City from '../startScreen/city/City';
import Location from './steps/location/Location';
import Model from './steps/model/Model';
import AddOptions from './steps/addOptions/AddOptions';
import Summary from './steps/summary/Summary';
import UserChoise from '../userChoise/UserChoise';
import Tabs from './tabs/Tabs';
import { setModel, setUserCity, setUserPoint } from '../../redux/actions/actions';

const OrderPage = () => {
  useEffect(() => {
    requestCities();
    requestPoints();
    requestCars();
  }, []);
  const userCity = useSelector((state) => state.orderTable.userCity);
  const userPoint = useSelector((state) => state.orderTable.userPoint);
  const cities = useSelector((state) => state.citiesTable.cities);
  const points = useSelector((state) => state.pointsTable.points);
  const cars = useSelector((state) => state.carsTable.cars);
  const userModel = useSelector((state) => state.orderTable.model);
  const [activePage, setActivePage] = useState(0);
  const [colors, setColors] = useState([]);
  const dispatch = useDispatch();

  return (
    <div className={styles.order_page}>
      <SideBar />
      <div className={styles.info}>
        <div className={styles.top_row}>
          <Logo />
          <City userCity={userCity} />
        </div>
        <Tabs userCity={userCity} changeActivePage={(e) => setActivePage(e)} />
        <div className={styles.order_settings}>
          {activePage == 0 ? (
            <Location
              cities={cities}
              points={points}
              onChangeCity={(e) => {
                dispatch(setUserCity(e));
                // this.props.history.push({
                //   pathname: '/Order/' + this.state.activePage + '/' + e,
                // });
              }}
              userCity={userCity}
              userPoint={userPoint}
              onChangePoint={(e) => {
                dispatch(setUserPoint(e));
                // this.props.history.push({
                //   pathname: '/Order/' + this.state.activePage + '/' + this.state.userCity + '/' + e,
                // });
              }}
            />
          ) : activePage == 1 ? (
            <Model
              cars={cars}
              onChangeModel={(model, priceMin, priceMax, colors) => {
                dispatch(setModel(model));
                // this.setState({ userPriceMin: priceMin });
                // this.setState({ userPriceMax: priceMax });
                setColors(colors);
                // this.props.history.push({
                //   pathname:
                //     '/Order/' +
                //     this.props.match.params.step +
                //     '/' +
                //     this.props.match.params.city +
                //     '/' +
                //     this.props.match.params.point +
                //     '/' +
                //     model,
                // });
              }}
            />
          ) : this.props.match.params.step == 2 ? (
            <AddOptions colors={colors} />
          ) : (
            <Summary />
          )}
          <UserChoise
            city={userCity}
            address={userPoint}
            model={userModel}
            // priceMin={this.state.userPriceMin}
            // priceMax={this.state.userPriceMax}
            btnText={
              activePage == 0
                ? 'Выбрать модель'
                : activePage == 1
                ? 'Дополнительно'
                : activePage == 2
                ? 'Итого'
                : 'Заказать'
            }
            disable_btn={
              activePage == 0 ? !(userCity && userPoint) : activePage == 1 ? !userModel : ''
            }
            onClick={(e) => {
              activePage < 3 ? changeActivePage(activePage + 1) : changeActivePage(3);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default OrderPage;

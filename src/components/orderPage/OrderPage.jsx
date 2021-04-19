import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestCities } from '../../redux/thunk/city.thunk';
import { requestPoints } from '../../redux/thunk/point.thunk';
import { requestCars } from '../../redux/thunk/car.thunk';
import {
  setModel,
  setUserCity,
  setUserColor,
  setUserPoint,
  setPriceMin,
  setPriceMax,
  setModelColor,
  setPrice,
} from '../../redux/actions/actions';
import {
  userCitySel,
  citiesSel,
  pointsSel,
  userPointSel,
  carsSel,
  modelColorSel,
  userModelSel,
  userPriceMinSel,
  userPriceMaxSel,
  userColorSel,
} from '../../redux/selectors/selectors';
import styles from './OrderPage.module.scss';
import SideBar from '../sideBar/SideBar';
import Logo from '../startScreen/logo/Logo';
import City from '../startScreen/city/City';
import Location from './orderSteps/location/Location';
import AddOptions from './orderSteps/addOptions/AddOptions';
import Summary from './orderSteps/summary/Summary';
import Tabs from './tabs/Tabs';
import ModelContainer from './orderSteps/model/ModelContainer';
import Order from './order/Order';

const OrderPage = () => {
  useEffect(() => {
    dispatch(requestCities());
    dispatch(requestPoints());
    dispatch(requestCars());
  }, []);

  const userCity = useSelector(userCitySel);
  const userPoint = useSelector(userPointSel);
  const cities = useSelector(citiesSel);
  const points = useSelector(pointsSel);
  const cars = useSelector(carsSel);
  const userModel = useSelector(userModelSel);
  const modelColor = useSelector(modelColorSel);
  const userPriceMin = useSelector(userPriceMinSel);
  const userPriceMax = useSelector(userPriceMaxSel);
  const userColor = useSelector(userColorSel);

  const [activePage, setActivePage] = useState(0);

  const dispatch = useDispatch();

  const changeCity = (city) => {
    dispatch(setUserCity(city));
    dispatch(setUserPoint(''));
  };
  const changePoint = (point) => {
    dispatch(setUserPoint(point));
  };
  const changeModel = (model, priceMin, priceMax, colors) => {
    dispatch(setModel(model));
    dispatch(setModelColor(colors));
    dispatch(setPriceMin(priceMin));
    dispatch(setPriceMax(priceMax));
    let x = parseInt((parseInt(priceMax) + parseInt(priceMin)) / 2);
    dispatch(setPrice(x.toString));
  };
  const changeColor = (color) => {
    dispatch(setUserColor(color));
  };
  return (
    <div className={styles.order_page}>
      <SideBar />
      <div className={styles.info}>
        <div className={styles.top_row}>
          <Logo />
          <City userCity={userCity} />
        </div>
        <Tabs
          userCity={userCity}
          changeActivePage={(e) => setActivePage(e)}
          activePage={activePage}
          userPoint={userPoint}
          model={userModel}
        />
        <div className={styles.order_settings}>
          {activePage == 0 ? (
            <Location
              cities={cities}
              points={points}
              onChangeCity={changeCity}
              userCity={userCity}
              userPoint={userPoint}
              onChangePoint={changePoint}
            />
          ) : activePage == 1 ? (
            <ModelContainer cars={cars} onChangeModel={changeModel} />
          ) : activePage == 2 ? (
            <AddOptions colors={modelColor} onChangeColor={changeColor} />
          ) : (
            <Summary />
          )}
          <Order
            city={userCity}
            address={userPoint}
            model={userModel}
            priceMin={userPriceMin}
            priceMax={userPriceMax}
            color={userColor}
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
              activePage < 3 ? setActivePage(activePage + 1) : setActivePage(3);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default OrderPage;

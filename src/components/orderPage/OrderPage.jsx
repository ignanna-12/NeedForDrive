import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestCities } from '../../redux/thunk/city.thunk';
import { requestPoints } from '../../redux/thunk/point.thunk';
import { requestCars } from '../../redux/thunk/car.thunk';
import { requestRate } from '../../redux/thunk/rate.thunk';
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
  ratesSel,
  priceSel,
  userCityIdSel,
  userPointIdSel,
  carIdSel,
  dateFromSel,
  dateToSel,
  rateIdSel,
  tankSel,
  chairSel,
  wheelSel,
  orderIdSel,
} from '../../redux/selectors/selectors';
import styles from './OrderPage.module.scss';
import SideBar from '../sideBar/SideBar';
import Logo from '../startScreen/logo/Logo';
import City from '../startScreen/city/City';
import Summary from './orderSteps/summary/Summary';
import Tabs from './tabs/Tabs';
import ModelContainer from './orderSteps/model/ModelContainer';
import Order from './order/Order';
import LocationContainer from './orderSteps/location/LocationContainer';
import AddOptionsContainer from './orderSteps/addOptions/AddOptionsContainer';
import { sendOrder } from '../../redux/thunk/order.thunk';
import Confirmation from './confirmation/Confirmation';

const OrderPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestCities());
    dispatch(requestPoints());
    dispatch(requestCars());
    dispatch(requestRate());
  }, []);

  const cities = useSelector(citiesSel);
  const points = useSelector(pointsSel);
  const rates = useSelector(ratesSel);
  const userCity = useSelector(userCitySel);
  const userPoint = useSelector(userPointSel);
  const cars = useSelector(carsSel);
  const userModel = useSelector(userModelSel);
  const modelColor = useSelector(modelColorSel);
  const userPriceMin = useSelector(userPriceMinSel);
  const userPriceMax = useSelector(userPriceMaxSel);
  const userColor = useSelector(userColorSel);
  const price = useSelector(priceSel);
  const userCityId = useSelector(userCityIdSel);
  const userPointId = useSelector(userPointIdSel);
  const carId = useSelector(carIdSel);
  const dateFrom = useSelector(dateFromSel);
  const dateTo = useSelector(dateToSel);
  const rateId = useSelector(rateIdSel);
  const tank = useSelector(tankSel);
  const chair = useSelector(chairSel);
  const wheel = useSelector(wheelSel);
  const orderId = useSelector(orderIdSel);

  const [activePage, setActivePage] = useState(0);
  const [visibleTabs, setVisibleTabs] = useState(true);

  const makeOrder = () => {
    dispatch(
      sendOrder(
        userCityId,
        userPointId,
        carId,
        userColor,
        dateFrom,
        dateTo,
        rateId,
        price,
        tank,
        chair,
        wheel
      )
    );
    setVisibleTabs(false);
  };

  return (
    <div className={styles.order_page}>
      <SideBar />
      <div className={styles.info}>
        <div className={styles.top_row}>
          <Logo />
          <City userCity={userCity} />
        </div>
        {visibleTabs ? (
          <Tabs
            userCity={userCity}
            changeActivePage={(e) => setActivePage(e)}
            activePage={activePage}
            userPoint={userPoint}
            model={userModel}
            price={price}
          />
        ) : (
          <Confirmation orderId={orderId} />
        )}
        <div className={styles.order_settings}>
          {activePage == 0 ? (
            <LocationContainer cities={cities} points={points} />
          ) : activePage == 1 ? (
            <ModelContainer cars={cars} />
          ) : activePage == 2 ? (
            <AddOptionsContainer colors={modelColor} userPriceMin={userPriceMin} rates={rates} />
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
                : visibleTabs
                ? 'Заказать'
                : 'Отменить'
            }
            disable_btn={
              activePage == 0 ? !(userCity && userPoint) : activePage == 1 ? !userModel : ''
            }
            onClick={(e) => {
              activePage < 3 ? setActivePage(activePage + 1) : makeOrder();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default OrderPage;

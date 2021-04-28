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
import { requestOrder, sendOrder } from '../../redux/thunk/order.thunk';
import ConfirmationSuccess from './confirmationSuccess/ConfirmationSuccess';
import Button from '../common/button/Button';
import Confirmation from './confirmation/Confirmation';
import {
  setCarId,
  setChair,
  setDateFrom,
  setDateTo,
  setModel,
  setModelColor,
  setModelImage,
  setOrderId,
  setPrice,
  setPriceMax,
  setPriceMin,
  setTank,
  setUserCity,
  setUserCityId,
  setUserPoint,
  setUserPointId,
  setWheel,
} from '../../redux/actions/actions';

const OrderPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestCities());
    dispatch(requestPoints());
    dispatch(requestCars());
    dispatch(requestRate());
    // {
    //   if (window.localStorage.getItem('orderId') != null) {
    //     dispatch(requestOrder(window.localStorage.getItem('orderId')));
    //   }
    // }
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
  const [pageWhenMobile, setPageWhenMobile] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [orderCanc, setOrderCanc] = useState(false);

  const buttonFunction = () => {
    if (activePage < 3) {
      setActivePage(activePage + 1);
    }
    if (activePage == 3 && !toggle && !orderId) {
      setToggle(true);
    }
    if (activePage == 3 && !toggle && orderId) {
      dispatch(setOrderId(''));
      setOrderCanc(true);
      localStorage.setItem('orderId', '');
      window.history.pushState(window.location.href, null, '/NeedForDrive#/OrderPage/');
      setVisibleTabs(true);
      dispatch(setUserCity(''));
      dispatch(setUserCityId(''));
      dispatch(setUserPoint(''));
      dispatch(setUserPointId(''));
      dispatch(setModel(''));
      dispatch(setCarId(''));
      dispatch(setPriceMin(''));
      dispatch(setPriceMax(''));
      dispatch(setModelImage(''));
      dispatch(setModelColor(''));
      dispatch(setDateFrom(''));
      dispatch(setDateTo(''));
      dispatch(setPrice(''));
      dispatch(setTank(''));
      dispatch(setChair(''));
      dispatch(setWheel(''));
    }
  };

  const changePageWhenMobile = () => {
    if (activePage == 0 && !pageWhenMobile && userCity && userPoint) {
      setActivePage(1);
    }
    if (activePage == 1 && !pageWhenMobile && userModel) {
      setActivePage(2);
    }
    if (activePage == 2 && !pageWhenMobile && price) {
      setActivePage(3);
    }
    if (activePage == 3 && !pageWhenMobile && !toggle && !orderId) {
      setToggle(true);
    }
    if (activePage == 3 && !pageWhenMobile && !toggle && orderId) {
      dispatch(setOrderId(''));
      setOrderCanc(true);
      localStorage.setItem('orderId', '');
      window.history.pushState(window.location.href, null, '/NeedForDrive#/OrderPage/');
      setVisibleTabs(true);
      dispatch(setUserCity(''));
      dispatch(setUserCityId(''));
      dispatch(setUserPoint(''));
      dispatch(setUserPointId(''));
      dispatch(setModel(''));
      dispatch(setCarId(''));
      dispatch(setPriceMin(''));
      dispatch(setPriceMax(''));
      dispatch(setModelImage(''));
      dispatch(setModelColor(''));
      dispatch(setDateFrom(''));
      dispatch(setDateTo(''));
      dispatch(setPrice(''));
      dispatch(setTank(''));
      dispatch(setChair(''));
      dispatch(setWheel(''));
    }
  };

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
      {toggle && (
        <Confirmation
          onClick={() => {
            setToggle(false);
          }}
          otherOnClick={() => {
            setToggle(false);
            makeOrder();
          }}
        />
      )}
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
          !orderCanc && <ConfirmationSuccess orderId={orderId} />
        )}
        <div className={toggle ? styles.display_visible : styles.display_none}></div>
        {pageWhenMobile && (
          <Order
            city={userCity}
            address={userPoint}
            model={userModel}
            priceMin={userPriceMin}
            priceMax={userPriceMax}
            color={userColor}
          />
        )}
        <div className={styles.order_settings}>
          <div className={styles.orderContent}>
            {activePage == 0 && !pageWhenMobile ? (
              <LocationContainer cities={cities} points={points} />
            ) : activePage == 1 && !pageWhenMobile ? (
              <ModelContainer cars={cars} />
            ) : activePage == 2 && !pageWhenMobile ? (
              <AddOptionsContainer colors={modelColor} userPriceMin={userPriceMin} rates={rates} />
            ) : (
              activePage == 3 && !pageWhenMobile && <Summary orderCanc={orderCanc} />
            )}
          </div>
          <div className={styles.display_order_when_mobile}>
            <div className={pageWhenMobile ? styles.display_none : styles.display_visible}>
              <Button
                innerText={
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
                disabled={
                  activePage == 0
                    ? !(userCity && userPoint)
                    : activePage == 1
                    ? !userModel
                    : activePage == 2
                    ? !price
                    : ''
                }
                onClick={() => {
                  changePageWhenMobile();
                }}
                isRed={orderId}
              />
            </div>
            <Button
              innerText={pageWhenMobile ? 'Продолжить' : 'Детали заказа'}
              onClick={() => {
                setPageWhenMobile(!pageWhenMobile);
              }}
            />
          </div>
          <div className={styles.display_order}>
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
                activePage == 0
                  ? !(userCity && userPoint)
                  : activePage == 1
                  ? !userModel
                  : activePage == 2
                  ? !price
                  : ''
              }
              onClick={(e) => {
                buttonFunction();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;

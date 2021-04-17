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
} from '../../redux/actions/actions';
import OrderPage from './OrderPage';
import {
  userCitySel,
  citiesSel,
  pointsSel,
  userPointSel,
  carsSel,
  userColorSel,
  userModelSel,
  userPriceMinSel,
  userPriceMaxSel,
} from '../../redux/selectors/selectors';

const OrderPageContainer = () => {
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
  const userColor = useSelector(userColorSel);
  const userPriceMin = useSelector(userPriceMinSel);
  const userPriceMax = useSelector(userPriceMaxSel);

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
    dispatch(setUserColor(colors));
    dispatch(setPriceMin(priceMin));
    dispatch(setPriceMax(priceMax));
  };

  return (
    <OrderPage
      userCity={userCity}
      cities={cities}
      points={points}
      changeCity={changeCity}
      userPoint={userPoint}
      changePoint={changePoint}
      cars={cars}
      changeModel={changeModel}
      userColor={userColor}
      activePage={activePage}
      setActivePage={setActivePage}
      userModel={userModel}
      userPriceMin={userPriceMin}
      userPriceMax={userPriceMax}
    />
  );
};

export default OrderPageContainer;

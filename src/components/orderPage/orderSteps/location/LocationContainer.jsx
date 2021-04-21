import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setUserCity,
  setUserCityId,
  setUserPoint,
  setUserPointId,
} from '../../../../redux/actions/actions';
import { citiesIdSel, userCitySel, userPointSel } from '../../../../redux/selectors/selectors';
import Location from './Location';

const LocationContainer = ({ cities, points }) => {
  const userCity = useSelector(userCitySel);
  const citiesId = useSelector(citiesIdSel);
  const userPoint = useSelector(userPointSel);

  const dispatch = useDispatch();

  const changeCity = (city) => {
    dispatch(setUserCity(city));
    dispatch(setUserPoint(''));
    dispatch(setUserCityId(citiesId[cities.indexOf(city)]));
  };
  const changePoint = (point) => {
    dispatch(setUserPoint(point));
    for (var i in points) {
      if (points[i].address == point) {
        dispatch(setUserPointId(points[i].id));
      }
    }
  };
  return (
    <Location
      cities={cities}
      points={points}
      userCity={userCity}
      userPoint={userPoint}
      changeCity={changeCity}
      changePoint={changePoint}
    />
  );
};

export default LocationContainer;

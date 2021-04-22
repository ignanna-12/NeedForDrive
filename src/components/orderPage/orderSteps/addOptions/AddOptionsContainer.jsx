import React, { useEffect, useMemo, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  setChair,
  setPeriod,
  setPrice,
  setRateId,
  setRateName,
  setTank,
  setUserColor,
  setWheel,
} from '../../../../redux/actions/actions';
import {
  chairSel,
  tankSel,
  userPriceMinSel,
  wheelSel,
} from '../../../../redux/selectors/selectors';
import AddOptions from './AddOptions';

const AddOptionsContainer = ({ colors, rates }) => {
  const dispatch = useDispatch();

  const tank = useSelector(tankSel);
  const chair = useSelector(chairSel);
  const wheel = useSelector(wheelSel);
  const userPriceMin = useSelector(userPriceMinSel);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState();
  const [hours, setHours] = useState(0);
  const [tax, setTax] = useState(0);

  const changeColor = (color) => {
    dispatch(setUserColor(color));
  };
  const calcPeriod = (startDate, endDate) => {
    if (endDate) {
      const x = Math.ceil((endDate.getTime() - startDate.getTime()) / (3600 * 1000));
      let day = Math.ceil(x / 24);
      let h = x % 24;
      dispatch(setPeriod(day + 'д ' + h + 'ч'));
      setHours(x);
    }
  };
  const taxChange = (v) => {
    dispatch(setRateName(v));
    if (v == 'Поминутно') {
      setTax(Math.ceil(7 * hours * 60));
    } else if (v == 'На сутки') {
      setTax(1999 * Math.ceil(hours / 24));
    } else {
      setTax(7500 * Math.ceil(hours / 168));
    }
  };
  const calcPrice = (tax, tank, chair, wheel, userPriceMin) => {
    let tankN = 0;
    let chairN = 0;
    let wheelN = 0;
    if (tank) {
      tankN = 500;
    }
    if (chair) {
      chairN = 200;
    }
    if (wheel) {
      wheelN = 1600;
    }
    if (tax) {
      if (tax + tank + chair + wheel < userPriceMin) {
        dispatch(setPrice(userPriceMin));
      } else {
        dispatch(setPrice(tax + tankN + chairN + wheelN));
      }
    }
  };
  const changeTank = (tank) => {
    dispatch(setTank(!tank));
  };
  const changeChair = (chair) => {
    dispatch(setChair(!chair));
  };
  const changeWheel = (wheel) => {
    dispatch(setWheel(!wheel));
  };
  useEffect(() => {
    calcPeriod(startDate, endDate);
  }, [startDate, endDate]);

  useEffect(() => {
    if (tax) {
      calcPrice(tax, tank, chair, wheel, userPriceMin);
    }
  }, [tax, tank, chair, wheel, userPriceMin]);

  return (
    <AddOptions
      colors={colors}
      rates={rates}
      changeColor={changeColor}
      startDate={startDate}
      setStartDate={setStartDate}
      calcPeriod={calcPeriod}
      endDate={endDate}
      setEndDate={setEndDate}
      taxChange={taxChange}
      changeTank={changeTank}
      changeChair={changeChair}
      changeWheel={changeWheel}
    />
  );
};

export default AddOptionsContainer;

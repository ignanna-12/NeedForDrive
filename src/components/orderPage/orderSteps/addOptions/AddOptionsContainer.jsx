import React, { useEffect, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  setChair,
  setPeriod,
  setPrice,
  setRateName,
  setTank,
  setUserColor,
  setWheel,
} from '../../../../redux/actions/actions';
import {
  chairSel,
  dateFromSel,
  dateToSel,
  rateNameSel,
  tankSel,
  userColorSel,
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
  const userColor = useSelector(userColorSel);
  const rateName = useSelector(rateNameSel);
  const dateFrom = useSelector(dateFromSel);
  const dateTo = useSelector(dateToSel);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState();
  const [hours, setHours] = useState(0);
  const [tax, setTax] = useState(0);

  const changeColor = (color) => {
    dispatch(setUserColor(color));
  };
  const calcPeriod = (dateFrom, dateTo) => {
    if (dateTo) {
      const x = Math.ceil((dateTo.getTime() - dateFrom) / (3600 * 1000));
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
  const changeTank = () => {
    dispatch(setTank(!tank));
  };
  const changeChair = () => {
    dispatch(setChair(!chair));
  };
  const changeWheel = () => {
    dispatch(setWheel(!wheel));
  };
  useEffect(() => {
    calcPeriod(dateFrom, dateTo);
  }, [dateFrom, dateTo]);

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
      startDate={dateFrom}
      calcPeriod={calcPeriod}
      endDate={dateTo}
      taxChange={taxChange}
      changeTank={changeTank}
      changeChair={changeChair}
      changeWheel={changeWheel}
      tank={tank}
      chair={chair}
      wheel={wheel}
      userColor={userColor}
      rateName={rateName}
    />
  );
};

export default AddOptionsContainer;

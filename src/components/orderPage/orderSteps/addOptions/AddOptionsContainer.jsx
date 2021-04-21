import React, { useEffect, useState } from 'react';
import Radios from '../../../common/radios/Radios';
import DatePicker from 'react-datepicker';
import styles from './AddOptions.module.scss';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  setDateFrom,
  setDateTo,
  setPeriod,
  setPrice,
  setRateId,
  setRateName,
  setUserColor,
} from '../../../../redux/actions/actions';
import {
  chairSel,
  rateNameSel,
  ratesSel,
  tankSel,
  userPriceMinSel,
  wheelSel,
} from '../../../../redux/selectors/selectors';
import { requestRate } from '../../../../redux/thunk/rate.thunk';

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
  const [price, setPrice] = useState(1);

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
    for (var i in rates) {
      if (i.name == v) {
        dispatch(setRateId(i.id));
        dispatch(setRateName(i.name));
        setPrice(parseInt(i.price));
      }
    }
    if (v == 'Поминутно') {
      setTax(Math.ceil(price * hours * 60));
    } else if (v == 'На сутки') {
      setTax(price * Math.ceil(hours / 24));
    } else {
      setTax(price * Math.ceil(hours / 168));
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
    if (tax + tank + chair + wheel < userPriceMin) {
      dispatch(setPrice(userPriceMin));
    } else {
      dispatch(setPrice(tax + tankN + chairN + wheelN));
    }
  };
  useEffect(() => {
    calcPeriod(startDate, endDate);
  }, [startDate, endDate]);

  useEffect(() => {
    calcPrice(tax, tank, chair, wheel, userPriceMin);
  }, [tax, tank, chair, wheel, userPriceMin]);

  return (
    <div className={styles.add_options}>
      <div className={styles.title}>Цвет</div>
      <Radios
        setDefaultValue={(e) => {
          changeColor('Любой');
        }}
        selectedValue={(v) => {
          changeColor(v);
        }}
        defaultText={'Любой'}
        list={colors}
      />
      <div className={styles.title}>Дата аренды</div>
      <div className={styles.picks}>
        <div className={styles.withPick}>
          <p>С</p>
          <DatePicker
            className={styles.datapick}
            selected={startDate}
            onChange={(date) => {
              setStartDate(date);
              calcPeriod(startDate, endDate);
              dispatch(setDateFrom(date));
            }}
            showTimeSelect
            dateFormat="dd.MM.yy hh:mm"
            isClearable
            minDate={new Date()}
          />
        </div>
        <div className={styles.withPick}>
          <p>По</p>
          <DatePicker
            className={styles.datapick}
            selected={endDate}
            onChange={(date) => {
              setEndDate(date);
              calcPeriod(startDate, endDate);
              dispatch(setDateTo(date));
            }}
            showTimeSelect
            dateFormat="dd.MM.yy hh:mm"
            isClearable
            placeholderText="Введите дату и время"
            minDate={new Date()}
          />
        </div>
      </div>
      <div className={styles.title}>Тариф</div>
      <Radios
        selectedValue={(v) => {
          taxChange(v);
        }}
        list={rates.map((i) => i.name)}
        vert={true}
      />
    </div>
  );
};

export default AddOptionsContainer;

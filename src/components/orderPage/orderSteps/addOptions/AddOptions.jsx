import React, { useEffect, useState } from 'react';
import Radios from '../../../common/radios/Radios';
import DatePicker from 'react-datepicker';
import styles from './AddOptions.module.scss';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';
import { setPeriod, setPrice } from '../../../../redux/actions/actions';
import { priceSel } from '../../../../redux/selectors/selectors';

const AddOptions = ({ colors, onChangeColor, userPriceMin }) => {
  const dispatch = useDispatch();
  const price = useSelector(priceSel);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState();
  const [taxName, setTaxName] = useState('На сутки, 1999 ₽/сутки');
  const [hours, setHours] = useState(0);
  const calcPeriod = (startDate, endDate) => {
    if (endDate) {
      const x = parseInt((endDate.getTime() - startDate.getTime()) / (3600 * 1000));
      let day = parseInt(x / 24);
      let h = x % 24;
      dispatch(setPeriod(day + 'д ' + h + 'ч'));
      setHours(x);
    }
  };
  const calcPrice = (taxName, hours, tank, chair, wheel, userPriceMin) => {
    const tax = () => {
      if (taxName == 'Поминутно, 7₽/мин') {
        tax = 7 * hours * 60;
      }
      if (taxName == 'На сутки, 1999 ₽/сутки') {
        tax = 1999 * Math.ceil(hours / 24);
      } else {
        tax = 7500 * Math.ceil(hours / 24 / 7);
      }
    };
    if (tax + tank + chair + wheel < userPriceMin) {
      dispatch(setPrice(userPriceMin));
    } else {
      dispatch(setPrice(tax + tank + chair + wheel));
    }
  };
  useEffect(() => {
    calcPeriod(startDate, endDate);
  }, [startDate, endDate]);

  return (
    <div className={styles.add_options}>
      <div className={styles.title}>Цвет</div>
      <Radios
        setDefaultValue={(e) => {
          onChangeColor('Любой');
        }}
        selectedValue={(v) => {
          onChangeColor(v);
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
          setTaxName(v);
        }}
        list={['Поминутно, 7₽/мин', 'На сутки, 1999 ₽/сутки', 'Недельный плюс, 7500 ₽/7 дней']}
        vert={true}
      />
    </div>
  );
};

export default AddOptions;

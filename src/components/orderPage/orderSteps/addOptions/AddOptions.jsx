import React, { useEffect, useState } from 'react';
import Radios from '../../../common/radios/Radios';
import DatePicker from 'react-datepicker';
import styles from './AddOptions.module.scss';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch } from 'react-redux';
import { setPeriod, setPrice } from '../../../../redux/actions/actions';

const AddOptions = ({ colors, onChangeColor }) => {
  // useEffect(() => {
  //   dispatch(setPrice);
  // }, [price]);
  // const dispatch = useDispatch();

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState();
  const [tax, setTax] = useState('На сутки, 1999 ₽/сутки');
  const calcPeriod = (startDate, endDate) => {
    if (endDate) {
      const x = parseInt((endDate.getTime() - startDate.getTime()) / (3600 * 1000));
      let day = parseInt(x / 24);
      let hours = x % 24;
      dispatch(setPeriod(day + 'д ' + hours + 'ч'));
    }
  };

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
          setTax(v);
        }}
        list={['Поминутно, 7₽/мин', 'На сутки, 1999 ₽/сутки']}
        vert={true}
      />
    </div>
  );
};

export default AddOptions;

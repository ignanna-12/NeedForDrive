import React, { useState } from 'react';
import Radios from '../../../common/radios/Radios';
import DatePicker from 'react-datepicker';
import styles from './AddOptions.module.scss';
import 'react-datepicker/dist/react-datepicker.css';

const AddOptions = ({ colors, onChangeColor }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState();
  const [tax, setTax] = useState('На сутки, 1999 ₽/сутки');

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
            onChange={(date) => setStartDate(date)}
            showTimeSelect
            dateFormat="dd.MM.yy hh:mm"
            isClearable
          />
        </div>
        <div className={styles.withPick}>
          <p>По</p>
          <DatePicker
            className={styles.datapick}
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            showTimeSelect
            dateFormat="dd.MM.yy hh:mm"
            isClearable
            placeholderText="Введите дату и время"
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

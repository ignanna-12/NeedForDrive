import React from 'react';
import Radios from '../../../common/radios/Radios';
import DatePicker from 'react-datepicker';
import styles from './AddOptions.module.scss';
import 'react-datepicker/dist/react-datepicker.css';
import { setDateFrom, setDateTo } from '../../../../redux/actions/actions';
import { useDispatch } from 'react-redux';
import Checkbox from '../../../common/checkbox/Checkbox';

const AddOptions = ({
  colors,
  changeColor,
  startDate,
  setStartDate,
  calcPeriod,
  endDate,
  setEndDate,
  taxChange,
  rates,
  changeTank,
  changeChair,
  changeWheel,
}) => {
  const dispatch = useDispatch();
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
      <div className={styles.title}>Доп.услуги</div>
      <Checkbox onClick={changeTank} label={'Полный бак, 500р'} />
      <Checkbox onClick={changeChair} label={'Детское кресло, 200р'} />
      <Checkbox onClick={changeWheel} label={'Правый руль, 1600р'} />
    </div>
  );
};

export default AddOptions;

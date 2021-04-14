import React, { useState } from 'react';
import SVG from 'react-inlinesvg';
import Vector from '../../../assets/icons/Vector.svg';
import styles from './Tabs.module.scss';

const Tabs = ({ userCity, userPoint = 'у', model = '', changeActivePage }) => {
  const [activePage, setActivePage] = useState(0);
  return (
    <div className={styles.links}>
      <button
        className={activePage == 0 ? styles.links_button_active : styles.links_button}
        onClick={(e) => {
          setActivePage(0);
          changeActivePage(0);
        }}
      >
        Местоположение
      </button>
      <SVG src={Vector} />
      <button
        className={activePage == 1 ? styles.links_button_active : styles.links_button}
        // disabled={userCity == '' || userPoint == ''}
        onClick={(e) => {
          setActivePage(1);
          changeActivePage(1);
        }}
      >
        Модель
      </button>
      <SVG src={Vector} />
      <button
        className={activePage == 2 ? styles.links_button_active : styles.links_button}
        disabled={model == ''}
        onClick={(e) => {
          setActivePage(2);
          changeActivePage(2);
        }}
      >
        Дополнительно
      </button>
      <SVG src={Vector} />
      <button
        className={activePage == 3 ? styles.links_button_active : styles.links_button}
        disabled={true}
        onClick={(e) => {
          setActivePage(3);
          changeActivePage(3);
        }}
      >
        Итого
      </button>
    </div>
  );
};

export default Tabs;

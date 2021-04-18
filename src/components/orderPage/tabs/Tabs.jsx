import React from 'react';
import SVG from 'react-inlinesvg';
import Vector from '../../../assets/icons/Vector.svg';
import styles from './Tabs.module.scss';

const Tabs = ({ userCity, userPoint, model, changeActivePage, activePage }) => {
  return (
    <div className={styles.lines}>
      <div className={styles.links}>
        <button
          className={activePage == 0 ? styles.links_button_active : styles.links_button}
          onClick={() => {
            changeActivePage(0);
          }}
        >
          Местоположение
        </button>
        <SVG src={Vector} />
        <button
          className={activePage == 1 ? styles.links_button_active : styles.links_button}
          disabled={userCity == '' || userPoint == ''}
          onClick={() => {
            changeActivePage(1);
          }}
        >
          Модель
        </button>
        <SVG src={Vector} />
        <button
          className={activePage == 2 ? styles.links_button_active : styles.links_button}
          disabled={model == ''}
          onClick={() => {
            changeActivePage(2);
          }}
        >
          Дополнительно
        </button>
        <SVG src={Vector} />
        <button
          className={activePage == 3 ? styles.links_button_active : styles.links_button}
          disabled={true}
          onClick={() => {
            changeActivePage(3);
          }}
        >
          Итого
        </button>
      </div>
    </div>
  );
};

export default Tabs;

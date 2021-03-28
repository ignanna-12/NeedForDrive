import React, { useState } from 'react';
import { Route, NavLink } from 'react-router-dom';
import SVG from 'react-inlinesvg';
import styles from './Order.module.scss';
import SideBar from '../sideBar/SideBar';
import Logo from '../startScreen/logo/Logo';
import City from '../startScreen/city/City';
import Vector from '../../assets/icons/Vector.svg';
import Location from './steps/location/Location';
import Model from './steps/model/Model';
import AddOptions from './steps/addOptions/AddOptions';
import Summary from './steps/summary/Summary';
import UserChoise from '../userChoise/UserChoise';

const Order = () => {
  const [activePage, setActivePage] = useState(0);
  return (
    <div className={styles.order_page}>
      <SideBar />
      <div className={styles.info}>
        <div className={styles.top_row}>
          <Logo />
          <City />
        </div>
        <div className={styles.links}>
          <button
            className={activePage == 0 ? styles.links_button_active : styles.links_button}
            onClick={(e) => {
              setActivePage(0);
            }}
          >
            Местоположение
          </button>
          <SVG src={Vector} />
          <button
            className={activePage == 1 ? styles.links_button_active : styles.links_button}
            onClick={(e) => {
              setActivePage(1);
            }}
          >
            Модель
          </button>
          <SVG src={Vector} />
          <button
            className={activePage == 2 ? styles.links_button_active : styles.links_button}
            onClick={(e) => {
              setActivePage(2);
            }}
          >
            Дополнительно
          </button>
          <SVG src={Vector} />
          <button
            className={activePage == 3 ? styles.links_button_active : styles.links_button}
            onClick={(e) => {
              setActivePage(3);
            }}
          >
            Итого
          </button>
        </div>
        <div className={styles.order_settings}>
          {activePage == 0 ? (
            <Location />
          ) : activePage == 1 ? (
            <Model />
          ) : activePage == 2 ? (
            <AddOptions />
          ) : (
            <Summary />
          )}
          <UserChoise />
        </div>
      </div>
    </div>
  );
};

export default Order;

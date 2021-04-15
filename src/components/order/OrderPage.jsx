import React from 'react';
import styles from './Order.module.scss';
import SideBar from '../sideBar/SideBar';
import Logo from '../startScreen/logo/Logo';
import City from '../startScreen/city/City';
import Location from './steps/location/Location';
import AddOptions from './steps/addOptions/AddOptions';
import Summary from './steps/summary/Summary';
import UserChoise from '../userChoise/UserChoise';
import Tabs from './tabs/Tabs';
import ModelContainer from './steps/model/ModelContainer';

const OrderPage = ({
  userCity,
  cities,
  points,
  changeCity,
  userPoint,
  changePoint,
  cars,
  changeModel,
  userColor,
  activePage,
  setActivePage,
  userModel,
  userPriceMin,
  userPriceMax,
}) => {
  return (
    <div className={styles.order_page}>
      <SideBar />
      <div className={styles.info}>
        <div className={styles.top_row}>
          <Logo />
          <City userCity={userCity} />
        </div>
        <Tabs
          userCity={userCity}
          changeActivePage={(e) => setActivePage(e)}
          activePage={activePage}
          userPoint={userPoint}
          model={userModel}
        />
        <div className={styles.order_settings}>
          {activePage == 0 ? (
            <Location
              cities={cities}
              points={points}
              onChangeCity={changeCity}
              userCity={userCity}
              userPoint={userPoint}
              onChangePoint={changePoint}
            />
          ) : activePage == 1 ? (
            <ModelContainer cars={cars} onChangeModel={changeModel} />
          ) : activePage == 2 ? (
            <AddOptions colors={userColor} />
          ) : (
            <Summary />
          )}
          <UserChoise
            city={userCity}
            address={userPoint}
            model={userModel}
            priceMin={userPriceMin}
            priceMax={userPriceMax}
            btnText={
              activePage == 0
                ? 'Выбрать модель'
                : activePage == 1
                ? 'Дополнительно'
                : activePage == 2
                ? 'Итого'
                : 'Заказать'
            }
            disable_btn={
              activePage == 0 ? !(userCity && userPoint) : activePage == 1 ? !userModel : ''
            }
            onClick={(e) => {
              activePage < 3 ? setActivePage(activePage + 1) : setActivePage(3);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default OrderPage;

import React from 'react';
import { NavLink } from 'react-router-dom';
import SideBar from '../sideBar/SideBar';
import Autocomplete from '../autocomplete/Autocomplete';
import City from './city/City';
import Footer from './footer/Footer';
import HeroBlock from './heroBlock/HeroBlock';
import Logo from './logo/Logo';
import styles from './StartScreen.module.scss';

const StartScreen = () => {
  const startScreenRef = React.createRef();
  return (
    <div className={styles.startScreen} ref={startScreenRef}>
      <div className={styles.sidebar_hidden_when_mobile}>
        <SideBar />
      </div>
      <div className={styles.startScreen_info}>
        <div className={styles.top_row}>
          <div className={styles.sidebar_for_mobile}>
            <SideBar parent={startScreenRef} />
          </div>
          <div className={styles.top_row_logo_city}>
            <Logo />
            <City />
          </div>
        </div>
        <div className={styles.hero_plus_btn}>
          <HeroBlock />
          <NavLink to="/Order">
            <button className={styles.start_btn}>Забронировать</button>
          </NavLink>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default StartScreen;

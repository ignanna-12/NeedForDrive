import React, { useState } from 'react';
import styles from './Autocomplete.module.scss';

const Autocomplete = () => {
  const [display, setDisplay] = useState(false);
  const [search, setSearch] = useState('');

  const cities = ['Ульяновск', 'Самара', 'Сочи', 'Уфа', 'Саранск'];

  const setCity = (city) => {
    setSearch(city);
    setDisplay(false);
  };

  const onClickInput = () => {
    setSearch('');
    setDisplay(!display);
  };

  return (
    <div className={styles.autocomplete}>
      <svg
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.23901 10.3912C4.25342 6.15065 7.70278 2.72465 11.9434 2.73906C16.1839 2.75347 19.6099 6.20282 19.5955 10.4434V10.5304C19.5434 13.2869 18.0042 15.8347 16.1173 17.826C15.0381 18.9466 13.833 19.9387 12.526 20.7825C12.1765 21.0848 11.6581 21.0848 11.3086 20.7825C9.36008 19.5143 7.64995 17.9131 6.2564 16.0521C5.01436 14.4293 4.30918 12.4597 4.23901 10.4173L4.23901 10.3912Z"
          stroke="#999999"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          opacity="0.4"
          cx="11.9172"
          cy="10.539"
          r="2.46087"
          stroke="#999999"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="styles.autocontainer">
        <input
          className={styles.autocontainer_input}
          onClick={onClickInput}
          placeholder="город"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {display && (
          <div>
            {cities
              .filter((el) => el.toLowerCase().startsWith(search.toLowerCase()))
              .map((v, i) => {
                return (
                  <div className={styles.list} key={i} onClick={() => setCity(v)}>
                    <span>{v}</span>
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Autocomplete;

import React, { useState } from 'react';
import styles from './Autocomplete.module.scss';

const Autocomplete = ({ title, innerText, list }) => {
  const [display, setDisplay] = useState(false);
  const [search, setSearch] = useState('');

  // const cities = ['Ульяновск', 'Самара', 'Сочи', 'Уфа', 'Саранск'];

  const setItem = (item) => {
    setSearch(item);
    setDisplay(false);
  };

  const onClickInput = () => {
    setSearch('');
    setDisplay(!display);
  };

  return (
    <div className={styles.autocomplete}>
      {title}
      <div className="styles.autocontainer">
        <input
          className={styles.autocontainer_input}
          onClick={onClickInput}
          placeholder={innerText}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className={styles.clear_button} onClick={(e) => setSearch('')}>
          x
        </button>
        {display && (
          <div>
            {list
              .filter((el) => el.toLowerCase().startsWith(search.toLowerCase()))
              .map((v, i) => {
                return (
                  <div className={styles.list} key={i} onClick={() => setItem(v)}>
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

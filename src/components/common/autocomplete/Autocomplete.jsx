import React, { useEffect, useState } from 'react';
import styles from './Autocomplete.module.scss';
import SVG from 'react-inlinesvg';
import littleCrest from '../../../assets/icons/littleCrest.svg';

const Autocomplete = ({ title, innerText, list, active, onChange }) => {
  const [display, setDisplay] = useState(false);
  const [search, setSearch] = useState('');

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
          className={
            list.length > 0 ? styles.autocontainer_input : styles.autocontainer_input_blocked
          }
          onClick={onClickInput}
          disabled={!active}
          placeholder={innerText}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button
          className={search == '' ? styles.display_none : styles.clear_button}
          onClick={(e) => {
            setSearch('');
            onChange('');
          }}
        >
          <SVG src={littleCrest} />
        </button>
        {display && (
          <div className={styles.extended_block}>
            {list
              .filter((el) => el.toLowerCase().startsWith(search.toLowerCase()))
              .map((v, i) => {
                return (
                  <div
                    className={styles.list}
                    key={i}
                    onClick={() => {
                      onChange(v);
                      setItem(v);
                    }}
                  >
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

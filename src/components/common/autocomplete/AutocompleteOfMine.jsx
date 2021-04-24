import React, { useEffect, useRef, useState } from 'react';
import styles from './AutocompleteOfMine.module.scss';
import SVG from 'react-inlinesvg';
import littleCrest from '../../../assets/icons/littleCrest.svg';

const AutocompleteOfMine = ({ title, innerText, list, active, onChange }) => {
  const [display, setDisplay] = useState(false);
  const [search, setSearch] = useState('');
  const wrapperRef = useRef(null);

  const setItem = (item) => {
    setSearch(item);
    setDisplay(false);
  };
  const onClickInput = () => {
    setSearch('');
    setDisplay(!display);
  };
  const handleBlur = (e) => {
    if (e.target.id != 'ououou') {
      setDisplay(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  const handleClickOutside = (e) => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(e.target)) {
      setDisplay(false);
    }
  };

  return (
    <div ref={wrapperRef} className={styles.autocomplete}>
      {title}
      <div className="styles.autocontainer">
        <input
          className={
            list.length > 0 ? styles.autocontainer_input : styles.autocontainer_input_blocked
          }
          onClick={onClickInput}
          disabled={!active}
          placeholder={innerText}
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button
          className={search == '' ? styles.display_none : styles.clear_button}
          onClick={() => {
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
                    tabIndex="0"
                  >
                    <span className={styles.span}>{v}</span>
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
};

export default AutocompleteOfMine;

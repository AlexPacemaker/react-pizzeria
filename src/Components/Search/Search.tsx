//компонент поиска

import React, { useCallback, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchValue } from "../../redux/slices/searchSlice";
import { debounce } from "lodash";
import styles from "./Search.module.scss";
import { SvgMaker } from "../SvgMaker";

const Search: React.FC = () => {
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  const [value, setValue] = useState("");

  //функция очистки поля поиска по нажатию
  const onClickClear = () => {
    dispatch(setSearchValue(""));
    setValue("");
    inputRef.current?.focus();
  };

  //дебаунс функция, чтобы предотвратить частые запросы на бэкенд
  const updateSearchValue = useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str));
    }, 1000),
    []
  );

  //функция контроллируемого ввода
  const onchangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={styles.root}>
      <div className={styles.magnifier}>
        <SvgMaker id='magnifier' />
      </div>
      <input
        ref={inputRef}
        value={value}
        onChange={onchangeInput}
        className={styles.input}
        placeholder='Поиск пиццы..'
      />
      {value && (
        <svg
          onClick={onClickClear}
          className={styles.clear}
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z' />
        </svg>
      )}
    </div>
  );
};

export default Search;

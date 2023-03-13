//Компонент. Раздел сортировки по категориям

import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  SortPropertyEnum,
  selectSort,
  setSort,
} from "../redux/slices/filterSlice";

import arrowUp from "../assets/img/arrow-up.svg";
import arrowDown from "../assets/img/arrow-down.svg";
import triangle from "../assets/img/triangle.svg";

//тип для массива
type SortItem = {
  name: string;
  sortProperty: SortPropertyEnum;
  src: string;
};

//типизированный массив с категориями и пропсами
export const sortList: SortItem[] = [
  {
    name: "популярности ",
    src: arrowDown,
    sortProperty: SortPropertyEnum.RATING_DESC,
  },
  {
    name: "популярности ",
    src: arrowUp,
    sortProperty: SortPropertyEnum.RATING_ASC,
  },
  {
    name: "цене ",
    src: arrowDown,
    sortProperty: SortPropertyEnum.PRICE_DESC,
  },
  {
    name: "цене ",
    src: arrowUp,
    sortProperty: SortPropertyEnum.PRICE_ASC,
  },
  {
    name: "алфавиту ",
    src: arrowDown,
    sortProperty: SortPropertyEnum.TITLE_DESC,
  },
  {
    name: "алфавиту ",
    src: arrowUp,
    sortProperty: SortPropertyEnum.TITLE_ASC,
  },
];

const Sort: React.FC = () => {
  const sort = useSelector(selectSort);
  const dispatch = useDispatch();
  const sortRef = useRef<HTMLDivElement>(null);

  //хук для закрытия-открытия модального окна с категориями сортировки
  const [popOpen, setpopOpen] = useState(false);

  //хэндлер для обработки выбора категория по клику
  const onClickCategorie = (obj: SortItem) => {
    dispatch(setSort(obj));
    setpopOpen(false);
  };

  //закрытие окна сортировки по клику вне его
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sortRef.current && !event.composedPath().includes(sortRef.current)) {
        setpopOpen(false);
      }
    };
    document.body.addEventListener("click", handleClickOutside);
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div ref={sortRef} className='sort'>
      <div className='sort__label'>
        <img src={triangle} width={20} alt='decor' />
        <b>Сортировка по:</b>
        <span onClick={() => setpopOpen(!popOpen)}>{sort.name}</span>
      </div>
      <div className='sort__popup'>
        {popOpen && (
          <ul>
            {sortList.map((el, index) => (
              <li
                onClick={() => onClickCategorie(el)}
                className={
                  sort.sortProperty === el.sortProperty ? "active" : ""
                }
                key={index}
              >
                {el.name}
                <img src={el.src} width={11} alt='arrow' />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Sort;

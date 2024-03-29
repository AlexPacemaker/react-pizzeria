//мейн с пиццами

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  TCartItem,
  addItem,
  selectCartItemById,
} from "../../redux/slices/cartSlice";

//типизация пропсов
type CardItemProps = {
  id: string;
  imgUrl: string;
  title: string;
  price: number;
  sizes: number[];
  types: number[];
};

const CardItem: React.FC<CardItemProps> = ({
  id,
  imgUrl,
  title,
  sizes,
  price,
  types,
}) => {
  const dispatch = useDispatch();
  const cartItem = useSelector(selectCartItemById(id));

  //функции выбора размеров и типов товара
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);

  //функция увеличения количества товаров на основной странице
  const addedCount = cartItem ? cartItem.count : "";

  //массив типов пиццы
  const typeNames = ["тонкое", "традиционное"];

  //функция добавления товара в корзину
  const onClickAdd = () => {
    const item: TCartItem = {
      id,
      title,
      price,
      imgUrl,
      type: typeNames[activeType],
      size: sizes[activeSize],
      count: 0,
    };
    dispatch(addItem(item));
  };

  return (
    <div className='pizza-block'>
      <img className='pizza-block__image' src={imgUrl} alt='Pizza' />
      <h4 className='pizza-block__title'>{title}</h4>
      <div className='pizza-block__selector'>
        <ul>
          {types.map((type) => (
            <li
              className={activeType === type ? "active" : ""}
              onClick={() => setActiveType(type)}
              key={type}
            >
              {typeNames[type]}
            </li>
          ))}
        </ul>
        <ul>
          {sizes.map((size) => (
            <li
              className={activeSize === size ? "active" : ""}
              onClick={() => setActiveSize(size)}
              key={size}
            >
              {size} см.
            </li>
          ))}
        </ul>
      </div>
      <div className='pizza-block__bottom'>
        <div className='pizza-block__price'>от {price} ₽</div>
        <button
          onClick={onClickAdd}
          className='button button--outline button--add'
        >
          <svg
            width='12'
            height='12'
            viewBox='0 0 12 12'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z'
              fill='white'
            />
          </svg>
          <span>Добавить</span>
          {addedCount && <i>{addedCount}</i>}
        </button>
      </div>
    </div>
  );
};

export default CardItem;

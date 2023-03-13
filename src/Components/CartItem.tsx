//компонент корзины

import React from "react";
import { useDispatch } from "react-redux";

import {
  TCartItem,
  addItem,
  minusItem,
  removeItem,
} from "../redux/slices/cartSlice";

import { SvgMaker } from "./SvgMaker";

//типизация пропсов корзины
type CartItemProps = {
  id: string;
  title: string;
  size: number;
  count: number;
  type: string;
  price: number;
  imgUrl: string;
};

//корзина
const CartItem: React.FC<CartItemProps> = ({
  id,
  title,
  size,
  count,
  type,
  price,
  imgUrl,
}) => {
  const dispatch = useDispatch();

  const onClickPlus = () => dispatch(addItem({ id } as TCartItem));
  const onClickMinus = () => dispatch(minusItem(id));
  const onClickRemove = () => dispatch(removeItem(id));

  return (
    <div className='cart__item'>
      <div className='cart__item-img'>
        <img className='pizza-block__image' src={imgUrl} alt='Pizza' />
      </div>
      <div className='cart__item-info'>
        <h3>{title}</h3>
        <p>
          {type}, {size} см.
        </p>
      </div>
      <div className='cart__item-count'>
        <div
          onClick={onClickMinus}
          className='button button--outline button--circle cart__item-count-minus'
        >
          <SvgMaker id='minus' />
        </div>
        <b>{count}</b>
        <div
          onClick={onClickPlus}
          className='button button--outline button--circle cart__item-count-plus'
        >
          <SvgMaker id='plus' />
        </div>
      </div>
      <div className='cart__item-price'>
        <b>{price * count} ₽</b>
      </div>
      <div className='cart__item-remove'>
        <div
          onClick={onClickRemove}
          className='button button--outline button--circle'
        >
          <SvgMaker id='close' />
        </div>
      </div>
    </div>
  );
};

export default CartItem;

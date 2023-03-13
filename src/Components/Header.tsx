//компонент header
//импорты
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import LogoSvg from "../assets/img/pizza-logo.svg";
import cart from "../assets/img/cart2.svg";
import Search from "./Search/Search";
import { selectCart } from "../redux/slices/cartSlice";
import { useEffect, useRef } from "react";

//компонент
const Header: React.FC = () => {
  const { items, totalPrice } = useSelector(selectCart);
  const isMounted = useRef(false);

  const totalCount = items.reduce(
    (sum: number, item: any) => sum + item.count,
    0
  );

  //сохраняем корзину в local storage
  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem("cart", json);
    }
    isMounted.current = true;
  }, [items]);

  return (
    <header className='header'>
      <div className='container'>
        <Link to='/'>
          <div className='header__logo'>
            <img width='38' src={LogoSvg} alt='Pizza logo' />
            <div>
              <h1>React Pizza</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
        </Link>
        <Search />
        <div className='header__cart'>
          <Link to='cart' className='button button--cart'>
            <span>{totalPrice} ₽</span>
            <div className='button__delimiter'></div>
            <img src={cart} width={22} alt='cart' />
            <span>{totalCount}</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

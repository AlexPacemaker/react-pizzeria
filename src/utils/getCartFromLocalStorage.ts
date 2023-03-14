import { TCartItem } from "../redux/slices/cartSlice";
import { calcTotalPrice } from "./calcTotalPrice";

//функция получения данных по корзине из local storage
export const getCartFromLocalStorage = () => {
  const data = localStorage.getItem("cart");
  const items = data ? JSON.parse(data) : [];
  const totalPrice = calcTotalPrice(items);

  return {
    items: items as TCartItem[],
    totalPrice,
  };
};

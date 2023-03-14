import { TCartItem } from "../redux/slices/cartSlice";

//функция вычисления конечной цены товаров
export const calcTotalPrice = (items: TCartItem[]) => {
  return items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
};

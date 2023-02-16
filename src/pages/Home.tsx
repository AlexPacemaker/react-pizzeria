import { useEffect } from "react";
import { useSelector } from "react-redux";

import Sort from "../Components/Sort";
import Pagination from "../Components/Pagination/Pagination";
import Categories from "../Components/Categories";
import PizzaBlock from "../Components/PizzaBlock/PizzaBlock";
import { API_URL } from "../config";
import { Skeleton } from "../Components/PizzaBlock/Skeleton";
import { fetchPizzas, selectPizzaData } from "../redux/slices/pizzaSlice";
import { selectSearch } from "../redux/slices/searchSlice";
import { selectFilter, setCurrentPage } from "../redux/slices/filterSlice";
import { useAppDispatch } from "../redux/store";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { pizzaItems, status } = useSelector(selectPizzaData);
  const { categoryId, sortType, currentPage } = useSelector(selectFilter);
  const { searchValue } = useSelector(selectSearch);

  //создаем асинхронную функцию для получения информации с бэка
  async function getPizzas() {
    //сортировка категории
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    //сортировка сортбая
    const sortBy = sortType.sortProperty.replace("-", "");
    //сортировка ордера
    const order = sortType.sortProperty.includes("-") ? "asc" : "desc";
    //сортировка по search-запросу
    const search = searchValue ? `&search=${searchValue}` : "";
    //лимит пицц для пагинации
    const limit = `page=1&limit=12&`;

    dispatch(fetchPizzas({ API_URL, category, sortBy, order, search, limit }));

    window.scrollTo(0, 0); // старт всегда сверху
  }

  useEffect(() => {
    getPizzas();
  }, [categoryId, sortType.sortProperty, searchValue, currentPage]);

  const skeleton = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));

  const pizzaMain = pizzaItems.map((pizza: any) => (
    <PizzaBlock key={pizza.id} {...pizza} />
  ));

  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  return (
    <main className='content'>
      <div className='container'>
        <div className='content__top'>
          <Categories />
          <Sort />
        </div>
        <h2 className='content__title'>Все пиццы</h2>
        <div className='content__items'>
          {status === "loading" ? skeleton : pizzaMain}
        </div>
        <div>
          <Pagination currentPage={currentPage} onChangePage={onChangePage} />
        </div>
      </div>
    </main>
  );
};

export default Home;

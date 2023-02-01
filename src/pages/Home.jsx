import { useContext, useEffect, useState } from "react";

import { API_URL } from "../config";
import Categories from "../Components/Categories";
import PizzaBlock from "../Components/PizzaBlock/PizzaBlock";
import { Skeleton } from "../Components/PizzaBlock/Skeleton";
import Sort from "../Components/Sort";
import Pagination from "../Components/Pagination/Pagination";
import { SearchContext } from "../App";

const Home = () => {
  const { searchValue } = useContext(SearchContext);
  const [pizzaItems, setItemsPizza] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState({
    name: "популярности",
    sortProperty: "rating",
  });

  useEffect(() => {
    //сортировка категории
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    //сортировка сортбая
    const sortBy = sortType.sortProperty.replace("-", "");
    //сортировка ордера
    const order = sortType.sortProperty.includes("-") ? "asc" : "desc";
    //сортировка по search-запросу
    const search = searchValue ? `&search=${searchValue}` : "";
    //лимит пицц для пагинации
    const limit = `page=1&limit=8&`;

    setIsLoading(true);
    fetch(
      `${API_URL}?${limit}${category}&sortBy=${sortBy}&order=${order}${search}`
    )
      .then((response) => response.json())
      .then((data) => {
        setItemsPizza(data);
        setIsLoading(false);
      });
    window.scrollTo(0, 0); // старт всегда сверху
  }, [categoryId, sortType.sortProperty, searchValue, currentPage]);

  const onChangePage = (number) => setCurrentPage(number);

  const skeleton = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));

  const pizzaMain = pizzaItems.map((pizza) => (
    <PizzaBlock key={pizza.id} {...pizza} />
  ));

  return (
    <main className='content'>
      <div className='container'>
        <div className='content__top'>
          <Categories
            categoryId={categoryId}
            onClickCategory={(i) => setCategoryId(i)}
          />
          <Sort sortType={sortType} onClickSortType={(i) => setSortType(i)} />
        </div>
        <h2 className='content__title'>Все пиццы</h2>
        <div className='content__items'>{isLoading ? skeleton : pizzaMain}</div>
        <div>
          <Pagination currentPage={currentPage} onChangePage={onChangePage} />
        </div>
      </div>
    </main>
  );
};

export default Home;

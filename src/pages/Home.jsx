import { useEffect, useState } from "react";
import Categories from "../Components/Categories";
import PizzaBlock from "../Components/PizzaBlock/PizzaBlock";
import { Skeleton } from "../Components/PizzaBlock/Skeleton";
import Sort from "../Components/Sort";
import { API_URL } from "../config";

const Home = ({ searchValue }) => {
  const [pizzaItems, setItemsPizza] = useState([]);
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

    setIsLoading(true);
    fetch(`${API_URL}?${category}&sortBy=${sortBy}&order=${order}${search}`)
      .then((response) => response.json())
      .then((data) => {
        setItemsPizza(data);
        setIsLoading(false);
      });
    window.scrollTo(0, 0); // старт всегда сверху
  }, [categoryId, sortType.sortProperty]);

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
      </div>
    </main>
  );
};

export default Home;

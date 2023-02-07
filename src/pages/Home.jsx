import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import QueryString from "qs";

import { API_URL } from "../config";
import Categories from "../Components/Categories";
import PizzaBlock from "../Components/PizzaBlock/PizzaBlock";
import { Skeleton } from "../Components/PizzaBlock/Skeleton";
import Sort from "../Components/Sort";
import Pagination from "../Components/Pagination/Pagination";
// import { setFilters } from "../redux/slices/filterSlice";
import { sortList } from "../Components/Sort";

const Home = () => {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  const { categoryId, sortType } = useSelector((state) => state.filterSlice);
  const { currentPage } = useSelector((state) => state.paginationSlice);
  const { searchValue } = useSelector((state) => state.searchSlice);

  const [pizzaItems, setItemsPizza] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   if (window.location.search) {
  //     const params = QueryString.parse(window.location.search.substring(1));
  //     const sort = sortList.find(
  //       (obj) => obj.sortProperty === params.sortProperty
  //     );
  //     dispatch(
  //       setFilters({
  //         ...params,
  //         sort,
  //       })
  //     );
  //   }
  // }, []);

  // useEffect(() => {
  //   const queryString = QueryString.stringify({
  //     sortProperty: sortType.sortProperty,
  //     categoryId,
  //     currentPage,
  //   });
  //   navigate(`?${queryString}`);
  // }, [categoryId, sortType, searchValue, currentPage]);

  useEffect(() => {
    const url = {
      //сортировка категории
      category: categoryId > 0 ? `category=${categoryId}` : "",
      //сортировка сортбая
      sortBy: sortType.sortProperty.replace("-", ""),
      //сортировка ордера
      order: sortType.sortProperty.includes("-") ? "asc" : "desc",
      //сортировка по search-запросу
      search: searchValue ? `&search=${searchValue}` : "",
      //лимит пицц для пагинации
      limit: `page=1&limit=12&`,
    };

    setIsLoading(true);
    axios
      .get(
        `${API_URL}?${url.limit}${url.category}&sortBy=${url.sortBy}&order=${url.order}${url.search}`
      )
      .then((response) => {
        setItemsPizza(response.data);
        setIsLoading(false);
      });

    window.scrollTo(0, 0); // старт всегда сверху
  }, [categoryId, sortType, searchValue, currentPage]);

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
          <Categories />
          <Sort />
        </div>
        <h2 className='content__title'>Все пиццы</h2>
        <div className='content__items'>{isLoading ? skeleton : pizzaMain}</div>
        <div>
          <Pagination />
        </div>
      </div>
    </main>
  );
};

export default Home;

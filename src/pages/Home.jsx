import { useEffect, useState } from "react";
import Categories from "../Components/Categories";
import PizzaBlock from "../Components/PizzaBlock";
import { Skeleton } from "../Components/PizzaBlock/Skeleton";
import Sort from "../Components/Sort";
import { API_URL } from "../config";

const Home = () => {
  const [pizzaItems, setItemsPizza] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setItemsPizza(data);
        setIsLoading(false);
      });
    window.scrollTo(0, 0); // старт всегда сверху
  }, []);
  
  return (
    <main className='content'>
      <div className='container'>
        <div className='content__top'>
          <Categories />
          <Sort />
        </div>
        <h2 className='content__title'>Все пиццы</h2>
        <div className='content__items'>
          {isLoading
            ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
            : pizzaItems.map((pizza) => (
                <PizzaBlock key={pizza.id} {...pizza} />
              ))}
        </div>
      </div>
    </main>
  );
};

export default Home;

import { useEffect, useState } from "react";
import Categories from "./Components/Categories";
import Header from "./Components/Header";
import PizzaBlock from "./Components/PizzaBlock";
import Sort from "./Components/Sort";
// import { API_URL } from "../config";
import "./scss/app.scss";

function App() {
  const [pizzaItems, setPizzaItems] = useState([]);

  useEffect(() => {
    fetch("https://63d79215afbba6b7c93faf33.mockapi.io/pizzas")
      .then((response) => response.json())
      .then((json) => setPizzaItems(json));
  }, []);

  return (
    <div className='App'>
      <div className='wrapper'>
        <Header />
        <div className='content'>
          <div className='container'>
            <div className='content__top'>
              <Categories />
              <Sort />
            </div>
            <h2 className='content__title'>Все пиццы</h2>
            <div className='content__items'>
              {pizzaItems.map((pizza, key) => (
                <PizzaBlock key={pizza.id} {...pizza} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

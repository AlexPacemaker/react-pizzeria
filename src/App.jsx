import Categories from "./Components/Categories";
import Header from "./Components/Header";
import PizzaBlock from "./Components/PizzaBlock";
import Sort from "./Components/Sort";
import "./scss/app.scss";

function App(props) {
  const pizzas = props.state;

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
              {pizzas.map((pizza, key) => (
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

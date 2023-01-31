
const Categories = ({ categorieId, onClickCategory }) => {
  const pizzaCategories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];



  return (
    <div className='categories'>
      <ul>
        {pizzaCategories.map((categorie, i) => (
          <li
            onClick={() => onClickCategory(i)}
            className={categorieId === i ? "active" : ""}
            key={i}
          >
            {categorie}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;

const Categories = ({ categoryId, onClickCategory }) => {
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
            className={categoryId === i ? "active" : ""}
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

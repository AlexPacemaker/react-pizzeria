import React, { useState } from "react";

const Categories = () => {
  const pizzaCategories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  const [categories, setCategories] = useState(0);

  return (
    <div className='categories'>
      <ul>
        {pizzaCategories.map((categorie, index) => (
          <li
            onClick={() => setCategories(index)}
            className={categories === index ? "active" : ""}
            key={index}
          >
            {categorie}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;

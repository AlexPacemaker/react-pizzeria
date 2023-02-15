import { useSelector, useDispatch } from "react-redux";
import { selectFilter, setCategoryId } from "../redux/slices/filterSlice";

const pizzaCategories = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

const Categories: React.FC = () => {
  const dispatch = useDispatch();
  const { categoryId } = useSelector(selectFilter);
  const onChangeCategory = (id: number) => dispatch(setCategoryId(id));

  return (
    <div className='categories'>
      <ul>
        {pizzaCategories.map((categorie, i) => (
          <li
            onClick={() => onChangeCategory(i)}
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

//компонент "страница не найдена"

import React from "react";
import styles from "./NotFoundBlock.module.scss";
import { Link } from "react-router-dom";

const NotFoundBlock: React.FC = () => {
  return (
    <div className={styles.container}>
      <span>😕</span>
      <h2>К сожалению тут ничего нет :(</h2>
      <p>В нашем интернет-магазине отсутствует данная страница</p>
      <button>
        <Link to='/'>Назад</Link>{" "}
      </button>
    </div>
  );
};

export default NotFoundBlock;

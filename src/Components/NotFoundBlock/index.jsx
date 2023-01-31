import React from "react";
import styles from "./NotFoundBlock.module.scss";

const NotFoundBlock = () => {
  return (
    <div className={styles.container}>
      <span>😕</span>
      <h2>К сожалению тут ничего нет :(</h2>
      <p>В нашем интернет-магазине отсутствует данная страница</p>
      <button>Назад</button>
    </div>
  );
};

export default NotFoundBlock;

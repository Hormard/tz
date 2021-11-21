import { useState } from "react";
import styles from "./Counter.module.css";

export function Counter() {
  const [count, setCount] = useState(0);

  const onClickPlus = () => {
    setCount(count + 1);
  };

  const onClickMinus = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const onClickReset = () => {
    setCount(0);
  };

  return (
    <div className={styles.counter_container}>
      <div className={styles.container}>
        <p className={styles.count}>{count}</p>
      </div>
      <div className={styles.container}>
        <p className={styles.type}>
          {count % 2 === 0 ? "Введено четное число" : "Введено нечетное число"}
        </p>
      </div>
      <div className={styles.buttons}>
        <button className={styles.button} onClick={onClickMinus}>
          -
        </button>
        <button className={styles.button} onClick={onClickReset}>
          Reset
        </button>
        <button className={styles.button} onClick={onClickPlus}>
          +
        </button>
      </div>
    </div>
  );
}

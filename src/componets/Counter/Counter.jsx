import { useState } from "react";
import styles from "./Counter.module.css";

export function Counter() {
  const [count, setCount] = useState(0);
  const [isEven, setIsEven] = useState(false);

  const checkParity = (count) => {
    count % 2 === 0 ? setIsEven(true) : setIsEven(false);
  };

  const onClickPlus = () => {
    setCount(count + 1);
    checkParity(count);
  };

  const onClickMinus = () => {
    if (count > 0) {
      setCount(count - 1);
      checkParity(count);
    }
  };

  const onClickReset = () => {
    setCount(0);
    checkParity(count);
  };

  return (
    <div className={isEven ? styles.wrap_even : styles.wrap_odd}>
      <div className={styles.counter_container}>
        <div className={styles.container}>
          <p className={styles.count}>{count}</p>
        </div>
        <div
          className={
            isEven ? styles.type_container_even : styles.type_container_odd
          }
        >
          <p className={styles.type}>
            {isEven ? "Введено четное число" : "Введено нечетное число"}
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
    </div>
  );
}

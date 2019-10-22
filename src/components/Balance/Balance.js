import React from "react";
import styles from "./Balance.module.css";
const Balance = ({ income, expenses, balance }) => (
  <section className={styles.balance}>
    <span className={styles.container}>
      <span role="img" aria-label="upward arrow">
        ⬆️
      </span>
      {income}$
    </span>

    <span className={styles.container}>
      <span role="img" aria-label="downward arrow">
        ⬇️
      </span>
      {expenses}$
    </span>
    <span className={styles.container}>Balance:{balance}$</span>
  </section>
);

export default Balance;

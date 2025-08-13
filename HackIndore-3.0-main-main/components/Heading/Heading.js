import React from "react";
import styles from "./Heading.module.css";

const Heading = ({ children }) => {
  return (
    <div className={styles.headingWrapper}>
      <div className={styles.headingWrapper_div}>
        <h1 className={styles.text}>
          {children}
        </h1>
      </div>
    </div>
  );
};

export default Heading;

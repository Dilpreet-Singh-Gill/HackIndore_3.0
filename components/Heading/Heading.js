import React from "react";
import styles from "./Heading.module.css";

const Heading = ({ children, eyebrow }) => {
  return (
    <div className={styles.headingWrapper}>
      <div className={styles.headingWrapper_div}>
        {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
        <h2 className={styles.text}>{children}</h2>
        <span className={styles.rule} aria-hidden="true" />
      </div>
    </div>
  );
};

export default Heading;

import React from "react";
import styles from "./Preloader-old.module.css";

const PreLoader = () => {
  return (
    <div className={styles.preloader}>
      <div className={[styles.centralize, styles.fullWidth].join(" ")}>
        <div className={styles.verticalCenter}>
          <div className={styles.spinner}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PreLoader;

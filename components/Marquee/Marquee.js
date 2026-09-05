import React from "react";
import styles from "./Marquee.module.css";

const items = [
  "HackIndore 4.0",
  "24 Hours",
  "SGSITS Indore",
  "Bigger, Bolder & Better",
  "#include Presents",
];

// The list is rendered twice so the track can loop seamlessly at -50%.
const Marquee = () => (
  <div className={styles.marquee} aria-hidden="true">
    <div className={styles.track}>
      {[0, 1].map((copy) => (
        <ul className={styles.group} key={copy}>
          {items.map((item) => (
            <li key={item} className={styles.item}>
              {item}
            </li>
          ))}
        </ul>
      ))}
    </div>
  </div>
);

export default Marquee;

import React from "react";
import styles from "./Preloader-new.module.css";
import { useRef, useEffect } from "react";
import Typed from "typed.js";

const TypingAnimation = ({ data }) => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: data,
      typeSpeed: 60,
      backSpeed: 30,
      smartBackspace: true,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return <div className={styles.fixed} ref={el}></div>;
};

const PreLoader = ({ setLoading }) => {
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2200);
  }, []);

  return (
    <>
      <div className={styles.background}>
        <span className={styles.loader}>HackIndore 3.O</span>
        <div className={styles.typing}>
          <TypingAnimation
            className={styles.typing}
            data={["Think. Code. Innovate."]}
          />
        </div>
      </div>
    </>
  );
};

export default PreLoader;

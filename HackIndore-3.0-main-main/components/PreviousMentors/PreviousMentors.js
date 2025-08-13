import React from "react";
import styles from "./PreviousMentors.module.css";
import AnimatedText from "@/components/AnimatedText/AnimatedText";
import useScrollReveal from "@/hooks/useScrollReveal";
import { previousMentorsDetails } from "@/util/config";

const SimpleCard = ({ item }) => {
  return (
    <div className={styles.card} id="cards">
      <div className={styles.imgWrapper}>
        <img className={styles.avatar} src={item.avatar} alt={item.name} />
      </div>

      <div className={styles.cardContent}>
        <h3 className={styles.name}>{item.name}</h3>
        <p className={styles.title}>{item.title}</p>
        <p className={styles.about}>{item.about}</p>
        <div className={styles.icons}>
          <a href="#">
            <i className="fa fa-facebook-f"></i>
          </a>
          <a href="#">
            <i className={"fa fa-github"}></i>
          </a>
          <a href="#">
            <i className="fa fa-twitter"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

const PreviousMentors = () => {
  const revealContainer = useScrollReveal();

  return (
    <section ref={revealContainer} className={styles.container} id="mentors">
      <div className="headings_glittered">
        <AnimatedText>
          <h1 className={styles.heading}>Previous Mentors</h1>
        </AnimatedText>
      </div>
      <div className={styles.cards}>
        {previousMentorsDetails.map((item, i) => (
          <SimpleCard item={item} key={i} />
        ))}
      </div>
    </section>
  );
};

export default PreviousMentors;

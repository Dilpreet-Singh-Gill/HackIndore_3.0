import React, { useEffect, useState } from "react";
import AnimatedText from "@/components/AnimatedText/AnimatedText";
import {
  registrationFormLink,
  resgistrationFormOnClick,
  tying_data_hero_page,
  dateOfHackIndore,
  endingDateOfHackIndore,
} from "@/util/config";
import styles from "./Hero.module.css";
import TransitionElement from "../TransitionElement/TransitionElement";
import ScramblingText from "./ScramblingText/ScramblingText";
import Link from "next/link";
import { motion } from "framer-motion";
import { useMediaQuery } from "@mui/material";

const loaderDelay = 800;
const mountDelay = 500;

const Hero = () => {
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState("true");
  const [scrollIndicatorIsMount, setScrollIndicatorIsMount] = useState(false);
  const isMobile = useMediaQuery("(max-width: 460px)");
  const date = dateOfHackIndore.getDate();
  const year = dateOfHackIndore.getFullYear();
  const month = !isMobile
    ? dateOfHackIndore.toLocaleString("default", { month: "long" })
    : dateOfHackIndore.toLocaleString("default", { month: "short" });

  const endingDate = endingDateOfHackIndore;
  useEffect(() => {
    const hiddenId = setTimeout(
      () => setScrollIndicatorHidden("false"),
      mountDelay + loaderDelay - 1
    );
    const mountId = setTimeout(
      () => setScrollIndicatorIsMount(true),
      mountDelay + loaderDelay
    );

    const toggleAtTop = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled >= 20) setScrollIndicatorHidden("true");
      else if (scrolled < 20) setScrollIndicatorHidden("false");
    };
    window.addEventListener("scroll", toggleAtTop);

    return () => {
      clearTimeout(hiddenId);
      clearTimeout(mountId);
      window.removeEventListener("scroll", toggleAtTop);
    };
  }, []);

  return (
    <section className={styles.container} id="hero">
      <div className={styles.featureGridContainer}>
        <TransitionElement
          animationClass="fadeup"
          mountDelay={mountDelay}
          loaderDelay={loaderDelay}
        >
          <h2 className={styles.fs700}>
            <div>
              <AnimatedText>
                <h1 className={styles.textPrimary}>HACKINDORE 3.0</h1>
              </AnimatedText>
            </div>
            <div>Where Creativity Meets Technology</div>
            <ScramblingText data={tying_data_hero_page} />
          </h2>
          <div className={styles.timedate}>
            <p>{date + ", "}</p> <p>{month}</p> <p id="y">{year}</p>
            <br />
            <div className={styles.timedateSmall}>
              <p id="h">09</p>:<a id="m">00</a>
              <p id="s">
                {"AM to "}
              </p>
              <p id="h">09</p>:<p id="m">00</p>
              <p id="s">
                {"PM on " +
                  dateOfHackIndore.toLocaleDateString("en", {
                    weekday: "long",
                  })}
              </p>
            </div>
            {/* Dates to be Announced Soon */}
          </div>
          <p>
            An 12-Hour Hackathon Experience
            <br />
            Building <strong>Methodical Solutions</strong> to benefit the World
          </p>

          <a
            href={registrationFormLink}
            onClick={resgistrationFormOnClick}
            target="_blank"
            className={styles.email_link}
          >
            Register For HackIndore
          </a>
        </TransitionElement>
        <div className={styles.scrollIndicatorWrapper}>
          <Link
            className={styles.scrollIndicator}
            data-hidden={
              scrollIndicatorIsMount ? scrollIndicatorHidden : "true"
            }
            href="#countdown"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

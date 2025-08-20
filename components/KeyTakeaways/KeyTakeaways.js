import useScrollReveal from "@/hooks/useScrollReveal";
import AnimatedText from "../AnimatedText/AnimatedText";
import { Stack } from "@mui/system";
import { useMediaQuery } from "@mui/material";
import styles from "./KeyTakeaways.module.css";
import Heading from "../Heading/Heading";
import Image from "next/image";
import { useState } from "react";

// const poster = "hackindore3-poster.jpg"
const poster = "/assets/Flyer.png";

const KeyTakeaways = () => {
  const revealContainer = useScrollReveal();
  // const isSmall = useMediaQuery("(max-width:540px)")
  return (
    <section
      id="keytakeaways"
      ref={revealContainer}
      className={styles.container}
    >
      <div className="headings_glittered">
        <Heading>Key Takeaways</Heading>
      </div>

      <Stack
        direction={{ md: "row", xs: "column-reverse" }}
        gap={1}
        className={styles.keyContainer}
      >
        <div className={styles.keyPoints}>
          <div className={styles.points}>
            <p>
              1. Golden chance to unleash the hidden talent of solving real
              world problems and to convert your ideas into project.
            </p>
            <p>2. T-shirts and Goodies</p>
            <p>3. Certificates to all the participants</p>
            <p>4. Get your project reviewed by our expert panel.</p>
            <p>
              5. Opportunity to showcase your coding and innovative skills in
              front of company officials and get internships.
            </p>
            <p>6. Add value to your resume or CV.</p>
            <p>
              7. Chance to win exciting prizes and goodies </p>
            <p>
              8. Free food, snacks, and beverages will be provided for the
              participants.
            </p>
          </div>
        </div>
        <div className={styles.image}>
          <Image
            src={poster}
            alt="poster"
            className={styles.img}
            sizes="100vw"
            height={0}
            width={0}
            style={{ height: "auto", width: "100%" }}
          />
        </div>
      </Stack>
    </section>
  );
};

export default KeyTakeaways;

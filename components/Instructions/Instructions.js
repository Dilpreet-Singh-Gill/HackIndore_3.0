import styles from "./Instructions.module.css";
import AnimatedText from "../AnimatedText/AnimatedText";
import useScrollReveal from "@/hooks/useScrollReveal";
import { Stack } from "@mui/system";
import { useMediaQuery } from "@mui/material";
import Heading from "../Heading/Heading";
import Image from "next/image";

const instImage = "/IMG_6_compressed.jpeg";
const Instructions = () => {
  const revealContainer = useScrollReveal();
  // const isSmall = useMediaQuery("(max-width:480px)");
  return (
    <section
      id="instructions"
      ref={revealContainer}
      className={styles.container}
    >
      {/* <div className="headings_glittered">
        <AnimatedText>
          <h1>Important Notes</h1>
        </AnimatedText>
      </div> */}
      <div className="headings_glittered">
        <Heading>Important Notes</Heading>
      </div>
      <Stack
        direction={{ md: "row", xs: "column-reverse" }}
        gap={1}
        className={styles.instructionContainer}
      >
        <div className={styles.instructions}>
          <ul className={styles.points}>
            <li>
              <span className={styles.number}>1.</span> Team size should be 2-4.
            </li>
            <li>
              <span className={styles.number}>2.</span> Team leader would be the point
              of contact. All the team members must mention their LinkedIn and GitHub
              accounts.
            </li>
            <li>
              <span className={styles.number}>3.</span> Evaluation criteria will include
              the novelty of the solution, complexity, clarity, feasibility,
              practicability, sustainability, scale of impact, user experience, and
              potential for future career progression.
            </li>
            <li>
              <span className={styles.number}>4.</span> Teams are expected to submit
              their projects before the deadline; late submissions will not be accepted.
            </li>
          </ul>
        </div>

        <div className={styles.image}>
          <Image
            src={instImage}
            alt="image"
            className={styles.img}
            sizes="100vw"
            height={0}
            width={0}
            style={{ height: "auto", width: "100%" }}
          />
        </div>
      </Stack>
    </section >
  );
};

export default Instructions;

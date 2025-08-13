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
          <div className={styles.points}>
            <p>1. Team size should be 3.</p>
            <p>
              2. Team leader would be the point of contact. All the team members
              must mention their LinkedIn and GitHub accounts.
            </p>
            <p>
              3. Evaluation criteria will include the novelty of the solution,
              complexity, clarity, and details in the prescribed format,
              feasibility, practicability, sustainability, scale of impact, user
              experience, and potential for future career progression.
            </p>
            <p>
              4. Teams will receive new problem statements during the hackathon
              (different from the ones provided during the registration
              process).
            </p>
          </div>
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
    </section>
  );
};

export default Instructions;

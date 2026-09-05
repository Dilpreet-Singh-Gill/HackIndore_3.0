import Heading from "../Heading/Heading";
import Image from "next/image";
import styles from "./About.module.css";
import useScrollReveal from "@/hooks/useScrollReveal";

const pillars = ["Learn", "Collaborate", "Showcase"];

const AboutUs = () => {
  const revealContainer = useScrollReveal();

  return (
    <section id="aboutus" ref={revealContainer} className={styles.container}>
      <div className="headings_glittered">
        <Heading eyebrow="Who we are">About us</Heading>
      </div>

      <div className={styles.layout}>
        <div
          className={`winFrame ${styles.copyFrame}`}
          data-win-title="#Include_Club"
        >
          <p className={styles.lede}>
            The <strong>#include Club</strong> of the IT Department of SGSITS
            is organizing a hackathon to empower individuals to explore,
            innovate, and master the world of technology.
          </p>
          <p className={styles.body}>
            We believe that technology is the driving force of the modern world,
            and through this event, we aim to create a vibrant community where
            participants can learn, collaborate, and showcase their creativity.
          </p>
          <p className={styles.body}>
            Our goal is to equip students with the skills, experience, and
            confidence needed to excel in the tech industry and beyond, while
            fostering innovation, problem-solving, and teamwork.
          </p>
          <ul className={styles.pillars}>
            {pillars.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div
          className={`winFrame ${styles.stackFrame}`}
          data-win-title="The_Team"
        >
          <Image
            src="/images/Team_image2.png"
            alt="HackIndore team"
            className={styles.teamPhoto}
            width={853}
            height={632}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

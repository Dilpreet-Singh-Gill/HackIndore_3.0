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

      <div className={`winFrame ${styles.frame}`} data-win-title="#Include_Club">
        <div className={styles.copy}>
          <p className={styles.lede}>
            We are club <strong>#include</strong>, the official techno learning
            club of Information Technology Department, SGSITS. We believe in
            empowering individuals to explore and master the world of
            technology.
          </p>
          <p className={styles.body}>
            At <strong>#include</strong>, we understand that technology is the
            driving force of the modern world, and as such, we strive to create
            a community where individuals can learn, grow, and thrive in this
            field. Our goal is to equip members with the necessary skills and
            knowledge to excel in the tech industry and beyond.
          </p>
          <div className={styles.footerRow}>
            <Image
              src="/include.png"
              alt="#include Club"
              width={1576}
              height={1591}
              className={styles.clubMark}
            />
            <ul className={styles.pillars}>
              {pillars.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.visual}>
          <span className={styles.glow} aria-hidden="true" />
          <Image
            src={encodeURI("/team photo.png")}
            alt="#include Club team at SGSITS Indore, organizers of HackIndore"
            className={styles.teamPhoto}
            width={3840}
            height={1920}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

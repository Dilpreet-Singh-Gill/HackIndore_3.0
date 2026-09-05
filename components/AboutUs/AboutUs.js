import Heading from "../Heading/Heading";
import styles from "./About.module.css";
import useScrollReveal from "@/hooks/useScrollReveal";
import {
  SiReact,
  SiNodedotjs,
  SiPython,
  SiMongodb,
  SiJavascript,
  SiGit,
} from "react-icons/si";

const techIcons = [
  { Icon: SiReact, label: "React", color: "#61DAFB" },
  { Icon: SiNodedotjs, label: "Node", color: "#68A063" },
  { Icon: SiPython, label: "Python", color: "#FFD43B" },
  { Icon: SiMongodb, label: "Mongo", color: "#47A248" },
  { Icon: SiJavascript, label: "JS", color: "#F7DF1E" },
  { Icon: SiGit, label: "Git", color: "#F05032" },
];

const pillars = ["Learn", "Collaborate", "Showcase"];

const AboutUs = () => {
  const revealContainer = useScrollReveal();

  return (
    <section id="aboutus" ref={revealContainer} className={styles.container}>
      <div className="headings_glittered">
        <Heading eyebrow="Who we are">About Us</Heading>
      </div>

      <div className={styles.layout}>
        <div
          className={`winFrame ${styles.copyFrame}`}
          data-win-title="IT_Department"
        >
          <p className={styles.lede}>
            The Information Technology Department of SGSITS is organizing a
            hackathon to empower individuals to explore, innovate, and master
            the world of technology.
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
          data-win-title="Tech_Stack"
        >
          <ul className={styles.icons}>
            {techIcons.map(({ Icon, label, color }) => (
              <li key={label} className={styles.iconTile}>
                <span className={styles.iconGlyph} style={{ color }}>
                  <Icon size={28} color={color} aria-hidden="true" />
                </span>
                <span className={styles.iconLabel}>{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

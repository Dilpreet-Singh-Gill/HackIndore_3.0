import styles from "./RegistrationProcess.module.css";
import useScrollReveal from "@/hooks/useScrollReveal";
import { IoIosPeople, IoIosClock } from "react-icons/io";
import { BsUiChecksGrid } from "react-icons/bs";
import { FaCogs } from "react-icons/fa";
import Heading from "../Heading/Heading";

const steps = [
  {
    n: "01",
    phase: "Register",
    title: "Create Team",
    body: "Create a team of upto 2-4 people.",
    Icon: IoIosPeople,
  },
  {
    n: "02",
    phase: "Theme",
    title: "Select Track",
    body: "Select the theme according to your preference and upload the solution on the Unstop platform as per the guidelines.",
    Icon: BsUiChecksGrid,
  },
  {
    n: "03",
    phase: "Solution",
    title: "Develop",
    body: "The provided solution must consist of the approach to the problem, the techstacks involved in the implementation, and the reason behind the selection of a particular approach and techstacks in PPT format.",
    Icon: FaCogs,
  },
  {
    n: "04",
    phase: "Wait",
    title: "Await for Outcome",
    body: "Based on the solutions received, 30 teams will be shortlisted for the final onsite competition to be held soon.",
    Icon: IoIosClock,
  },
];

const RegistrationProcess = () => {
  const revealContainer = useScrollReveal();

  return (
    <section
      id="registrationprocess"
      ref={revealContainer}
      className={styles.section}
    >
      <div className="headings_glittered">
        <Heading eyebrow="How it works">Registration Process</Heading>
      </div>

      <ol className={styles.steps}>
        {steps.map(({ n, phase, title, body, Icon }) => (
          <li key={n} className={styles.step}>
            <article
              className={`winFrame ${styles.card}`}
              data-win-title={phase}
            >
              <span className={styles.index} aria-hidden="true">
                {n}
              </span>
              <span className={styles.icon} aria-hidden="true">
                <Icon size={28} />
              </span>
              <h3 className={styles.title}>{title}</h3>
              <p className={styles.body}>{body}</p>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default RegistrationProcess;

import React from "react";
import styles from "./RegistrationProcess.module.css";
import AnimatedText from "../AnimatedText/AnimatedText";
import useScrollReveal from "@/hooks/useScrollReveal";
import { IoIosPeople, IoIosClock } from "react-icons/io";
import { BsUiChecksGrid } from "react-icons/bs";
import { FaCogs } from "react-icons/fa";
import Heading from "../Heading/Heading";
import { dateOfHackIndore } from "@/util/config";

const RegistrationProcess = () => {
  const revealContainer = useScrollReveal();
  const date = dateOfHackIndore.getDate();
  const year = dateOfHackIndore.getFullYear();
  const month = dateOfHackIndore.toLocaleString("default", { month: "long" });
  return (
    <section id="registrationprocess" ref={revealContainer}>
      <div className={styles.center}>
        {/* <div className="headings_glittered">
          <AnimatedText>
            <h1>Registration Process</h1>
          </AnimatedText>
        </div> */}
        <div className="headings_glittered">
          <Heading>Registration Process</Heading>
        </div>
      </div>
      <div className={styles.e_infograph}>
        <div className={styles.e_infograph__steps}>
          <div
            className={[
              styles.e_infograph__step,
              styles.e_infograph__step__red,
            ].join(" ")}
          >
            <div className={styles.e_infograph__step__icon}>
              <IoIosPeople color="white" size={60} />
            </div>
            <div className={styles.e_infograph__step__ribbon}>
              <div className={styles.e_infograph__ribbon}>
                <div className={styles.e_infograph__ribbon__text}>Register</div>
              </div>
            </div>
            <div className={styles.e_infograph__step__tagline}>
              <div className={styles.e_infograph__tagline__title}>
                Create Team
              </div>
              <div className={styles.e_infograph__tagline__text}>
                Create a team of upto 3 people.
              </div>
            </div>
          </div>
          <div
            className={[
              styles.e_infograph__step,
              styles.e_infograph__step__blue,
            ].join(" ")}
          >
            <div className={styles.e_infograph__step__icon}>
              <BsUiChecksGrid color="white" size={45} />
            </div>
            <div className={styles.e_infograph__step__ribbon}>
              <div className={styles.e_infograph__ribbon}>
                <div className={styles.e_infograph__ribbon__text}>Theme</div>
              </div>
            </div>
            <div className={styles.e_infograph__step__tagline}>
              <div className={styles.e_infograph__tagline__title}>
                Select Track
              </div>
              <div className={styles.e_infograph__tagline__text}>
                Select the theme according to your preference and upload the
                solution on the Unstop platform as per the guidelines.
              </div>
            </div>
          </div>
          <div
            className={[
              styles.e_infograph__step,
              styles.e_infograph__step__yellow,
            ].join(" ")}
          >
            <div className={styles.e_infograph__step__icon}>
              <FaCogs color="white" size={45} />
            </div>
            <div className={styles.e_infograph__step__ribbon}>
              <div className={styles.e_infograph__ribbon}>
                <div className={styles.e_infograph__ribbon__text}>Solution</div>
              </div>
            </div>
            <div className={styles.e_infograph__step__tagline}>
              <div className={styles.e_infograph__tagline__title}>Develop</div>
              <div className={styles.e_infograph__tagline__text}>
                The provided solution must consist of the approach to the
                problem, the techstacks involved in the implementation, and the
                reason behind the selection of a particular approach and
                techstacks in PPT format.
              </div>
            </div>
          </div>
          <div
            className={[
              styles.e_infograph__step,
              styles.e_infograph__step__green,
            ].join(" ")}
          >
            <div className={styles.e_infograph__step__icon}>
              <IoIosClock color="white" size={45} />
            </div>
            <div className={styles.e_infograph__step__ribbon}>
              <div className={styles.e_infograph__ribbon}>
                <div className={styles.e_infograph__ribbon__text}>Wait</div>
              </div>
            </div>
            <div className={styles.e_infograph__step__tagline}>
              <div className={styles.e_infograph__tagline__title}>
                Await for Outcome
              </div>
              <div className={styles.e_infograph__tagline__text}>
                Based on the solutions received, 25 teams will be shortlisted
                for the final onsite competition to be held
                {/* on{" "} {month + " " + date + ", " + year}. */}
                {" "}soon.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationProcess;

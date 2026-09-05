import React, { useState, useEffect } from "react";
import styles from "./Countdown.module.css";
import moment from "moment";
import useScrollReveal from "@/hooks/useScrollReveal";
import { countdownDetails } from "@/util/config";
import Heading from "../Heading/Heading";
import HandsMotif from "../HandsMotif/HandsMotif";

const pad = (value) => String(value).padStart(2, "0");

// Decorative strip that ticks down past zero, purely visual.
const odometerDigits = Array.from({ length: 24 }, (_, i) =>
  pad((9 - i + 100) % 100)
);

const Countdown = () => {
  const { timeTillDate, timeFormat } = countdownDetails;

  // null until the first client tick so server and client markup match.
  const [remaining, setRemaining] = useState(null);

  useEffect(() => {
    const tick = () => {
      const countdown = moment.duration(
        moment(timeTillDate, timeFormat).diff(moment())
      );

      if (countdown.asMilliseconds() <= 0) {
        setRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setRemaining({
        days: Math.floor(countdown.asDays()),
        hours: countdown.hours(),
        minutes: countdown.minutes(),
        seconds: countdown.seconds(),
      });
    };

    tick();
    const interval = setInterval(tick, 1000);

    return () => clearInterval(interval);
  }, [timeTillDate, timeFormat]);

  const revealContainer = useScrollReveal();

  const units = [
    { key: "days", label: "Days" },
    { key: "hours", label: "Hours" },
    { key: "minutes", label: "Min" },
    { key: "seconds", label: "Sec" },
  ];

  return (
    <section ref={revealContainer} className={styles.realWrapper} id="countdown">
      <div className="headings_glittered">
        <Heading eyebrow="Time left until launch">Countdown</Heading>
      </div>

      <div className={styles.odometer} aria-hidden="true">
        <div className={styles.odometerTrack}>
          {[0, 1].map((copy) => (
            <React.Fragment key={copy}>
              {odometerDigits.map((digit, i) => (
                <span key={`${copy}-${i}`}>{digit}</span>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className={styles.timerStage}>
        <HandsMotif variant="stage" />
        <div className={styles.countdownWrapper} role="timer" aria-live="off">
        {units.map(({ key, label }, index) => (
          <React.Fragment key={key}>
            {index > 0 && (
              <span className={styles.divider} aria-hidden="true" />
            )}
            <div className={styles.unit}>
              <span className={styles.value}>
                {remaining ? pad(remaining[key]) : "--"}
              </span>
              <span className={styles.label}>{label}</span>
            </div>
          </React.Fragment>
        ))}
        </div>
      </div>
    </section>
  );
};

export default Countdown;

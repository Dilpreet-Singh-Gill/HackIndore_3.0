import React, { useState, useEffect } from "react";
import styles from "./Countdown.module.css";
import moment from "moment";
import AnimatedText from "@/components/AnimatedText/AnimatedText";
import useScrollReveal from "@/hooks/useScrollReveal";
import { countdownDetails } from "@/util/config";
import Heading from "../Heading/Heading";

const Countdown = () => {
  const { timeTillDate, timeFormat } = countdownDetails;

  const [days, setDays] = useState(undefined);
  const [hours, setHours] = useState(undefined);
  const [minutes, setMinutes] = useState(undefined);
  const [seconds, setSeconds] = useState(undefined);

  useEffect(() => {
    const interval = setInterval(() => {
      const then = moment(timeTillDate, timeFormat);
      // const then = moment(); 
      const now = moment();
      const countdown = moment.duration(then.diff(now));
      const day = countdown.days();
      if (countdown.asDays() >= 30) {
        const remainingDays = Math.floor(countdown.asDays());
        setDays(remainingDays);
      } else {
        const day = countdown.days();
        setDays(day);
      }
      const hour = countdown.hours();
      const minute = countdown.minutes();
      const second = countdown.seconds();

      // setDays(day);
      setHours(hour);
      setMinutes(minute);
      setSeconds(second);
    }, []);

    return () => clearInterval(interval);
  }, []);

  const revealContainer = useScrollReveal();

  const daysRadius = mapNumber(days > 30 ? days%30 : days, 30, 0, 0, 360);
  const hoursRadius = mapNumber(hours, 24, 0, 0, 360);
  const minutesRadius = mapNumber(minutes, 60, 0, 0, 360);
  const secondsRadius = mapNumber(seconds, 60, 0, 0, 360);

  return (
    <section
      ref={revealContainer}
      className={styles.realWrapper}
      id="countdown"
    >
      <div className="headings_glittered">
        <Heading>Countdown</Heading>
      </div>

      <div className={styles.countdownWrapper}>
        {true && (
          <div className={styles.countdownItem}>
            <SVGCircle radius={daysRadius} />
            {days}
            <span>days</span>
          </div>
        )}
        {true && (
          <div className={styles.countdownItem}>
            <SVGCircle radius={hoursRadius} />
            {hours}
            <span>hours</span>
          </div>
        )}
        {true && (
          <div className={styles.countdownItem}>
            <SVGCircle radius={minutesRadius} />
            {minutes}
            <span>minutes</span>
          </div>
        )}
        {true && (
          <div className={styles.countdownItem}>
            <SVGCircle radius={secondsRadius} />
            {seconds}
            <span>seconds</span>
          </div>
        )}
      </div>
    </section>
  );
};

const SVGCircle = ({ radius }) => (
  <svg className={styles.countdownSvg}>
    <path
      fill="none"
      stroke="aqua"
      strokeWidth="4"
      d={describeArc(50, 50, 48, 0, radius)}
    />
  </svg>
);

const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
};

const describeArc = (x, y, radius, startAngle, endAngle) => {
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  const d = [
    "M",
    start.x,
    start.y,
    "A",
    radius,
    radius,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y,
  ].join(" ");

  return d;
};

const mapNumber = (number, in_min, in_max, out_min, out_max) => {
  return (
    ((number - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  );
};

export default Countdown;

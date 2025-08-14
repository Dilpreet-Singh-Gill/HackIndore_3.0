import styles from "./Timeline.module.css";
import AnimatedText from "@/components/AnimatedText/AnimatedText";
import useScrollReveal from "@/hooks/useScrollReveal";
import { timelineData } from "@/util/config";
import Heading from "../Heading/Heading";

const TimelineItem = ({ data }) => {
  return (
    <div className={styles.timelineItem}>
      <div className={styles.timelineItemContent}>
        {/* <time>{data.date}</time> */}
        <p>{data.text}</p>
        <span className={styles.circle} />
      </div>
    </div>
  );
};

const Timeline = () => {
  const revealContainer = useScrollReveal();

  return (
    timelineData.length > 0 && (
      <section id="timeline" ref={revealContainer}>
        {/* <div className="headings_glittered">
                <AnimatedText >
                    <h1>Timeline</h1>
                </AnimatedText>
            </div> */}
        <div className="headings_glittered">
          <Heading>Timeline</Heading>
        </div>
        <div className={styles.timelineContainer}>
          {timelineData.map((data, idx) => (
            <TimelineItem data={data} key={idx} />
          ))}
        </div>
      </section>
    )
  );
};

export default Timeline;

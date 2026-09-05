import { useEffect, useRef } from "react";
import styles from "./Timeline.module.css";
import useScrollReveal from "@/hooks/useScrollReveal";
import { timelineData } from "@/util/config";
import Heading from "../Heading/Heading";

const pad = (value) => String(value + 1).padStart(2, "0");

const Timeline = () => {
  const revealContainer = useScrollReveal();
  const pinRef = useRef(null);
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const itemsRef = useRef([]);
  const progressRef = useRef(null);

  useEffect(() => {
    const pin = pinRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!pin || !viewport || !track) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reducedMotion) return;

    let overflow = 0;
    let frame = 0;
    const total = timelineData.length;

    const measure = () => {
      overflow = Math.max(0, track.scrollWidth - viewport.clientWidth);
      pin.style.setProperty("--timeline-overflow", `${overflow}px`);
    };

    const update = () => {
      frame = 0;
      const pinTop = pin.getBoundingClientRect().top;
      const scrollable = pin.offsetHeight - window.innerHeight;
      const progress =
        scrollable <= 0
          ? 0
          : Math.min(1, Math.max(0, -pinTop / scrollable));
      track.style.transform = `translate3d(${-overflow * progress}px, 0, 0)`;

      const active = Math.min(
        total - 1,
        Math.round(progress * (total - 1))
      );
      itemsRef.current.forEach((el, i) => {
        if (!el) return;
        el.setAttribute("data-active", i === active ? "true" : "false");
      });
      if (progressRef.current) {
        progressRef.current.textContent = `${pad(active)} / ${pad(total - 1)}`;
      }
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    const onResize = () => {
      measure();
      update();
    };

    measure();
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    const observer = new ResizeObserver(onResize);
    observer.observe(track);
    observer.observe(viewport);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      observer.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  if (!timelineData.length) return null;

  return (
    <section
      id="timeline"
      ref={(node) => {
        pinRef.current = node;
        revealContainer.current = node;
      }}
      className={styles.pin}
    >
      <div className={styles.sticky}>
        <div className={styles.headingRow}>
          <div className="headings_glittered">
            <Heading eyebrow="The roadmap">Timeline</Heading>
          </div>
          <p className={styles.progress} ref={progressRef} aria-live="off">
            01 / {pad(timelineData.length - 1)}
          </p>
        </div>

        <div className={styles.viewport} ref={viewportRef}>
          <ol className={styles.track} ref={trackRef}>
            <span className={styles.rail} aria-hidden="true" />
            {timelineData.map((data, idx) => (
              <li
                key={`${data.text}-${idx}`}
                className={styles.item}
                data-side={idx % 2 === 0 ? "below" : "above"}
                data-active={idx === 0 ? "true" : "false"}
                ref={(node) => {
                  itemsRef.current[idx] = node;
                }}
              >
                <span className={styles.node} aria-hidden="true" />
                <article
                  className={`winFrame ${styles.card}`}
                  data-win-title={`STEP_${pad(idx)}`}
                >
                  <h3 className={styles.title}>{data.text}</h3>
                  {data.date && (
                    <time className={styles.date} dateTime={data.date}>
                      {data.date}
                    </time>
                  )}
                </article>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Timeline;

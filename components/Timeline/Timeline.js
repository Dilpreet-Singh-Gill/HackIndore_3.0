import { useEffect, useRef } from "react";
import styles from "./Timeline.module.css";
import useScrollReveal from "@/hooks/useScrollReveal";
import { timelineData } from "@/util/config";
import Heading from "../Heading/Heading";

const pad = (value) => String(value + 1).padStart(2, "0");

const Timeline = () => {
  const headingRef = useScrollReveal();
  const trackRef = useRef(null);
  const railRef = useRef(null);
  const fillRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const items = itemsRef.current.filter(Boolean);
    const track = trackRef.current;
    const rail = railRef.current;
    const fill = fillRef.current;
    if (!items.length || !track || !rail || !fill) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let revealObserver;
    if (!reducedMotion && typeof IntersectionObserver !== "undefined") {
      revealObserver = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            entry.target.setAttribute("data-in", "true");
            revealObserver.unobserve(entry.target);
          }
        },
        { threshold: 0.22, rootMargin: "0px 0px -10% 0px" }
      );
      items.forEach((el) => revealObserver.observe(el));
    } else {
      items.forEach((el) => el.setAttribute("data-in", "true"));
    }

    let frame = 0;
    const syncActive = () => {
      frame = 0;
      const focus = window.innerHeight * 0.42;
      let best = 0;
      let bestDist = Infinity;

      items.forEach((el, i) => {
        const box = el.getBoundingClientRect();
        const dist = Math.abs(box.top + box.height / 2 - focus);
        if (dist < bestDist) {
          bestDist = dist;
          best = i;
        }
      });

      items.forEach((el, i) => {
        el.setAttribute("data-active", i === best ? "true" : "false");
      });

      const railBox = rail.getBoundingClientRect();
      const node = items[best].querySelector("[data-node]");
      if (!node || railBox.height <= 0) return;
      const nodeBox = node.getBoundingClientRect();
      const progress = Math.min(
        1,
        Math.max(0.08, (nodeBox.top + nodeBox.height / 2 - railBox.top) / railBox.height)
      );
      fill.style.transform = `scaleY(${progress})`;
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(syncActive);
    };

    syncActive();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      revealObserver?.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  if (!timelineData.length) return null;

  return (
    <section id="timeline" className={styles.section}>
      <div ref={headingRef} className="headings_glittered">
        <Heading eyebrow="The roadmap">Timeline</Heading>
      </div>

      <ol className={styles.track} ref={trackRef}>
        <span className={styles.rail} ref={railRef} aria-hidden="true">
          <span className={styles.railFill} ref={fillRef} />
        </span>
        {timelineData.map((data, idx) => (
          <li
            key={`${data.text}-${idx}`}
            className={styles.item}
            data-in="false"
            data-side={idx % 2 === 0 ? "left" : "right"}
            data-active={idx === 0 ? "true" : "false"}
            style={{ "--delay": `${idx * 70}ms` }}
            ref={(node) => {
              itemsRef.current[idx] = node;
            }}
          >
            <span className={styles.node} data-node aria-hidden="true" />
            <article
              className={`winFrame ${styles.card}`}
              data-win-title={`STEP_${pad(idx)}`}
            >
              <span className={styles.step} aria-hidden="true">
                {pad(idx)}
              </span>
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
    </section>
  );
};

export default Timeline;

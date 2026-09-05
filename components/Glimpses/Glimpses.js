import { useEffect, useState } from "react";
import Heading from "../Heading/Heading";
import styles from "./Glimpses.module.css";
import useScrollReveal from "@/hooks/useScrollReveal";

const shots = [
  { file: "Hack1.JPG", alt: "HackIndore teams coding together at SGSITS" },
  { file: "WhatsApp Image 2026-09-06 at 1.21.00 AM.jpeg", alt: "HackIndore participants during the onsite event" },
  { file: "Hack3.JPG", alt: "Mentors reviewing projects at HackIndore" },
  { file: "Hack5.JPG", alt: "HackIndore opening or briefing session" },
  { file: "WhatsApp Image 2026-09-06 at 1.16.39 AM.jpeg", alt: "Students presenting ideas at HackIndore" },
  { file: "Hack6.JPG", alt: "HackIndore workspace filled with student teams" },
  { file: "WhatsApp Image 2026-09-06 at 1.21.24 AM.jpeg", alt: "HackIndore crowd at SGSITS Indore" },
  { file: "Hack7.JPG", alt: "Winners and organizers at a previous HackIndore" },
  { file: "WhatsApp Image 2026-09-06 at 2.28.55 AM.jpeg", alt: "Night hacking session at HackIndore" },
  { file: "Hack8.JPG", alt: "Group photo from a previous HackIndore edition" },
];

const srcFor = (file) => encodeURI(`/previous_images/${file}`);

const laneA = [shots[1], shots[3], shots[6], shots[8], shots[0]];
const laneB = [shots[2], shots[4], shots[7], shots[9], shots[5]];

const Lane = ({ items, dir, onPick }) => (
  <div className={styles.lane} data-dir={dir} aria-hidden="true">
    <div className={styles.laneTrack}>
      {[0, 1].map((copy) => (
        <div className={styles.laneGroup} key={copy}>
          {items.map((shot, idx) => (
            <button
              key={`${copy}-${shot.file}`}
              type="button"
              className={styles.stripCard}
              data-tilt={idx % 2 === 0 ? "a" : "b"}
              onClick={() => onPick(shots.findIndex((s) => s.file === shot.file))}
            >
              <img src={srcFor(shot.file)} alt="" className={styles.stripPhoto} />
            </button>
          ))}
        </div>
      ))}
    </div>
  </div>
);

const Glimpses = () => {
  const headingRef = useScrollReveal();
  const [active, setActive] = useState(0);
  const [openAt, setOpenAt] = useState(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || openAt !== null) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % shots.length);
    }, 4200);
    return () => window.clearInterval(id);
  }, [paused, openAt]);

  useEffect(() => {
    if (openAt === null) return;

    const onKey = (event) => {
      if (event.key === "Escape") setOpenAt(null);
      if (event.key === "ArrowRight") {
        setOpenAt((i) => (i + 1) % shots.length);
      }
      if (event.key === "ArrowLeft") {
        setOpenAt((i) => (i - 1 + shots.length) % shots.length);
      }
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [openAt]);

  const pick = (index) => {
    setActive(index);
    setOpenAt(index);
  };

  const current = shots[active];

  return (
    <section id="glimpses" className={styles.section}>
      <div ref={headingRef} className="headings_glittered">
        <Heading eyebrow="Moments from the floor">Glimpses</Heading>
      </div>

      <div
        className={`winFrame ${styles.stage}`}
        data-win-title="Live_Reel"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className={styles.layout}>
          <button
            type="button"
            className={styles.hero}
            onClick={() => setOpenAt(active)}
            aria-label="Open current glimpse"
          >
            {shots.map((shot, idx) => (
              <img
                key={shot.file}
                src={srcFor(shot.file)}
                alt={idx === active ? shot.alt : ""}
                className={styles.heroPhoto}
                data-on={idx === active ? "true" : "false"}
              />
            ))}
            <span className={styles.heroWash} aria-hidden="true" />
            <span className={styles.heroMeta}>
              <span>SHOT_{String(active + 1).padStart(2, "0")}</span>
              <span>HackIndore archives</span>
            </span>
            <span className={styles.progress} aria-hidden="true">
              <span
                key={active}
                className={styles.progressBar}
                data-paused={paused ? "true" : "false"}
              />
            </span>
          </button>

          <div className={styles.lanes}>
            <Lane items={laneA} dir="up" onPick={pick} />
            <Lane items={laneB} dir="down" onPick={pick} />
          </div>
        </div>

        <div className={styles.dots} role="tablist" aria-label="Glimpses">
          {shots.map((shot, idx) => (
            <button
              key={shot.file}
              type="button"
              className={styles.dot}
              data-on={idx === active ? "true" : "false"}
              aria-label={`Show shot ${idx + 1}`}
              onClick={() => setActive(idx)}
            />
          ))}
        </div>
      </div>

      {openAt !== null && (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Event photo"
          onClick={() => setOpenAt(null)}
        >
          <div
            className={`winFrame ${styles.lightboxFrame}`}
            data-win-title={`SHOT_${String(openAt + 1).padStart(2, "0")}`}
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={srcFor(shots[openAt].file)}
              alt={shots[openAt].alt}
              className={styles.lightboxPhoto}
            />
            <div className={styles.lightboxBar}>
              <button
                type="button"
                className={styles.navBtn}
                onClick={() =>
                  setOpenAt((i) => (i - 1 + shots.length) % shots.length)
                }
              >
                Prev
              </button>
              <span className={styles.counter}>
                {String(openAt + 1).padStart(2, "0")} /{" "}
                {String(shots.length).padStart(2, "0")}
              </span>
              <button
                type="button"
                className={styles.navBtn}
                onClick={() => setOpenAt((i) => (i + 1) % shots.length)}
              >
                Next
              </button>
            </div>
            <button
              type="button"
              className={styles.closeBtn}
              onClick={() => setOpenAt(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Glimpses;

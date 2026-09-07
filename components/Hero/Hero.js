import React, { useEffect, useState } from "react";
import {
  registrationFormLink,
  resgistrationFormOnClick,
  tying_data_hero_page,
  dateOfHackIndore,
  endingDateOfHackIndore,
} from "@/util/config";
import styles from "./Hero.module.css";
import TransitionElement from "../TransitionElement/TransitionElement";
import ScramblingText from "./ScramblingText/ScramblingText";
import Link from "next/link";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";

const loaderDelay = 800;
const mountDelay = 500;

const resumeHighlights = [
  "Real-World Challenges",
  "Hands-On Experience",
  "Projects Worth Showcasing",
];

const stats = [
  { value: "24", label: "Hours" },
  { value: "4.0", label: "Edition" },
  { value: "SGSITS", label: "Indore" },
];

const hotNews = [
  {
    tag: "LIVE",
    headline: "Registrations are live on Unstop",
    href: registrationFormLink,
  },
  {
    tag: "NEW",
    headline: "Themes are out",
  },
  {
    tag: "SOON",
    headline: "Problem statements releasing soon",
  },
];

const Hero = () => {
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState("true");
  const [scrollIndicatorIsMount, setScrollIndicatorIsMount] = useState(false);
  const isMobile = useMediaQuery("(max-width: 460px)");
  const startDate = dateOfHackIndore.getDate();
  const endDate = endingDateOfHackIndore.getDate();
  const year = dateOfHackIndore.getFullYear();
  const month = !isMobile
    ? dateOfHackIndore.toLocaleString("default", { month: "long" })
    : dateOfHackIndore.toLocaleString("default", { month: "short" });
  const startWeekday = dateOfHackIndore.toLocaleDateString("en", {
    weekday: "long",
  });
  const endWeekday = endingDateOfHackIndore.toLocaleDateString("en", {
    weekday: "long",
  });

  useEffect(() => {
    const hiddenId = setTimeout(
      () => setScrollIndicatorHidden("false"),
      mountDelay + loaderDelay - 1
    );
    const mountId = setTimeout(
      () => setScrollIndicatorIsMount(true),
      mountDelay + loaderDelay
    );

    const toggleAtTop = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled >= 20) setScrollIndicatorHidden("true");
      else if (scrolled < 20) setScrollIndicatorHidden("false");
    };
    window.addEventListener("scroll", toggleAtTop);

    return () => {
      clearTimeout(hiddenId);
      clearTimeout(mountId);
      window.removeEventListener("scroll", toggleAtTop);
    };
  }, []);

  return (
    <section className={styles.container} id="hero">
      <div className={styles.rays} aria-hidden="true" />

      <div className={styles.featureGridContainer}>
        <TransitionElement
          animationClass="fadeup"
          mountDelay={mountDelay}
          loaderDelay={loaderDelay}
        >
          <div className={styles.heroGrid}>
            <div className={styles.contentCol}>
              <div className={styles.titleBlock}>
                <p className={styles.presents}>
                  <span className={styles.hash}>#include</span> presents
                </p>
                <h1 className={styles.wordmarkHeading}>
                  <Image
                    src="/assets/hackindore-wordmark.png"
                    alt=""
                    width={1024}
                    height={194}
                    className={styles.wordmark}
                    priority={true}
                  />
                  <span className="visually-hidden">
                    HackIndore 4.0 — 24-hour hackathon at SGSITS Indore
                  </span>
                </h1>
              </div>

              <div className={styles.ledeBlock}>
                <p className={styles.lede}>
                  <strong>#include</strong> is back with SGSITS&apos; biggest
                  hackathon. HackIndore 3.0 set the bar high. <strong>HackIndore 4.0 </strong>
                  is gonna surpass it. This time we&apos;re going{" "}
                  <strong>bigger, better &amp; bolder.</strong>
                </p>

                <ul className={styles.statRow}>
                  {stats.map(({ value, label }) => (
                    <li key={label} className={styles.stat}>
                      <span className={styles.statValue}>{value + " "}</span>
                      <span className={styles.statLabel}>{label}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.resumeNewsRow}>
                <div
                  className={`winFrame ${styles.resumeFrame}`}
                  data-win-title="Boost_Your_Resume"
                >
                  <ul className={styles.highlights}>
                    {resumeHighlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className={styles.newsStage}>
                  <span className={styles.newsDeck} aria-hidden="true" />
                  <span className={styles.newsDeck} aria-hidden="true" />
                  <aside className={styles.newsBox} aria-label="Hot news">
                    <div className={styles.newsBar}>
                      <span className={styles.newsTitle}>HOT_NEWS</span>
                      <span className={styles.newsSignal}>
                        <span className={styles.newsPulse} aria-hidden="true" />
                        ON AIR
                      </span>
                    </div>
                    <ul className={styles.newsList}>
                      {hotNews.map((item) => {
                        const body = (
                          <>
                            <span className={styles.newsLive}>{item.tag}</span>
                            <span className={styles.newsHeadline}>{item.headline}</span>
                          </>
                        );

                        return (
                          <li key={item.headline} className={styles.newsItem}>
                            {item.href ? (
                              <a
                                href={item.href}
                                onClick={resgistrationFormOnClick}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.newsLink}
                              >
                                {body}
                              </a>
                            ) : (
                              <div className={styles.newsStatic}>{body}</div>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </aside>
                </div>
              </div>

              <div className={styles.taglineBlock}>
                <p className={styles.tagline}>
                  Got the skills?
                  <br />
                  Time to show them off
                </p>
                <ScramblingText data={tying_data_hero_page} />

                <div className={styles.timedate}>
                  <p className={styles.dateLine}>
                    {`${startDate} \u2013 ${endDate} ${month} ${year}`}
                  </p>
                  <p className={styles.timeLine}>
                    {`11:00 AM \u2014 11:00 AM \u00B7 ${startWeekday} \u2013 ${endWeekday}`}
                  </p>
                </div>
              </div>

              <div className={styles.actionBlock}>
                <div className={styles.ctaRow}>
                  <a
                    href={registrationFormLink}
                    onClick={resgistrationFormOnClick}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.email_link}
                  >
                    Register Now
                  </a>
                  <Link href="#timeline" className={styles.ghostLink}>
                    View Timeline
                  </Link>
                </div>
              </div>
            </div>

            <div className={styles.visualCol} aria-hidden="true">
              <span className={styles.figureGlow} />
              <Image
                src="/assets/hero-figure.png"
                alt=""
                width={345}
                height={351}
                className={styles.figure}
                style={{ width: "auto", height: "62rem", maxWidth: "none" }}
                priority={true}
              />
            </div>
          </div>
        </TransitionElement>

        <div className={styles.scrollIndicatorWrapper}>
          <Link
            className={styles.scrollIndicator}
            data-hidden={
              scrollIndicatorIsMount ? scrollIndicatorHidden : "true"
            }
            href="#countdown"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

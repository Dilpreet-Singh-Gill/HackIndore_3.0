import useScrollReveal from "@/hooks/useScrollReveal";
import styles from "./KeyTakeaways.module.css";
import Heading from "../Heading/Heading";
import Image from "next/image";
import { registrationFormLink } from "@/util/config";

const qr = "/Hackindore 4.0 QR.png";

const takeaways = [
  {
    n: "01",
    title: "Ship a real project",
    body: "A golden chance to unleash the hidden talent of solving real-world problems and convert your ideas into a project.",
  },
  {
    n: "02",
    title: "Stickers & goodies",
    body: "Walk away with stickers and goodies from the event.",
  },
  {
    n: "03",
    title: "Certificates for all",
    body: "Certificates to all the participants.",
  },
  {
    n: "04",
    title: "Expert review",
    body: "Get your project reviewed by our expert panel.",
  },
  {
    n: "05",
    title: "Internships",
    body: "Showcase your coding and innovative skills in front of company officials and get internships.",
  },
  {
    n: "06",
    title: "Resume boost",
    body: "Add value to your resume or CV.",
  },
  {
    n: "07",
    title: "Prizes & goodies",
    body: "Chance to win exciting prizes and goodies.",
  },
  {
    n: "08",
    title: "Food on us",
    body: "Free food, snacks, and beverages will be provided for the participants.",
  },
];

const KeyTakeaways = () => {
  const revealContainer = useScrollReveal();

  return (
    <section
      id="keytakeaways"
      ref={revealContainer}
      className={styles.container}
    >
      <div className="headings_glittered">
        <Heading eyebrow="Why you should join">Key Takeaways</Heading>
      </div>

      <div className={styles.layout}>
        <ol className={styles.grid}>
          {takeaways.map(({ n, title, body }) => (
            <li key={n} className={styles.card}>
              <span className={styles.index} aria-hidden="true">
                {n}
              </span>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardBody}>{body}</p>
            </li>
          ))}
        </ol>

        <div
          className={`winFrame ${styles.posterFrame}`}
          data-win-title="Scan_To_Register"
        >
          <a
            href={registrationFormLink}
            target="_blank"
            rel="noreferrer"
            className={styles.qrLink}
          >
            <Image
              src={encodeURI(qr)}
              alt="HackIndore 4.0 registration QR code"
              className={styles.poster}
              sizes="(max-width: 900px) 80vw, 360px"
              width={1000}
              height={1000}
            />
          </a>
          <p className={styles.qrCaption}>Scan to register</p>
        </div>
      </div>
    </section>
  );
};

export default KeyTakeaways;

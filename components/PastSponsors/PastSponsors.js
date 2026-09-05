import Heading from "../Heading/Heading";
import styles from "./PastSponsors.module.css";
import useScrollReveal from "@/hooks/useScrollReveal";

const sponsors = [
  { file: "sponsor1.png", name: "WalkOver", href: "https://walkover.in/" },
  { file: "sponsor2.png", name: "GitHub", href: "https://github.com/" },
  { file: "sponsor3.png", name: "Coding Blocks", href: "https://codingblocks.com/" },
  {
    file: "sponsor4.png",
    name: "Microsoft Learn Student Ambassadors",
    href: "https://mvp.microsoft.com/studentambassadors",
  },
  { file: "sponsor5.png", name: "Progate", href: "https://progate.com/" },
  { file: "sponsor6.png", name: "Chicago Pizza", href: "https://chicagopizza.in/" },
  { file: "sponsor7.png", name: "Past sponsor", href: null },
  { file: "sponsor8.png", name: "HackerEarth", href: "https://www.hackerearth.com/" },
  {
    file: "sponsor9.png",
    name: "Hack Soc",
    href: "https://www.instagram.com/hack.soc/?hl=en",
  },
  {
    file: "sponsor10.png",
    name: "Developer Circles Indore",
    href: "https://www.linkedin.com/company/devcindore/",
  },
  { file: "sponsor11.png", name: "Foxmula", href: "https://foxmula.com/#/" },
  { file: "images.jpg", name: "OPPO", href: "https://www.oppo.com/" },
  { file: "images (1).jpg", name: "Encode AI", href: null },
];

const srcFor = (file) => encodeURI(`/past sponsors/${file}`);

const rowA = sponsors;
const rowB = [...sponsors].reverse();

const LogoCard = ({ file, name, href }) => {
  const image = (
    <span className={styles.tile}>
      <img src={srcFor(file)} alt={name} className={styles.logo} />
    </span>
  );

  if (!href) {
    return <li className={styles.item}>{image}</li>;
  }

  return (
    <li className={styles.item}>
      <a href={href} target="_blank" rel="noreferrer" className={styles.link}>
        {image}
      </a>
    </li>
  );
};

const LoopRow = ({ items, direction }) => (
  <div className={styles.marquee} data-dir={direction} aria-hidden="true">
    <div className={styles.track}>
      {[0, 1].map((copy) => (
        <ul className={styles.group} key={copy}>
          {items.map((sponsor) => (
            <LogoCard key={`${copy}-${sponsor.file}`} {...sponsor} />
          ))}
        </ul>
      ))}
    </div>
  </div>
);

const PastSponsors = () => {
  const revealContainer = useScrollReveal();

  return (
    <section
      id="sponsors"
      ref={revealContainer}
      className={styles.section}
    >
      <div className="headings_glittered">
        <Heading eyebrow="They backed the earlier editions">
          Past Sponsors
        </Heading>
      </div>

      <div className={`winFrame ${styles.frame}`} data-win-title="Past_Allies">
        <LoopRow items={rowA} direction="left" />
        <LoopRow items={rowB.length ? rowB : rowA} direction="right" />

        <ul className={styles.grid}>
          {sponsors.map((sponsor) => (
            <LogoCard key={`grid-${sponsor.file}`} {...sponsor} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PastSponsors;

import React, { useRef, useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import autoAnimate from "@formkit/auto-animate";
import useScrollReveal from "@/hooks/useScrollReveal";
import AnimatedText from "@/components/AnimatedText/AnimatedText";
import styles from "./Faq.module.css";
import { frequentlyAskedQuestions } from "@/util/config";
import Heading from "../Heading/Heading";

const Panel = ({ label, content, activeTab, index, activateTab }) => {
  const innerRef = useRef(null);

  useEffect(() => {
    if (innerRef.current) {
      autoAnimate(innerRef.current);
    }
  }, []);

  const isActive = activeTab === index;

  return (
    <div
      className={styles.panel}
      role="tabpanel"
      aria-expanded={isActive}
      ref={innerRef}
    >
      <button className={styles.panel__label} role="tab" onClick={activateTab}>
        {label}
      </button>
      {isActive && (
        <div className={styles.panel__inner} aria-hidden={!isActive}>
          <p className={styles.panel__content}>{content}</p>
        </div>
      )}
    </div>
  );
};

const Accordion = ({ panels }) => {
  const [activeTab, setActiveTab] = useState(1);

  const activateTab = (index) => {
    setActiveTab((prev) => (prev === index ? -1 : index));
  };

  return (
    <div className={styles.accordion} role="tablist">
      {panels.map((panel, index) => (
        <Panel
          key={index}
          activeTab={activeTab}
          index={index}
          {...panel}
          activateTab={() => activateTab(index)}
        />
      ))}
    </div>
  );
};

const FrequentlyAsked = (props, index) => {
  return (
    <Row key={index}>
      {props.map((s, i) => (
        <Col key={i} sm={12} lg={6} md={6}>
          <Accordion panels={s} />
        </Col>
      ))}
    </Row>
  );
};

const Faq = () => {
  const revealContainer = useScrollReveal();

  return (
    <section ref={revealContainer} className={styles.container} id="faq">
      {/* <div className="headings_glittered">
                <AnimatedText>
                    <h1 className={styles.heading}>FAQs</h1>
                </AnimatedText>
            </div> */}
      <div className="headings_glittered">
        <Heading>FAQ's</Heading>
      </div>

      <div>{frequentlyAskedQuestions.map(FrequentlyAsked)}</div>
    </section>
  );
};

export default Faq;

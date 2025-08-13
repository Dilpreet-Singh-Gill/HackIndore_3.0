import React from "react";
import styles from "./Sponsor.module.css";
// import { Row, Col, Container } from "react-bootstrap";
import AnimatedText from "@/components/AnimatedText/AnimatedText";
import useScrollReveal from "@/hooks/useScrollReveal";
import { Swiper, SwiperSlide } from "swiper/react";
// import { ArrowBackIos } from "@mui/icons-material";
// import { ArrowForwardIos } from "@mui/icons-material";
// import { Hidden } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import Heading from "../Heading/Heading";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";

const images = [
  "icons/sponsor1.png",
  "icons/sponsor2.png",
  "icons/sponsor3.png",
  "icons/sponsor4.png",
  "icons/sponsor5.png",
  "icons/sponsor6.png",
  "icons/sponsor7.png",
  "icons/sponsor8.png",
  "icons/sponsor9.png",
  "icons/sponsor10.png",
  "icons/sponsor11.png",
];

const Sponsor = () => {
  // const revealContainer = useScrollReveal();
  const isSmallScreen = useMediaQuery("(max-width:600px");
  // const slidesPerView = isSmallScreen ? 1 : 3;
  const breakpoints = {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  };
  return (
    // <section ref={revealContainer} id='sponsors'>
    <section id="sponsors" className="container">
      {/* <div className="headings_glittered">
        <AnimatedText>
          <h1>Past Sponsors</h1>
        </AnimatedText>
      </div> */}
      <div className="headings_glittered">
        <Heading>Past Sponsors</Heading>
      </div>
      <Swiper
        breakpoints={breakpoints}
        effect={"coverflow"}
        grabCursor="true"
        centeredSlides="true"
        spaceBetween={25}
        loop={true}
        // slidesPerView={slidesPerView}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 40,
          stretch: 20,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {images.map((imgi, index) => (
          <SwiperSlide className="swiper-slide">
            {/* <Col key={index} xs={12} sm={6} md={4} className={styles.flex}> */}
            {/* <img src={img} alt="Sponsor" className={styles.sponsorIcon} /> */}
            <div className="image-container" key={index}>
              <img src={imgi} alt="sponsor" className={styles.sponsorIcon} />
            </div>
            {/* </Col> */}
          </SwiperSlide>
        ))}
        {/* <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <Hidden smDown>
              <ArrowBackIos sx={{ color: "aqua" }} />
            </Hidden>
          </div>
          <div className="swiper-button-next slider-arrow">
            <Hidden smDown>
              <ArrowForwardIos sx={{ color: "aqua" }} />
            </Hidden>
          </div>
          <div className="swiper-pagination"></div>
        </div> */}
      </Swiper>
    </section>
  );
};

export default Sponsor;

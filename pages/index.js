import React from "react";

import Hero from "@/components/Hero/Hero";
import Countdown from "@/components/Countdown/Countdown";
import PreviousMentors from "@/components/PreviousMentors/PreviousMentors";
import Timeline from "@/components/Timeline/Timeline";
import PreviousImages from "@/components/PreviousImages/PreviousImages";
import Faq from "@/components/Faq/Faq";
import AboutUs from "@/components/AboutUs/AboutUs";
import KeyTakeaways from "@/components/KeyTakeaways/KeyTakeaways";
import RegistrationProcess from "@/components/RegistrationProcess/RegistrationProcess";
import Instructions from "@/components/Instructions/Instructions";
import ScrollUpBtn from "@/components/ScrollUpBtn/ScrollUpBtn";
import SponsorsNew from "@/components/Sponsor/SponsorNew";
import Marquee from "@/components/Marquee/Marquee";


const Home = () => (
  <div id="home_route">
    <Hero />
    <Marquee />
    <Countdown />
    <KeyTakeaways />
    <Timeline />
    <RegistrationProcess />
    <Instructions />
    {/* <SponsorsNew /> */}
    <Faq />
    {/* <PreviousImages /> */}
    <AboutUs />
    <ScrollUpBtn />
  </div>
);

export default Home;

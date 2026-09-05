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
import PastSponsors from "@/components/PastSponsors/PastSponsors";
import Glimpses from "@/components/Glimpses/Glimpses";
import ScrollUpBtn from "@/components/ScrollUpBtn/ScrollUpBtn";
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
    <PastSponsors />
    <Glimpses />
    <AboutUs />
    <Faq />
    <ScrollUpBtn />
  </div>
);

export default Home;

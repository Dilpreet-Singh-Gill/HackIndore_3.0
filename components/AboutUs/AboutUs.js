import React from "react";
import Box from "@mui/material/Box";
import { Stack } from "@mui/system";
import Heading from "../Heading/Heading";
import styles from "./About.module.css";
import useScrollReveal from "@/hooks/useScrollReveal";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNodedotjs,
  SiPython,
  SiMongodb,
  SiJavascript,
  SiGit,
} from "react-icons/si";

const AboutUs = () => {
  const revealContainer = useScrollReveal();

  const techIcons = [
    { Icon: SiReact, color: "#61DAFB" },
    { Icon: SiNodedotjs, color: "#68A063" },
    { Icon: SiPython, color: "#FFD43B" },
    { Icon: SiMongodb, color: "#47A248" },
    { Icon: SiJavascript, color: "#F7DF1E" },
    { Icon: SiGit, color: "#F05032" },
  ];

  return (
    <section id="aboutus" ref={revealContainer}>
      <div className="headings_glittered">
        <Heading>About Us</Heading>
      </div>

      <Stack
        direction={{ md: "row", xs: "column-reverse" }}
        gap={1}
        className={styles.AboutContainer}
      >
        {/* LEFT TEXT */}
        <Stack
          direction={"column"}
          gap={5}
          sx={{ padding: "30px 15px" }}
          alignContent="center"
          justifyContent="center"
          className={styles.text}
        >
          <p className={styles.medium}>
            The Information Technology Department of SGSITS is organizing a hackathon to empower
            individuals to explore, innovate, and master the world of technology.
          </p>
          <p className={styles.small}>
            We believe that technology is the driving force of the modern world, and through this
            event, we aim to create a vibrant community where participants can learn, collaborate,
            and showcase their creativity.
            <br />
            <br />
            Our goal is to equip students with the skills, experience, and confidence needed to
            excel in the tech industry and beyond, while fostering innovation, problem-solving, and
            teamwork.
          </p>
        </Stack>

        {/* RIGHT TECH ICONS GRID */}
        {/* RIGHT TECH ICONS CLOUD */}
        <Box
          className={styles.iconsContainer}
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)", // 3 icons per row
            gap: "20px", // space between items
            padding: "20px",
            justifyItems: "center", // center icons horizontally
          }}
        >
          {techIcons.map(({ Icon, color }, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.2, rotate: 5 }}
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 3, delay: i * 0.2 }}
              style={{
                background: "rgba(0, 0, 0, 0.7)",
                padding: "25px",
                borderRadius: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "90px",
                height: "90px",
                boxShadow: `0 0 25px ${color}`,
                transition: "all 0.3s ease-in-out",
              }}
            >
              <Icon size={50} color={color} />
            </motion.div>
          ))}
        </Box>

      </Stack>
    </section>
  );
};

export default AboutUs;

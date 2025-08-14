import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Container from "../Container/Container";
import AnimatedText from "../AnimatedText/AnimatedText";
import styles from "./About.module.css";
import useScrollReveal from "@/hooks/useScrollReveal";
import { useMediaQuery } from "@mui/material";
import { Stack } from "@mui/system";
import Heading from "../Heading/Heading";
import Image from "next/image";

const AboutUs = () => {
  const revealContainer = useScrollReveal();

  return (
    <section id="aboutus" ref={revealContainer}>
      {/* <div className="headings_glittered">
                <AnimatedText>
                    <h1>About Us</h1>
                </AnimatedText>
            </div> */}
      <div className="headings_glittered">
        <Heading>About Us</Heading>
      </div>
      <Stack
        direction={{ md: "row", xs: "column-reverse" }}
        gap={1}
        className={styles.AboutContainer}
      >
        <Stack
          direction={"column"}
          gap={5}
          sx={{ padding: "30px 15px" }}
          alignContent="center"
          justifyContent="center"
          className={styles.text}
        >
          <p className={styles.medium}>
            We are club #include, the official techno learning club of
            Information Technology Department, SGSITS. We believe in empowering
            individuals to explore and master the world of technology.
          </p>
          <p className={styles.small}>
            At #include, we understand that technology is the driving force of
            the modern world, and as such, we strive to create a community where
            individuals can learn, grow, and thrive in this field. Our goal is
            to equip members with the necessary skills and knowledge to excel in
            the tech industry and beyond.
          </p>
        </Stack>
        <div className={styles.image}>
          <Image
            src="/images/Team_image2.png"
            alt="Team"
            className={styles.img}
            sizes="100vw"
            height={0}
            width={0}
            style={{ height: "auto", width: "100%" }}
          />
        </div>
      </Stack>
    </section>
  );
};
// const LeftSide = () => (
//     <Box>
//         <Box marginBottom={2}>
//             <p className={styles.medium}>
//                 We are club #include, the premier techno learning club where we believe in empowering individuals to explore and master the world of technology.
//             </p>
//         </Box>
//         <br />
//         <Box marginBottom={4}>

//             <p className={styles.small}>
//                 At #include, we understand that technology is the driving force of the modern world, and as such, we strive to create a community where individuals can learn, grow, and thrive in this field. Our goal is to equip members with the necessary skills and knowledge to excel in the tech industry and beyond.
//             </p>
//         </Box>

//     </Box>
// );

// const RightSide = () => {
//     const isMobile = useMediaQuery('(max-width: 991px)');

//     return (
//         <Box
//             sx={{
//                 height: { xs: "auto", md: 1 },
//                 "& img": {
//                     objectFit: "cover",
//                 },
//                 "& .lazy-load-image-loaded": {
//                     height: 1,
//                     width: 1,
//                 },
//             }}
//         >
//             <Box
//                 component={LazyLoadImage}
//                 effect="blur"
//                 src={isMobile ? "images/Team_image2.png" : "images/Team_image.png"}
//                 height={{ xs: "auto", md: 1 }}
//                 // maxHeight={{ xs: 300, md: 1 }}
//                 width={1}
//                 maxWidth={1}
//             />
//         </Box>
//     );
// };
{
  /* <Box
                sx={{
                    width: 1,
                    height: 1,
                    overflow: "hidden",
                }}
            >
                <Container paddingX={0} paddingY={0} maxWidth={{ sm: 1, md: 1236 }}>
                    <Box
                        display={"flex"}
                        flexDirection={{ xs: "column", md: "row" }}
                        position={"relative"}
                    >
                        <Box width={1} order={{ xs: 2, md: 1 }}>
                            <Container>
                                <LeftSide />
                            </Container>
                        </Box>
                        <Box
                            sx={{
                                flex: { xs: "0 0 100%", md: "0 0 50%" },
                                position: "relative",
                                maxWidth: { xs: "100%", md: "50%" },
                                order: { xs: 1, md: 2 },
                            }}
                        >
                            <Box
                                sx={{
                                    width: { xs: 1, md: "50vw" },
                                    height: "100%",
                                    position: "relative",
                                }}
                            >
                                <Box
                                    sx={{
                                        width: "100%",
                                        height: "100%",
                                        overflow: "hidden",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            overflow: "hidden",
                                            left: "0%",
                                            width: 1,
                                            height: 1,
                                            position: { xs: "relative", md: "absolute" },
                                        }}
                                    >
                                        <RightSide />
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Container>
                <Divider />
            </Box> */
}

export default AboutUs;

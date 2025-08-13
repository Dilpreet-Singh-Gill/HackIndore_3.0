import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import styles from "./Footer.module.css";
import { registrationFormLink, resgistrationFormOnClick } from '@/util/config';

const Ending = () => {
  return (
    <Grid container spacing={3}>
      {/* <Grid item xs={12}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          width={1}
          flexDirection={{ xs: "column", sm: "row" }}
        >
          <a href="/" className={styles.main}>
            #include
          </a>
          <Box
            display="flex"
            flexWrap={"wrap"}
            alignItems={"center"}
            className="font"
          >
            <Box marginTop={1} marginRight={2}>
              <a href="/#" className={styles.small1}>
                Home
              </a>
            </Box>
            <Box marginTop={1} marginRight={2}>
              <a href="/#faq" className={styles.small1}>
                FAQ's
              </a>
            </Box>
            <Box marginTop={1}>
              <a onClick={resgistrationFormOnClick} href={registrationFormLink} target="_blank" className={styles.email_link}>
                Register
              </a>
            </Box>
          </Box>
        </Box>
      </Grid> */}
      <Grid item xs={12}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          width={1}
          flexDirection={{ xs: "column", sm: "row" }}
        >
          {/* <p className={[styles.ending, styles.ending2].join(" ")}>
            Thanks for coding with us! Stay tuned for updates.
          </p> */}
          <p className={[styles.ending1, styles.ending2].join(" ")}>© {new Date().getFullYear()} HackIndore. All rights reserved.</p>

          <Box
            display="flex"
            flexWrap={"wrap"}
            alignItems={"center"}
            className="font"
          >
            <p className={[styles.ending, styles.ending2].join(" ")}>
              Made with ❤️ by team{" "} <a href="/" className={styles.none}>#include</a>
            </p>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Ending;

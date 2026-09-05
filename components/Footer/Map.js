import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import styles from "./Footer.module.css";
import { mapEmbedLink } from "@/util/config";
import { contactDetails } from '@/util/config'

const Map = () => {
  return (
    <Box
      sx={{
        position: "relative",
        "&::after": {
          position: "absolute",
          content: '""',
          width: "6%",
          height: "100%",
          zIndex: 1,
          top: 0,
          right: 0,
          backgroundSize: "18px 18px",
          opacity: 0.2,
        },
      }}
    >
      <Box position={"relative"} zIndex={2}>
        <Box className={styles.contactStack}>
          <Grid
            container
            flexDirection={"column"}
            margin={{ xs: 0 }}
            spacing={2}
            className={styles.contactCopy}
            sx={{ width: "100%" }}
          >
            <Box>
              <Box marginTop={{ xs: 4, sm: 0 }} marginBottom={{ sm: 2 }}>
                <h3>Please feel free to contact us!</h3>
              </Box>
            </Box>
            <Grid item xs={12} marginBottom={2}>
              <p className={styles.small1}>Call us :</p>
              {contactDetails.numbers.map(number =>
                <p className={styles.small}>{number}</p>
              )}
            </Grid>
            <Grid item xs={12} marginBottom={2}>
              <p className={styles.small1}>Email us :</p>
              <p className={styles.small}>{contactDetails.email}</p>
            </Grid>
            <Grid item xs={12} marginBottom={2}>
              <p className={styles.small1}>Meet us :</p>
              <p className={styles.small}>
                {contactDetails.address}
              </p>
            </Grid>
          </Grid>
          <Box className={styles.contactMap}>
            <iframe
              className={styles.mapFrame}
              width="100%"
              height="100%"
              frameBorder="0"
              title="map"
              marginHeight={0}
              marginWidth={0}
              scrolling="no"
              src={mapEmbedLink}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Map;

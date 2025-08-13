import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Paper } from "@mui/material";
import { Skeleton } from "@mui/material";
import { Slide } from "react-awesome-reveal";
import Heading from "../Heading/Heading";
import { sponsorData as data } from "@/util/config";
import useScrollReveal from "@/hooks/useScrollReveal";

const SponsorsNew = () => {
  const [loading, setLoading] = useState(false);
  const revealContainer = useScrollReveal();
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 4000);
  });
  return (
    <section ref={revealContainer} id="sponsors" className="container">
      <Paper
        sx={{
          paddingBottom: "5rem",
          background: "transparent",
          boxShadow: "none",
        }}
      >
        <Typography
          variant="h3"
          size="small"
          sx={{ textAlign: "center", color: "#f06f2b", padding: "0" }}
        >
          <div className="headings_glittered">
            <Heading>Past Sponsors</Heading>
          </div>
        </Typography>

        <Grid
          container
          sx={{
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: "2rem",
            padding: "0rem 9rem",
          }}
        >
          {data.map((spo, index) => (
            <Slide
              cascade
              damping={0.8}
              direction={index % 3 === 0 ? "left" : "right"}
              triggerOnce
            >
              <a href={spo.path} target={"__blank"} style={{}}>
                <Grid
                  item
                  spacing={1}
                  key={spo.id}
                  sx={{
                    backgroundColor: "#361857",
                    padding: "0",
                    borderRadius: "10px",
                    margin: "0.4rem",
                  }}
                >
                  <div
                    style={{
                      borderRadius: "10px",
                      height: "200px",
                      width: "200px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {loading ? (
                      // <Fade in={true}>

                      <img
                        src={spo.image}
                        alt=""
                        style={{
                          height: "auto",
                          width: "78%",
                          borderRadius: "10px",
                          // zIndex: '-100',
                        }}
                        loading="lazy"
                      />
                    ) : (
                      <Skeleton
                        variant="rectangular"
                        width={"100%"}
                        height={"100%"}
                        animation="wave"
                      ></Skeleton>
                    )}
                  </div>
                </Grid>
                {/* )} */}
              </a>
            </Slide>
          ))}
        </Grid>
      </Paper>
    </section>
  );
};

export default SponsorsNew;

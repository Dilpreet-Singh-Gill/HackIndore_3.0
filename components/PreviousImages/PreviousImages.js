import React, { useState, useCallback } from "react";
import Gallery from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Container } from "react-bootstrap";
import useScrollReveal from "@/hooks/useScrollReveal";
import { prevImgsDetails } from "@/util/config";
import Heading from "../Heading/Heading";

const PreviousImages = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const revealContainer = useScrollReveal();

  const openLightbox = useCallback((event, { index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setViewerIsOpen(false);
  };

  return (
    <Container ref={revealContainer} as="section" id="glimpses">
      <div className="headings_glittered">
        <Heading>Glimpses</Heading>
      </div>

      <Gallery photos={prevImgsDetails} onClick={openLightbox} />

      <Lightbox
        open={viewerIsOpen}
        close={closeLightbox}
        index={currentImage}
        slides={prevImgsDetails.map((img) => ({
          src: img.src,
          alt: img.title,
        }))}
      />
    </Container>
  );
};

export default PreviousImages;

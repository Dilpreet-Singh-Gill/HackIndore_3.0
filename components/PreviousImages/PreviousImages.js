import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { Container } from "react-bootstrap";
import AnimatedText from "@/components/AnimatedText/AnimatedText";
import useScrollReveal from "@/hooks/useScrollReveal";
import { prevImgsDetails } from "@/util/config";
import Heading from "../Heading/Heading";

const PreviousImages = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  const revealContainer = useScrollReveal();

  return (
    <Container ref={revealContainer} as="section" id="glimpses">
      {/* <div className="headings_glittered">
                <AnimatedText>
                    <h1>Glimpses</h1>
                </AnimatedText>
            </div> */}
      <div className="headings_glittered">
        <Heading>Glimpses</Heading>
      </div>
      <Gallery photos={prevImgsDetails} onClick={openLightbox} />
      <Container>
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={photos.map((x) => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </Container>
    </Container>
  );
};

export default PreviousImages;

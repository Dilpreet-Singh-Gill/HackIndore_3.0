import React, { useCallback } from "react";
import particleConfig from "@/util/particle.config";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const ParticleBackground = () => {
  const particleInit = useCallback((engine) => {
    loadFull(engine);
  }, []);
  return <Particles init={particleInit} options={particleConfig} />;
};

export default ParticleBackground;

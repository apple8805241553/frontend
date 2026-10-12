import { useEffect, useState } from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { pageParticleOptions, reducedMotionParticleOptions } from "../../models/ParticleModel";
import styles from "./PageParticles.module.scss";

/** 在 App 層以單一固定畫布提供全域粒子背景，並遵循 reduced motion 設定。 */
const PageParticles = () => {
  const [reducedMotion, setReducedMotion] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setReducedMotion(motionPreference.matches);

    motionPreference.addEventListener("change", updateMotionPreference);
    return () => motionPreference.removeEventListener("change", updateMotionPreference);
  }, []);

  return (
    <div className={styles.particleLayer} aria-hidden="true">
      <ParticlesProvider init={loadSlim}>
        <Particles id="page-particles" className={styles.particles} options={reducedMotion ? reducedMotionParticleOptions : pageParticleOptions} />
      </ParticlesProvider>
    </div>
  );
};

export default PageParticles;

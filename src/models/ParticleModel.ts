import type { ISourceOptions } from "@tsparticles/engine";

export const pageParticleOptions: ISourceOptions = {
  fullScreen: { enable: false },
  autoPlay: true,
  pauseOnOutsideViewport: false,
  fpsLimit: 30 ,
  interactivity: {
    detectsOn: "window",
    events: {
      onHover: { enable: true, mode: "repulse" },
      onClick: { enable: true, mode: ["push", "repulse"] },
    },
    modes: {
      push: { quantity: 10 },
      repulse: { distance: 160, duration: 0.6 },
    },
  },
  particles: {
    color: { value: "#9ce8c8" },
    links: {
      color: "#75bda2",
      distance: 130,
      enable: true,
      opacity: 0.3,
      width: 1,
    },
    move: {
      enable: true,
      outModes: { default: "bounce" },
      speed: 0.65,
    },
    number: {
      density: { enable: true },
      // 點擊新增粒子時淘汰較早的粒子，避免連續點擊讓動畫負擔持續增加。
      limit: { mode: "delete", value: 180 },
      value: 100,
    },
    opacity: { value: 1.2 },
    shape: { type: "circle" },
    size: { value: { min: 1.5, max: 3 } },
  },
  detectRetina: true,
};

/** 降低動態時保留粒子背景與點擊新增，避免整個背景被移除。 */
export const reducedMotionParticleOptions: ISourceOptions = {
  ...pageParticleOptions,
  interactivity: {
    detectsOn: "window",
    events: {
      onHover: { enable: false },
      onClick: { enable: true, mode: "push" },
    },
    modes: { push: { quantity: 12 } },
  },
  particles: {
    ...pageParticleOptions.particles,
    move: { enable: false },
  },
};

export const frontendPiePalette = [
  { light: "#8bffd2", base: "#00d483", dark: "#078a61", side: "#065239" },
  { light: "#c4e6ff", base: "#66b5ff", dark: "#326cbd", side: "#1d3d6f" },
  { light: "#fff1b8", base: "#ffd166", dark: "#c58a25", side: "#775218" },
  { light: "#ffd2bf", base: "#ff947c", dark: "#c14e47", side: "#742f31" },
  { light: "#eadbff", base: "#b69af7", dark: "#7453b6", side: "#46336e" },
  { light: "#c4fff4", base: "#7eddd6", dark: "#308f92", side: "#1e555d" },
  { light: "#ffdbef", base: "#e59bc8", dark: "#a4518c", side: "#653254" },
  { light: "#e1ffb8", base: "#a8cf77", dark: "#628e39", side: "#3c5827" },
] as const;

export const pieDepthStyle = {
  depth: 10,
  shadowBlur: 18,
  shadowOffset: 6,
  padding: { top: 12, right: 12, bottom: 30, left: 12 },
} as const;

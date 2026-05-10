export const easing = {
  outExpo: [0.215, 0.61, 0.355, 1] as const,
  inOutExpo: [0.645, 0.045, 0.355, 1] as const,
  outQuint: [0.23, 1, 0.32, 1] as const,
};

export const gsapEase = {
  entrance: "power3.out",
  transition: "power2.inOut",
};

export const durations = {
  fast: 0.35,
  base: 0.6,
  slow: 0.95,
};

export const imageVariants = {
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.2,
    },
  },
  hidden: {
    opacity: 0,
    scale: 0.2,
    y: -100,
  },
};

export const container = {
  hidden: { opacity: 1, scale: 0, y: 100 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

export const item = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

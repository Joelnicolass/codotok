import React from "react";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode | React.ReactNode[];
  style?: React.CSSProperties;
  transition?: {
    type?: "spring" | "tween" | "just" | "keyframes" | undefined;
    duration?: number | undefined;
    delay?: number | undefined;
  };
  initial?: {
    translateX?: number | undefined;
    translateY?: number | undefined;
    opacity?: number | undefined;
  };
  animate?: {
    translateX?: number | undefined;
    translateY?: number | undefined;
    opacity?: number | undefined;
  };
};

const FadeIn = ({
  children,
  initial = {
    opacity: 0,
    translateX: -100,
  },
  animate = {
    opacity: 1,
    translateX: 0,
  },
  transition = {
    type: "spring",
  },
  style,
}: Props) => {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={transition}
      style={style}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;

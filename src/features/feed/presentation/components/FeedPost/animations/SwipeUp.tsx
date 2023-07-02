import React from "react";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode | React.ReactNode[];
  hovered: boolean;
};

const SwipeUp = ({ children, hovered }: Props) => {
  return (
    <motion.div
      initial={{
        translateY: "60%",
      }}
      animate={{
        translateY: hovered ? "0%" : "60%",
      }}
      transition={{
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default SwipeUp;

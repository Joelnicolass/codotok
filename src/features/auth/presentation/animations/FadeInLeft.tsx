import React from "react";
import { motion } from "framer-motion";

type Props = {
  children?: React.ReactNode | React.ReactNode[];
};

const FadeInLeft = ({ children }: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        translateX: -20,
      }}
      animate={{
        opacity: 1,
        translateX: 0,
      }}
      transition={{
        duration: 0.4,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInLeft;

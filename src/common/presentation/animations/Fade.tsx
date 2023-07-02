import React from "react";
import { motion } from "framer-motion";

type Props = {
  children?: React.ReactNode | React.ReactNode[];
  active: boolean;
};

const Hide = ({ children, active }: Props) => {
  return (
    <motion.div
      animate={{
        opacity: active ? 0 : 1,
      }}
    >
      {children}
    </motion.div>
  );
};

export default Hide;

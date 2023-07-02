import React from "react";

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

const VerticalSlider = ({ children }: Props) => {
  return <main style={styles.container}>{children}</main>;
};

export default VerticalSlider;

const styles: Record<string, React.CSSProperties> = {
  container: {
    height: "100vh",
    position: "relative",
    overflowX: "hidden",
    overflowY: "scroll",
    scrollSnapType: "y mandatory",
  },
};

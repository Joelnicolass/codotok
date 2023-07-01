import { Avatar } from "@nextui-org/react";
import React from "react";
import AvatarWithName from "../AvatarWithName/AvatarWithName";

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

const VerticalSlider = ({ children }: Props) => {
  return (
    <main style={styles.container}>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 1,
          padding: "1rem",
        }}
      >
        <AvatarWithName
          name="John Doe"
          image={`https://i.pravatar.cc/150?img=${Math.floor(
            Math.random() * 100
          )}`}
        />
      </div>
      {children}
    </main>
  );
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

import React from "react";
import AvatarWithName from "../AvatarWithName/AvatarWithName";

import { useAppSelector } from "../../hooks/useRedux";
import Hide from "../../animations/Fade";
import InmersionModeAction from "../InmersionModeAction/InmersionModeAction";

const Nav = () => {
  const inmersionMode = useAppSelector((state) => state.modes.inmersion);

  return (
    <nav style={styles.nav}>
      <Hide active={inmersionMode}>
        <AvatarWithName
          key="avatar"
          name="John Doe"
          image={`https://i.pravatar.cc/150?img=${Math.floor(
            Math.random() * 100
          )}`}
        />
      </Hide>
      <InmersionModeAction />
    </nav>
  );
};

export default Nav;

const styles: Record<string, React.CSSProperties> = {
  nav: {
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 1,
    padding: "1rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "80px",
  },
};

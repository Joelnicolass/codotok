import React, { useRef } from "react";
import AvatarWithName from "../AvatarWithName/AvatarWithName";

import { useAppSelector } from "../../hooks/useRedux";
import Hide from "../../animations/Fade";
import InmersionModeAction from "../InmersionModeAction/InmersionModeAction";
import { Dropdown, Text, Grid, Avatar, User, Spacer } from "@nextui-org/react";
import { FaDoorOpen } from "react-icons/fa";

const Nav = () => {
  const inmersionMode = useAppSelector((state) => state.modes.inmersion);

  const user = useAppSelector((state) => state.auth.user);

  return (
    <nav style={styles.nav}>
      <Hide active={inmersionMode}>
        <Dropdown placement="bottom-left">
          <Dropdown.Trigger>
            <User
              bordered
              as="button"
              size="lg"
              color="gradient"
              name={user?.name || "Invitado"}
              description={user?.email || ""}
              src={user?.avatar || ""}
              text={user?.name
                ?.split(" ")
                .map((n) => n[0].toUpperCase())
                .join("")}
            />
          </Dropdown.Trigger>
          <Dropdown.Menu
            aria-label="Avatar Actions"
            css={{
              bgBlur: "10px",
              backdropFilter: "blur(10px)",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0)",
              background: "rgba(255, 255, 255, 0)",
            }}
          >
            <Dropdown.Item key="profile" css={{ height: "$18" }}>
              <Text b color="inherit" css={{ d: "flex" }}>
                Ir al Perfil
              </Text>
            </Dropdown.Item>
            <Dropdown.Item key="logout" color="default" withDivider>
              <Text b>Cerrar Sesión</Text>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
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

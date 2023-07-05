import React from "react";

import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import Hide from "../../animations/Fade";
import { Dropdown, Text, User, Spacer, Button } from "@nextui-org/react";
import { FaSignOutAlt, FaUser } from "react-icons/fa";
import { logout } from "../../providers/redux/slices/auth/auth.thunks";
import { useNavigate } from "react-router-dom";
import { getInitials } from "../../../utils/string.utils";

const Nav = () => {
  const inmersionMode = useAppSelector((state) => state.modes.inmersion);

  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

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
              text={getInitials(user?.name || "") || ""}
            />
          </Dropdown.Trigger>
          <Dropdown.Menu aria-label="Avatar Actions">
            <Dropdown.Item>
              <Button
                css={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  width: "100%",
                  background: "transparent",
                }}
                onClick={() => {
                  navigate("/profile");
                }}
              >
                <FaUser />
                <Spacer inline x={0.5} />
                <Text>Perfil</Text>
              </Button>
            </Dropdown.Item>
            <Dropdown.Item withDivider>
              <Button
                css={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  width: "100%",
                  background: "transparent",
                }}
                onClick={() => {
                  dispatch(logout());
                }}
              >
                <FaSignOutAlt />
                <Spacer inline x={0.5} />
                <Text>Cerrar sesión</Text>
              </Button>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Hide>
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

import React from "react";
import bg_01 from "../../../../assets/bg_01.webp";

import {
  Button,
  CSS,
  Card,
  Image,
  Input,
  Spacer,
  Text,
} from "@nextui-org/react";
import Logo from "../../../../common/presentation/components/Logo/Logo";
import SignUpForm from "../components/SignUpForm/SignUpForm";
import Version from "../../../../common/presentation/components/Version/Version";
import useAuthView from "./useAuthView";
import SignInForm from "../components/SignInForm/SignInForm";
import { motion } from "framer-motion";
import FadeInLeft from "../animations/FadeInLeft";

const AuthView = () => {
  const { toggleView, view } = useAuthView();

  return (
    <div style={styles.container as React.CSSProperties}>
      <Card css={styles.card as CSS}>
        <Card.Header css={styles.cardHeader as CSS}>
          <Logo />
        </Card.Header>
        <Card.Body>
          {view === "SIGNIN" ? (
            <FadeInLeft key={view}>
              <SignInForm />
            </FadeInLeft>
          ) : (
            <FadeInLeft key={view}>
              <SignUpForm />
            </FadeInLeft>
          )}

          <Spacer y={1} />

          <Button color="secondary">
            <Image
              src={"https://img.icons8.com/color/48/000000/google-logo.png"}
              width={30}
            />
            <Text>Google</Text>
          </Button>
        </Card.Body>
        <Card.Footer>
          <Text onClick={toggleView}>
            {view === "SIGNIN" ? "No tenes cuenta?" : "Ya tenes cuenta?"}
          </Text>
        </Card.Footer>
      </Card>
      <Version />
    </div>
  );
};

export default AuthView;

const styles: Record<string, React.CSSProperties | CSS> = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    flexDirection: "column",
    backgroundImage: `url(${bg_01})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  card: {
    backdropFilter: "blur(5px)",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    width: "100%",
    maxWidth: "400px",
    display: "flex",
    flexDirection: "column",
    maxHeight: "500px",
  },
  cardHeader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

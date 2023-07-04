import React from "react";
import bg_01 from "../../../../assets/bg_01.webp";
import { CSS, Card, Spacer, Text } from "@nextui-org/react";
import Logo from "../../../../common/presentation/components/Logo/Logo";
import Version from "../../../../common/presentation/components/Version/Version";
import useAuthView from "../hooks/useAuthView";
import SignInForm from "../components/SignInForm/SignInForm";
import SignUpForm from "../components/SignUpForm/SignUpForm";
import FadeIn from "../../../../common/presentation/animations/FadeIn";
import LoginWithGoogle from "../../../../common/presentation/components/LoginWithGoogle/LoginWithGoogle";

const AuthView = () => {
  const { toggleView, view } = useAuthView();

  return (
    <main style={styles.container as React.CSSProperties}>
      <FadeIn key={view} style={styles.animContainer as React.CSSProperties}>
        <Card css={styles.card as CSS}>
          <Card.Header css={styles.cardHeader as CSS}>
            <Logo />
          </Card.Header>
          <Card.Body>
            {view === "SIGNIN" ? <SignInForm /> : <SignUpForm />}
            <Spacer y={1} />
            <LoginWithGoogle />
          </Card.Body>
          <Card.Footer>
            <Text onClick={toggleView}>
              {view === "SIGNIN" ? "No tenes cuenta?" : "Ya tenes cuenta?"}
            </Text>
          </Card.Footer>
        </Card>
      </FadeIn>
      <Version />
    </main>
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
  animContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
};

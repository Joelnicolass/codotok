import bg_01 from "../../../../assets/bg_01.webp";
import logo from "../../../../assets/logo.png";
import { Button, Card, Image, Input, Spacer, Text } from "@nextui-org/react";
import Logo from "../../../../common/presentation/components/Logo/Logo";

const AuthView = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
        backgroundImage: `url(${bg_01})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Card
        css={{
          backdropFilter: "blur(5px)",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          width: "100%",
          maxWidth: "400px",
          display: "flex",
          flexDirection: "column",
          maxHeight: "500px",
        }}
      >
        <Card.Header
          css={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Logo />
        </Card.Header>
        <Card.Body>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <Input aria-label="Username" placeholder="Username" />
            <Spacer y={0.5} />
            <Input
              aria-label="Password"
              placeholder="Password"
              type="password"
            />
            <Spacer y={0.5} />
            <Button>
              <Text>Sign In</Text>
            </Button>
          </form>

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
          <Text>Ya tienes cuenta?</Text>
        </Card.Footer>
      </Card>
      <Text>
        Version: <b>{import.meta.env.VITE_APP_VERSION}</b>
      </Text>
    </div>
  );
};

export default AuthView;

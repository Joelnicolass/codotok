import { Button, Input, Spacer, Text } from "@nextui-org/react";

const SignUpForm = () => {
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <Input aria-label="Username" placeholder="Username" />
      <Spacer y={0.5} />
      <Input aria-label="Password" placeholder="Password" type="password" />
      <Spacer y={0.5} />
      <Button>
        <Text>Sign Up</Text>
      </Button>
    </form>
  );
};

export default SignUpForm;

import { Button, Image, Text } from "@nextui-org/react";

const LoginWithGoogle = () => {
  return (
    <Button color="secondary">
      <Image
        src={"https://img.icons8.com/color/48/000000/google-logo.png"}
        width={30}
      />
      <Text>Google</Text>
    </Button>
  );
};

export default LoginWithGoogle;

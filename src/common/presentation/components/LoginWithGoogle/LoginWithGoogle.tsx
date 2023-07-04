import { Button, Image, Text } from "@nextui-org/react";
import useLoginWithGoogle from "./hooks/useLoginWithGoogle";

const LoginWithGoogle = () => {
  const { auth, trigger } = useLoginWithGoogle();

  return (
    <Button color="secondary" onPress={trigger}>
      <Image
        src={"https://img.icons8.com/color/48/000000/google-logo.png"}
        width={30}
      />
      <Text>Google</Text>
    </Button>
  );
};

export default LoginWithGoogle;

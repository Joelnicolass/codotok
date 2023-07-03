import { Text } from "@nextui-org/react";

const Version = () => {
  return (
    <Text>
      <b>{import.meta.env.VITE_APP_VERSION}</b>
    </Text>
  );
};

export default Version;

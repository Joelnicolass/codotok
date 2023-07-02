import { Box } from "../Box/Box";
import { Avatar, Spacer, Text } from "@nextui-org/react";

type Props = {
  image?: string;
  name?: string;
};

const AvatarWithName = ({ image, name }: Props) => {
  const initials = name
    ?.split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <Box
      css={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Avatar size="lg" bordered src={image} color="gradient" text={initials} />
      <Spacer x={0.5} />
      <Text h5>{name}</Text>
    </Box>
  );
};

export default AvatarWithName;

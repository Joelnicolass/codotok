import { Divider, Text } from "@nextui-org/react";
import React from "react";
import { useFeedContext } from "../providers/FeedProvider";

const TitleAndDescription = () => {
  const { post } = useFeedContext();

  return (
    <>
      <Text h5>{post.title}</Text>
      <Divider />
      <Text>{post.description}</Text>
    </>
  );
};

export default TitleAndDescription;

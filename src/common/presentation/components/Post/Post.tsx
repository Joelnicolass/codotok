import React from "react";
import BackgroundImage from "./components/BackgroundImage";
import Content from "./components/Content";
import { Text } from "@nextui-org/react";

type Props = {
  children?: React.ReactNode | React.ReactNode[];
};

const Post = ({ children }: Props) => {
  return <section style={styles.container}>{children}</section>;
};

Post.BackgroundImage = BackgroundImage;
Post.Content = Content;

export default Post;

const styles: Record<string, React.CSSProperties> = {
  container: {
    position: "relative",
    height: "100vh",
    scrollSnapAlign: "start",
    overflow: "hidden",
  },
};

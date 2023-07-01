import React from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

type Props = {
  children?: React.ReactNode | React.ReactNode[];
};

const Content = ({ children }: Props) => {
  return <div style={styles.container}>{children}</div>;
};

Content.Header = Header;
Content.Body = Body;
Content.Footer = Footer;

export default Content;

const styles: Record<string, React.CSSProperties> = {
  container: {
    position: "absolute",
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
};

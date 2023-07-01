import React from "react";
import { Box } from "../../Box/Box";
import { CSS } from "@nextui-org/react";

type Props = {
  children?: React.ReactNode | React.ReactNode[];
  css?: CSS;
};

const Header = ({ children, ...props }: Props) => {
  return <Box {...props}>{children}</Box>;
};

export default Header;

import { CSS, Image } from "@nextui-org/react";
import React from "react";
import logo from "../../../../assets/logo.png";

type Props = {
  width?: number;
  css?: CSS;
  secondary?: boolean;
};

const Logo = ({ width = 300, css, secondary }: Props) => {
  return (
    <Image
      css={{
        filter: secondary
          ? "saturate(3) hue-rotate(-15deg)"
          : "saturate(10) hue-rotate(-100deg)",
        ...css,
      }}
      src={logo}
      width={width}
    />
  );
};

export default Logo;

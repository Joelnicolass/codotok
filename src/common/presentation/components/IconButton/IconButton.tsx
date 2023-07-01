import React from "react";
import { Box } from "../Box/Box";
import { IconType } from "react-icons/lib/esm/iconBase";
import { CSS } from "@nextui-org/react";

type Props = {
  Icon: IconType;
  css?: CSS;
  onClick?: () => void;
};

const IconButton = ({ Icon, onClick, ...props }: Props) => {
  return (
    <Box
      css={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backdropFilter: "blur(10px)",
        borderRadius: "50%",
        height: "30px",
        width: "30px",
        padding: "5px",
      }}
      onClick={onClick}
      {...props}
    >
      {<Icon />}
    </Box>
  );
};

export default IconButton;

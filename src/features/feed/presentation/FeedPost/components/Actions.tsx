import React from "react";
import { FaCoffee, FaHeart } from "react-icons/fa";
import IconButton from "../../../../../common/presentation/components/IconButton/IconButton";
import { Spacer } from "@nextui-org/react";
import { Box } from "../../../../../common/presentation/components/Box/Box";

const Actions = () => {
  return (
    <Box
      css={{
        display: "flex",
      }}
    >
      <IconButton Icon={FaHeart} />
      <Spacer x={1} />
      <IconButton Icon={FaCoffee} />
    </Box>
  );
};

export default Actions;

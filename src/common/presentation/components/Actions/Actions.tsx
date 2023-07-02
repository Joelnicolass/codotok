import { CSS } from "@nextui-org/react";
import { Box } from "../Box/Box";
import { Action } from "./components/Action";

type Props = {
  children?: React.ReactNode | React.ReactNode[];
  css?: CSS;
};

const Actions = ({ children, css }: Props) => {
  return (
    <Box
      css={{
        display: "flex",
        ...css,
      }}
    >
      {children}
    </Box>
  );
};

Actions.Action = Action;

export default Actions;

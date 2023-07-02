import { CSS } from "@nextui-org/react";
import { Box } from "../../Box/Box";

interface PropsAction {
  children?: React.ReactNode | React.ReactNode[];
  onClick?: () => void;
  css?: CSS;
}

export const Action = ({ children, onClick, css }: PropsAction) => {
  return (
    <Box
      css={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "$2",
        cursor: "pointer",
        ...css,
      }}
      onClick={onClick}
    >
      {children}
    </Box>
  );
};

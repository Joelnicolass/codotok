import { NextUIProvider } from "@nextui-org/react";
import { darkTheme } from "../themes/dark.theme";

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

const RootProvider = ({ children }: Props) => {
  return <NextUIProvider theme={darkTheme}>{children}</NextUIProvider>;
};

export default RootProvider;

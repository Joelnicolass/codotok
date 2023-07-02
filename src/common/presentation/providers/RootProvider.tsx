import { NextUIProvider } from "@nextui-org/react";
import { darkTheme } from "../themes/dark.theme";
import { Provider } from "react-redux";
import { store } from "./redux/store";

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

const RootProvider = ({ children }: Props) => {
  return (
    <Provider store={store}>
      <NextUIProvider theme={darkTheme}>{children}</NextUIProvider>
    </Provider>
  );
};

export default RootProvider;

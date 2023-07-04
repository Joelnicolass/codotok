import { NextUIProvider } from "@nextui-org/react";
import { darkTheme } from "../themes/dark.theme";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import AuthProvider from "./AuthProvider";

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

const RootProvider = ({ children }: Props) => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <NextUIProvider theme={darkTheme}>{children}</NextUIProvider>
      </AuthProvider>
    </Provider>
  );
};

export default RootProvider;

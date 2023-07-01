import RootProvider from "./common/presentation/providers/RootProvider";
import { RouterProvider } from "react-router-dom";
import router from "./common/presentation/routes";

const App = () => {
  return (
    <RootProvider>
      <RouterProvider router={router} />
    </RootProvider>
  );
};

export default App;

import RootProvider from "./common/presentation/providers/RootProvider";
import { RouterProvider } from "react-router-dom";
import router from "./common/presentation/routes";
import ProfileView from "./features/profile/presentation/views/ProfileView";
import LoggedTest from "./test/components/LoggedTest";

const App = () => {
  return (
    <RootProvider>
      {
        /* <RouterProvider router={router} /> */
        <LoggedTest Component={ProfileView} />
      }
    </RootProvider>
  );
};

export default App;

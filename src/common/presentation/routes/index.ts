import { createBrowserRouter } from "react-router-dom";
import FeedView from "../../../features/feed/presentation/views/FeedView";

const appRouter = createBrowserRouter([
  {
    path: "/",
    Component: FeedView,
  },
]);

export default appRouter;

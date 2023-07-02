import { createBrowserRouter } from "react-router-dom";

const appRouter = createBrowserRouter([
  {
    path: "/",
    async lazy() {
      const { default: LoggedLayout } = await import(
        "../components/Layouts/LoggedLayout.tsx"
      );
      const { default: FeedView } = await import(
        "../../../features/feed/presentation/views/FeedView.tsx"
      );

      return {
        Component: () =>
          LoggedLayout({
            children: FeedView(),
          }),
      };
    },
  },
]);

export default appRouter;

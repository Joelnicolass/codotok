import { createBrowserRouter } from "react-router-dom";

const appRouter = createBrowserRouter([
  {
    path: "/",
    async lazy() {
      const { default: PrivateRoute } = await import(
        "../../../features/auth/presentation/components/PrivateRoutes/PrivateRoute.tsx"
      );

      const { default: LoggedLayout } = await import(
        "../components/IconButton/Layouts/LoggedLayout.tsx"
      );
      const { default: FeedView } = await import(
        "../../../features/feed/presentation/views/FeedView.tsx"
      );

      return {
        Component: () =>
          PrivateRoute({
            children: LoggedLayout({
              children: FeedView(),
            }),
          }),
      };
    },
  },
  {
    path: "/auth",
    async lazy() {
      const { default: PublicRoute } = await import(
        "../../../features/auth/presentation/components/PublicRoutes/PublicRoute.tsx"
      );

      const { default: AuthView } = await import(
        "../../../features/auth/presentation/views/AuthView.tsx"
      );

      return {
        Component: () => PublicRoute({ children: AuthView() }),
      };
    },
  },
]);

export default appRouter;

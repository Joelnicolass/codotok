import React, { useEffect } from "react";
import LoggedLayout from "../../common/presentation/components/IconButton/Layouts/LoggedLayout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAppDispatch } from "../../common/presentation/hooks/useRedux";
import { User } from "../../common/domain/entities/User.entity";
import { login } from "../../common/presentation/providers/redux/slices/auth/auth.thunks";

type Props = {
  Component: React.FC;
};

const createRouter = (Component: React.FC) => {
  return createBrowserRouter([
    {
      path: "/",
      element: <Component />,
    },
  ]);
};

function LoggedTest({ Component }: Props) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const user: User = {
      id: "1",
      name: "Mock User",
      email: "mockuser@mock.com",
      avatar: `https://i.pravatar.cc/150?u=${Math.random()}`,
      createdAt: new Date(),
    };

    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE4OTM0NzA0NjEwMDB9.IMP0lVd_h1XFRXYHVBcPMxzFkuH3iGmmm00IFsNguSM";

    const auth = {
      token,
      user,
    };

    dispatch(login(auth));
  }, []);

  return <RouterProvider router={createRouter(Component)} />;
}

export default LoggedTest;

import React from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../common/presentation/hooks/useRedux";
import { useJwt } from "react-jwt";
import { Navigate } from "react-router-dom";
import {
  keyAuth,
  logout,
} from "../../../../../common/presentation/providers/redux/slices/auth/auth.thunks";

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

const PrivateRoute = ({ children }: Props) => {
  const dispatch = useAppDispatch();
  const authState = useAppSelector((state) => state.auth);

  const { isExpired } = useJwt(authState.token || "");

  if (isExpired || !authState.token || !authState.user) {
    //dispatch(logout());

    return <Navigate to="/auth" />;
  }

  return <>{children}</>;
};

export default PrivateRoute;

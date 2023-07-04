import React from "react";
import { useAppSelector } from "../../../../../common/presentation/hooks/useRedux";
import { useJwt } from "react-jwt";
import { Navigate } from "react-router-dom";

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

const PrivateRoute = ({ children }: Props) => {
  const authState = useAppSelector((state) => state.auth);

  const { isExpired } = useJwt(authState.token || "");

  if (isExpired || !authState.token || !authState.user) {
    return <Navigate to="/auth" />;
  }

  return <>{children}</>;
};

export default PrivateRoute;

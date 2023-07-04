import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import { getAuth, logout } from "./redux/slices/auth/auth.thunks";
import { useJwt } from "react-jwt";

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

const AuthProvider = ({ children }: Props) => {
  const dispatch = useAppDispatch();
  const authState = useAppSelector((state) => state.auth);
  const { isExpired } = useJwt(authState.token || "");

  useEffect(() => {
    dispatch(getAuth());
  }, []);

  return <>{children}</>;
};

export default AuthProvider;

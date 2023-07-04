import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import { getAuth } from "./redux/slices/auth/auth.thunks";

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

const AuthProvider = ({ children }: Props) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAuth());
  }, []);

  return <>{children}</>;
};

export default AuthProvider;

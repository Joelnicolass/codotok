import React from "react";
import Nav from "../../Nav/Nav";

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

const LoggedLayout = ({ children }: Props) => {
  return (
    <div>
      <Nav />
      <>{children}</>
    </div>
  );
};

export default LoggedLayout;

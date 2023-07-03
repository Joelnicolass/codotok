import React, { useState } from "react";

type AuthView = "SIGNIN" | "SIGNUP";

const useAuthView = () => {
  const [view, setView] = useState<AuthView>("SIGNIN");

  const toggleView = () => {
    setView((prevView) => (prevView === "SIGNIN" ? "SIGNUP" : "SIGNIN"));
  };

  return { view, toggleView };
};

export default useAuthView;

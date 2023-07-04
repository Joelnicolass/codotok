import React from "react";
import { useNavigate } from "react-router-dom";

const ProfileView = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <button onClick={() => navigate("/")}>IR AL FEED</button>
    </div>
  );
};

export default ProfileView;

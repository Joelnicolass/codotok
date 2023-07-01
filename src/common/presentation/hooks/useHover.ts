import React, { useState } from "react";

const useHover = () => {
  const [hovered, setHovered] = useState(false);

  const onMouseEnter = () => setHovered(true);

  const onMouseLeave = () => setHovered(false);

  return {
    hovered,
    onMouseEnter,
    onMouseLeave,
  };
};

export default useHover;

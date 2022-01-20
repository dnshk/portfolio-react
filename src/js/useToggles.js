import { useState } from "react";

export const useToggles = (initialToggles) => {
  const [toggles, setToggles] = useState(initialToggles);

  const handleToggles = (name, value) => {
    setToggles({ ...toggles, [name]: value });
  };

  return {
    toggles,
    handleToggles
  };
};
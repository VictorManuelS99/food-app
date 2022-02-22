import { useLocation } from "react-router-dom";

export const useMatchLocation = (path: string) => {
  const location = useLocation();

  return path === location.pathname ? { isSelected: true } : {};
};

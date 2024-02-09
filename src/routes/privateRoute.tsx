import { useEffect } from "react";
import Error from "../pages/404Page";
import { privatePath } from "../utils/privatePath";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

interface TypeCheck {
  path: string;
  Element: React.ComponentType<any>;
}

export const PrivatePages = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />

      {privatePath.map(({ path, Element }: TypeCheck, index) => (
        <Route key={index} path={path} element={<Element />} />
      ))}

      <Route path="*" element={<Error />} />
    </Routes>
  );
};

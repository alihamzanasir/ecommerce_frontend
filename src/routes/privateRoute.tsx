import Error from "../pages/404Page";
import { privatePath } from "../utils/privatePath";
import { Routes, Route, Navigate } from "react-router-dom";
import { ScrollToTopOnRouteChange } from "../utils";

interface TypeCheck {
  path: string;
  Element: React.ComponentType<any>;
}

export const PrivatePages = () => {
  return (
    <>
      <ScrollToTopOnRouteChange />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />

        {privatePath.map(({ path, Element }: TypeCheck, index) => (
          <Route key={index} path={path} element={<Element />} />
        ))}

        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

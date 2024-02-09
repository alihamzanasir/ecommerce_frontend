import { Routes, Route, Navigate } from "react-router-dom";
import { publicPath } from "../utils/publicPath";
import Error from "../pages/404Page";

interface TypeCheck {
  path: string;
  Element: React.ComponentType<any>;
}
const PublicPages = () => {
  return (
    <Routes>
       <Route path="/" element={<Navigate to="/home" />} />
      {publicPath.map(({ path, Element }: TypeCheck, index) => (
        <Route key={index} path={path} element={<Element />} />
      ))}
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default PublicPages;

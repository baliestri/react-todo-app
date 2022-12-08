import { HashRouter, Navigate, Routes, Route } from "react-router-dom";

const Router = ({ children }) => (
  <HashRouter>
    <Routes>
      {children}
      <Route path="*" element={<Navigate to="/todos" />} />
    </Routes>
  </HashRouter>
);

Router.Page = Route;

export default Router;

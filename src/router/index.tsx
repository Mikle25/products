import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Products from "../pages/Products";
import { FC, ReactNode } from "react";
import CurrentRate from "../pages/CurrentRate";

export const routers = [
  {
    name: "Products",
    path: "/products",
    page: <Products />,
  },
  {
    name: "Current rate",
    path: "/current-rate",
    page: <CurrentRate />,
  },
];

export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/products" />} />
      {routers.map((elem) => (
        <Route key={elem.name} path={elem.path} element={elem.page} />
      ))}
    </Routes>
  );
};

const Router: FC<{ children: ReactNode }> = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

export default Router;

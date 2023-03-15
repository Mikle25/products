import Statistics from "../pages/Statistics";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Products from "../pages/Products";
import { FC, ReactNode } from "react";

export const routers = [
  {
    name: "Products",
    path: "/products",
    page: <Products />,
  },
  {
    name: "Statistics",
    path: "/statistics",
    page: <Statistics />,
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

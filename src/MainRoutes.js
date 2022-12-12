import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../src/components/Home";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    {
      link: "/",
      element: <Home />,
      id: 1,
    },
  ];
  return (
    <Routes>
      {PUBLIC_ROUTES.map((el) => (
        <Route path={el.link} key={el.id} element={el.element} />
      ))}
    </Routes>
  );
};

export default MainRoutes;

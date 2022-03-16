import React from "react";
import { Route, Routes } from "react-router-dom";
import AddProduct from "./components/Product/AddProduct/AddProduct";
import AdminPage from "./components/pages/AdminPage";
import AllProduct from "./components/pages/AllProductPage";
import AuthPage from "./components/pages/AuthPage";
import EditPage from "./components/pages/EditPage";
import HomePage from "./components/pages/HomePage";
import MyProductPage from "./components/pages/MyProductPage";
import NotFount from "./components/pages/NotFount";
import AllProductPage from "./components/pages/AllProductPage";
import Comment from "./components/Comment/Comment";
import Cart from "./components/Cart/Cart";
import CartPage from "./components/pages/CartPage";
import LikePage from "./components/pages/LikePage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    {
      link: "/",
      element: <HomePage />,
      id: 1,
    },
    {
      link: "/product",
      element: <AllProductPage />,
      id: 2,
    },
    {
      link: "/myproduct",
      element: <MyProductPage />,
      id: 3,
    },
    {
      link: "*",
      element: <NotFount />,
      id: 4,
    },

    {
      link: "/admin",
      element: <AdminPage />,
      id: 5,
    },
    {
      link: "edit/:id",
      element: <EditPage />,
      id: 6,
    },
    {
      link: "/auth",
      element: <AuthPage />,
    },
    {
      link: "/addproduct",
      element: <AddProduct />,
      id: 7,
    },
    {
      link: "/edit/:id",
      element: <EditPage />,
      id: 8,
    },
    {
      link: "/allproduct",
      element: <AllProduct />,
      id: 9,
    },
    {
      link: "/comment/:id",
      element: <Comment />,
      id: 10,
    },
    {
      link: "/cart",
      element: <CartPage />,
      id: 11,
    },
    {
      link: "/like",
      element: <LikePage />,
      id: 12,
    },
  ];
  return (
    <div>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} />
        ))}
      </Routes>
    </div>
  );
};

export default MainRoutes;

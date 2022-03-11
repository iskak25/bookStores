import React from "react";
import { useAuth } from "../../context/AuthContext";
import Login from "../Auth/Login";
import HomePage from "./HomePage";

const AuthPage = () => {
  const { user } = useAuth();
  return <div>{user ? <HomePage /> : <Login />}</div>;
};

export default AuthPage;

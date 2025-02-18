import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage, RegisterPage } from "../pages";

export const AuthRoute = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage></LoginPage>}></Route>
      <Route path="register" element={<RegisterPage></RegisterPage>}></Route>
      <Route path="/*" element={<Navigate to="auth/login"></Navigate>}></Route>
    </Routes>
  );
};

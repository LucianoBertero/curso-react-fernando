import { Navigate, Route, Routes } from "react-router";

import { MarvelPage } from "../heroes/pages/MarvelPage";
import { DcPage } from "../heroes/pages/DcPage";
import { LoginPage } from "../auth/pages/LoginPage";
import { Navbar } from "../ui";

export const AppRouter = () => {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/marvel" element={<MarvelPage></MarvelPage>}></Route>
        <Route path="/dc" element={<DcPage></DcPage>}></Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/*" element={<Navigate to="/marvel"></Navigate>}></Route>
      </Routes>
    </>
  );
};

import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoute } from "../auth/routes/AuthRoute";

import { JournalRoutes } from "../journal/routes/JournalRoutes";

import { CheckingAuth } from "../ui";

import { useCheckAuth } from "../hooks";

export const AppRouter = () => {
  const { status } = useCheckAuth();

  console.log(status);
  if (status === "checking") {
    return <CheckingAuth></CheckingAuth>;
  }

  return (
    <Routes>
      {status === "authenticated" ? (
        <Route path="/*" element={<JournalRoutes></JournalRoutes>}></Route>
      ) : (
        <Route path="/auth/*" element={<AuthRoute></AuthRoute>}></Route>
      )}
      <Route path="/*" element=<Navigate to="/auth/login"></Navigate>></Route>

      {/* Login y registro */}
      {/* <Route path="/auth/*" element={<AuthRoute></AuthRoute>}></Route> */}
      {/* Journal app */}
      {/* <Route path="/*" element={<JournalRoutes></JournalRoutes>}></Route> */}
    </Routes>
  );
};

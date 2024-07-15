import { Route, Routes } from "react-router-dom";
import { AuthRoute } from "../auth/routes/AuthRoute";
import { JournalPage } from "../journal/pages/JournalPage";
import { JournalRoutes } from "../journal/routes/JournalRoutes";

export const AppRouter = () => {
  return (
    <Routes>
      {/* Login y registro */}
      <Route path="/auth/*" element={<AuthRoute></AuthRoute>}></Route>
      {/* Journal app */}
      <Route path="/*" element={<JournalRoutes></JournalRoutes>}></Route>
    </Routes>
  );
};

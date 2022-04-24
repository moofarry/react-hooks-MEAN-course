import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginScreen } from "../login/LoginScreen";
import { DashBoardRoutes } from "./DashBoardRoutes";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/*" element={<DashBoardRoutes />} />
      </Routes>
    </BrowserRouter>
  );
};

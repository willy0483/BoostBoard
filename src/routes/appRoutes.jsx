import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

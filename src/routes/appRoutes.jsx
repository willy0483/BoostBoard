import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/homePage/homePage";
import { WeatherPage } from "../pages/weatherPage/weatherPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/weather" element={<WeatherPage />} />
    </Routes>
  );
};

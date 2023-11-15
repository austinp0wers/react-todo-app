import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import TestPage from "../pages/TestPage";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/test" element={<TestPage />} />
      <Route path="/work" element={<LandingPage />} />
      <Route path="/test" element={<TestPage />} />
    </Routes>
  );
};

export default MainRouter;

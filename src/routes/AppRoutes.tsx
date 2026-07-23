import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import MainLayout from "../layout/Layout";


function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout/>}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>

    </Routes>
  );
}

export default AppRoutes;
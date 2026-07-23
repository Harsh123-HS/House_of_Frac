import {  Outlet } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import FooterTwo from "../components/common/FooterTwo";

function MainLayout() {
  return (
    <div>
      <Header/>
      <main>
        <Outlet />
      </main>

      <Footer/>
      <FooterTwo/>
    </div>
  );
}

export default MainLayout;
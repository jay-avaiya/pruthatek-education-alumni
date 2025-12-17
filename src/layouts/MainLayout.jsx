import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./main_component/Navbar";
import Footer from "./main_component/Footer";
import Questions from "./main_component/Questions";

export default function MainLayout() {
  return (
    <div className="flex flex-col gap-28">
      <Navbar />
      <Outlet />
      <Questions />
      <Footer />
    </div>
  );
}

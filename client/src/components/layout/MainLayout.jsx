import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import AuthModal from "../common/AuthModal";
import Footer from "../common/Footer";
import GlobalLoading from "../common/GlobalLoading";
import Topbar from "../common/Topbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { toast } from "react-toastify";

const MainLayout = () => {
  return (
    <>
      {/* global loading */}
      <GlobalLoading />
      {/* global loading */}
      {/* login modal */}\
      <AuthModal />
      {/* login modal */}
      <Box diaplay="flex" minHeight="100vh">
        {/* header */}
        <Topbar />
        {/* header */}

        {/* main */}
        <Box component="main" flexGrow={1} overfloe="hidden" minHeight="100vh">
          <Outlet />
        </Box>
        {/* main */}

        {/* footer */}
        <Footer />
        {/* footer */}
      </Box>
    </>
  );
};

export default MainLayout;

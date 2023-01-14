import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from "../common/Footer";
import GlobalLoading from "../common/GlobalLoading";
import Topbar from "../common/Topbar";

const MainLayout = () => {
  return (
    <>
      {/* global loading */}
      <GlobalLoading />
      {/* global loading */}

      {/* login modal */}
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

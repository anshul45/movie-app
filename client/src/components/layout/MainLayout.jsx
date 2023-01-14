import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import GlobalLoading from "../common/GlobalLoading";

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
        {/* header */}

        {/* main */}
        <Box component="main" flexGrow={1} overfloe="hidden" minHeight="100vh">
          <Outlet />
        </Box>
        {/* main */}

        {/* footer */}
        {/* footer */}
      </Box>
    </>
  );
};

export default MainLayout;

import { Box } from "@mui/material";

import { SideBar, NavBar } from "../components";

const drawerWidth = 240;

export const JournayLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <NavBar drawerWidth={drawerWidth}></NavBar>
      <SideBar drawerWidth={drawerWidth}></SideBar>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {children}
      </Box>
    </Box>
  );
};

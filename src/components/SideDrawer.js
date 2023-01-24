import React from "react";
import { Drawer } from "@mui/material";
import DrawerContent from "./DrawerContent.js";
export default function SideDrawer(props) {
  const { mobileOpen, handleDrawerToggle, navItems, drawerWidth, container } =
    props;
  return (
    <Drawer
      className="drawerrr"
      container={container}
      variant="temporary"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: drawerWidth,
        },
      }}
    >
      <DrawerContent
        handleDrawerToggle={handleDrawerToggle}
        navItems={navItems}
      />
    </Drawer>
  );
}

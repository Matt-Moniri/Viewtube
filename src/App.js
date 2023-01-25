import * as React from "react";
import PropTypes from "prop-types";
import ApplicationBar from "./components/ApplicationBar";
import SideDrawer from "./components/SideDrawer";
import { Grid, Box, Toolbar, CssBaseline } from "@material-ui/core";
import VideosList from "./components/VideosList";
//

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

function DrawerAppBar(props) {
  const { window } = props;
  const [openSideDrawer, setOpenSideDrawer] = React.useState(false);

  const handleDrawerToggle = () => {
    setOpenSideDrawer((prevState) => !prevState);
  };

  // const drawer = (
  //   <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
  //     <Typography variant="h6" sx={{ my: 2 }}>
  //       MUI
  //     </Typography>
  //     <Divider />
  //     <List>
  //       {navItems.map((item) => (
  //         <ListItem key={item} disablePadding>
  //           <ListItemButton sx={{ textAlign: "center" }}>
  //             <ListItemText primary={item} />
  //           </ListItemButton>
  //         </ListItem>
  //       ))}
  //     </List>
  //   </Box>
  // );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <ApplicationBar handleDrawerToggle={handleDrawerToggle} />

      <Box component="nav">
        <SideDrawer
          navItems={navItems}
          handleDrawerToggle={handleDrawerToggle}
          openSideDrawer={openSideDrawer}
          container={container}
        />
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Grid container style={{ justifyContent: "center" }}>
          <VideosList />
        </Grid>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;

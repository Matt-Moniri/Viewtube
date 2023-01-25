import {
  List,
  ListItem,
  ListItemButton,
  Typography,
  Box,
  Drawer,
  ListItemText,
  Divider,
  Button,
} from "@mui/material";
const drawerWidth = 240;

const SideDrawer = (props) => {
  const { navItems, handleDrawerToggle, openSideDrawer, container } = props;
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        <ListItem key={1} disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            {/* <ListItemText primary={"item"} > */}
            <Button>Side Menu button 1</Button>
            <Button>Side Menu button 2</Button>
            <Button>Side Menu button 3</Button>
          </ListItemButton>
        </ListItem>
        {/* {navItems.map((item) => (
          
        ))} */}
      </List>
    </Box>
  );
  return (
    <Drawer
      container={container}
      variant="temporary"
      open={openSideDrawer}
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
      {drawer}
    </Drawer>
  );
};
export default SideDrawer;

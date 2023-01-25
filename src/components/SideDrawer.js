import {
  List,
  ListItem,
  Typography,
  Box,
  Drawer,
  Divider,
  Button,
} from "@material-ui/core";
const drawerWidth = 240;

const SideDrawer = (props) => {
  const { navItems, handleDrawerToggle, openSideDrawer, container } = props;
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Menu
      </Typography>
      <Divider />
      <List>
        <ListItem key={1}>
          {/* <ListItemText primary={"item"} > */}
          <Button>Side Menu button 1</Button>
        </ListItem>
        <ListItem key={2}>
          {/* <ListItemText primary={"item"} > */}
          <Button>Side Menu button 2</Button>
        </ListItem>
        <ListItem key={3}>
          {/* <ListItemText primary={"item"} > */}
          <Button>Side Menu button 3</Button>
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

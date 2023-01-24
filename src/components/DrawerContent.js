import {
  Box,
  ListItem,
  Divider,
  List,
  Typography,
  ListItemButton,
  ListItemText,
} from "@mui/material";
const DrawerContent = (props) => {
  const { handleDrawerToggle, navItems } = props;
  return (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
export default DrawerContent;

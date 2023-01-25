import React, { useState } from "react";
import {
  AppBar,
  Box,
  InputBase,
  styled,
  alpha,
  IconButton,
  Toolbar,
  Typography,
  Icon,
} from "@material-ui/core";
////,MenuIcon
//import NotificationsIcon from "@mui/icons-material/Notifications";
//import PersonIcon from "@mui/icons-material/Person";
//import ContrastIcon from "@mui/icons-material/Contrast";
////import SearchIcon from "@mui/icons-material/Search";
//import SettingsIcon from "@mui/icons-material/Settings"; ////////
import FilterVideos from "./FilterVideos.js";
export default function ApplicationBar(props) {
  const { handleDrawerToggle } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const [openDrawer, setOpenDrawer] = useState(false);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  const Search = styled("div")(({ theme }) => ({
    display: "flex",
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: "5px",
    height: "100%",
    position: "absolute",
    right: 0,
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  return (
    <div>
      <AppBar component="nav">
        <Toolbar sx={{ backgroundColor: "rgb(80,80,80)" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <Icon>
              <i className="fa fa-bars" />
            </Icon>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ViewTube
          </Typography>
          <Box>
            <FilterVideos />
          </Box>

          <Search>
            <SearchIconWrapper>
              <Icon style={{ fontSize: "1rem" }}>
                <i className="fa fa-search" />
              </Icon>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box
            style={{
              position: "absolute",
              right: "5px",
            }}
          >
            <IconButton>
              <i style={{ color: "white" }} className="fa fa-bell" />
            </IconButton>
            <IconButton>
              <i style={{ color: "white" }} className="fa fa-user" />
            </IconButton>{" "}
            <IconButton>
              {" "}
              <i style={{ color: "white" }} className="fa fa-adjust" />
              {/* <ContrastIcon /> */}
            </IconButton>{" "}
            <IconButton>
              {" "}
              <i style={{ color: "white" }} className="fa fa-cog" />
              {/* <SettingsIcon /> */}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>{" "}
    </div>
  );
}

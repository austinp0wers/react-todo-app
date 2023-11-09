import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { DRAWER_WIDTH } from "../../constants/sidebar";
import { useState } from "react";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <AppBar
      position="fixed"
      sx={{
        display: { sm: "none" },
        width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
        minHeight: "40px",
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="subtitle1"
          component="div"
          sx={{ textAlign: "center" }}
        >
          {"HELLO"}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

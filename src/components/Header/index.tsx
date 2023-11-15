import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { HeaderWrapper } from "./styled";
import { mobileSidebarState, pageHeaderTitleState } from "../../atoms/index";
import { useRecoilState } from "recoil";
import { findMenuIconsByName } from "../Icons/sidebar/Icons";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useRecoilState(mobileSidebarState);
  const [headerTitle] = useRecoilState(pageHeaderTitleState);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <HeaderWrapper>
      <AppBar
        position="sticky"
        sx={{
          boxShadow: "none",
          paddingLeft: "30px",
          justifyContent: "center",
          height: "64px",
        }}
      >
        {/* <Toolbar> */}
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Typography sx={{ paddingRight: "10px" }}>
            {findMenuIconsByName(headerTitle)}
          </Typography>
          <Typography variant="h5" component="div">
            {headerTitle}
          </Typography>
        </Box>
        {/* </Toolbar> */}
      </AppBar>
    </HeaderWrapper>
  );
};

export default Header;

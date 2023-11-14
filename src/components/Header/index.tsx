import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { HeaderWrapper } from "./styled";
import { mobileSidebarState, pageHeaderTitleState } from "../../atoms/index";
import { useRecoilState } from "recoil";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useRecoilState(mobileSidebarState);
  const [headerTitle] = useRecoilState(pageHeaderTitleState);

  const handleDrawerToggle = () => {
    console.log("mobileOpen TRUEE", mobileOpen);
    setMobileOpen(!mobileOpen);
  };

  return (
    <HeaderWrapper>
      <AppBar position="sticky">
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
            {headerTitle}
          </Typography>
        </Toolbar>
      </AppBar>
    </HeaderWrapper>
  );
};

export default Header;

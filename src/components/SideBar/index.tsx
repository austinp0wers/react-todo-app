import { Box, Drawer, useMediaQuery } from "@mui/material";
import { SideBarWrapper } from "./styled";
import drawer from "./Drawer";
import { DRAWER_WIDTH } from "../../constants/sidebar";
import { useRecoilState } from "recoil";
import { mobileSidebarState } from "../../atoms";

const SideBar = () => {
  const [mobileOpen, setMobileOpen] = useRecoilState(mobileSidebarState);
  const isMobile = useMediaQuery("(max-width:600px)");

  const handleDrawerToggle = () => {
    console.log("mobileOpen", mobileOpen);
    setMobileOpen(!mobileOpen);
  };

  return (
    <SideBarWrapper>
      <Box
        component="nav"
        sx={{
          width: { sm: DRAWER_WIDTH },
          flexShrink: { sm: 0 },
        }}
        aria-label="mailbox folders"
      >
        <Drawer
          PaperProps={{
            sx: { backgroundColor: "#191A1C", color: "white" },
          }}
          variant={isMobile ? "temporary" : "permanent"}
          open={isMobile ? mobileOpen : true}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: DRAWER_WIDTH,
            },
          }}
        >
          {drawer()}
        </Drawer>
      </Box>
    </SideBarWrapper>
  );
};

export default SideBar;

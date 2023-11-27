/* eslint-disable react-hooks/rules-of-hooks */
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";

import { TOP_MENU_LIST, BOTTOM_MENU_LIST } from "../../../constants/sidebar";
import { useRecoilState } from "recoil";
import { pageHeaderTitleState } from "../../../atoms";
import { useNavigate } from "react-router-dom";
import {
  findTopMenuIcons,
  findBottomMenuIcons,
} from "../../Icons/sidebar/Icons";
const drawer = () => {
  const navigate = useNavigate();

  const [, setHeaderTitle] = useRecoilState(pageHeaderTitleState);
  const handleTitle = (text: string) => {
    setHeaderTitle(text);
    navigate(`/${text.toLowerCase()}`);
  };

  return (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {TOP_MENU_LIST.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => handleTitle(text)}>
              <ListItemIcon>{findTopMenuIcons(index)}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {BOTTOM_MENU_LIST.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => handleTitle(text)}>
              <ListItemIcon>{findBottomMenuIcons(index)}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default drawer;

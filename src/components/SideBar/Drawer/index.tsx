import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { TOP_MENU_LIST, BOTTOM_MENU_LIST } from "../../../constants/sidebar";
import { useRecoilState } from "recoil";
import { pageHeaderTitleState } from "../../../atoms";

const drawer = () => {
  const [headerTitle, setHeaderTitle] = useRecoilState(pageHeaderTitleState);
  const handleTitle = (text: string) => {
    setHeaderTitle(text);
  };
  return (
    <div>
      <List>
        {TOP_MENU_LIST.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => handleTitle(text)}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {BOTTOM_MENU_LIST.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default drawer;

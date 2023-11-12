import { atom } from "recoil";

export const pageHeaderTitleState = atom({
  key: "pageHeaderTitle",
  default: "LOGO",
});

export const mobileSidebarState = atom({
  key: "mobileSideBarStatus",
  default: false,
});

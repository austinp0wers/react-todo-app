// import WorkIcon from "@mui/icons-material/Work";
// import TaskIcon from "@mui/icons-material/Task";
// import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
// import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
// import HomeIcon from "@mui/icons-material/Home";
// import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import React from "react";

const spanStyle: React.CSSProperties = {
  fontSize: "24px",
};

export const findTopMenuIcons = (index: number) => {
  switch (index) {
    case 0:
      //   return <WorkIcon />;
      return <span style={spanStyle}>🧳</span>;
    case 1:
      //   return <TaskIcon />;
      return <span style={spanStyle}>📊</span>;
    case 2:
      //   return <CalendarTodayIcon />;
      return <span style={spanStyle}>📅</span>;
    case 3:
      //   return <PriorityHighIcon />;
      return <span style={spanStyle}>❗️</span>;
  }
};

export const findBottomMenuIcons = (index: number) => {
  switch (index) {
    case 0:
      //   return <HomeIcon />;
      return <span style={spanStyle}>🏠</span>;
    case 1:
      //   return <ShoppingBasketIcon />;
      return <span style={spanStyle}>🛒</span>;
    case 2:
      //   return <ShoppingCartIcon />;
      return <span style={spanStyle}>🗂️</span>;
  }
};

export const findMenuIconsByName = (menuName: string) => {
  switch (menuName) {
    case "Work":
      //   return <WorkIcon />;
      return <span>🧳</span>;
    case "Tasks":
      //   return <TaskIcon />;
      return <span>📊</span>;
    case "Plans":
      //   return <CalendarTodayIcon />;
      return <span>📅</span>;
    case "Important":
      //   return <PriorityHighIcon />;
      return <span>❗️</span>;
    case "Home":
      //   return <HomeIcon />;
      return <span>🏠</span>;
    case "Groceries":
      //   return <ShoppingBasketIcon />;
      return <span>🛒</span>;
    case "Buy List":
      //   return <ShoppingCartIcon />;
      return <span>🗂️</span>;
  }
};

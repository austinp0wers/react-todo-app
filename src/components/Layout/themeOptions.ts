import { createTheme } from "@mui/material/styles";

export const themeOptions = createTheme({
  palette: {
    primary: {
      main: "#3E62FF",
    },
    secondary: {
      main: "#010202",
    },
    background: {
      default: "#f9f9f7",
    },
  },
  shape: {
    borderRadius: 5,
  },
  spacing: 30,
  typography: {
    fontFamily: "Pretendard Variable",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontWeight: 700,
      fontSize: "3rem",
    },
    h2: {
      fontWeight: 700,
      fontSize: "2.5rem",
    },
    h3: {
      fontWeight: 700,
      fontSize: "2rem",
    },
    h4: {
      fontWeight: 700,
      fontSize: "1.5rem",
    },
    h5: {
      fontWeight: 700,
      fontSize: "1.25rem",
    },
    h6: {
      fontWeight: 700,
      fontSize: "1rem",
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: "1rem",
    },
    subtitle2: {
      fontWeight: 400,
      fontSize: "0.875rem",
    },
    body1: {
      fontWeight: 400,
      fontSize: "1rem",
    },
    body2: {
      fontWeight: 400,
      fontSize: "0.875rem",
    },
    button: {
      fontWeight: 700,
      fontSize: "1rem",
    },
    caption: {
      fontWeight: 400,
      fontSize: "0.75rem",
    },
    overline: {
      fontWeight: 400,
      fontSize: "0.75rem",
    },
  },
});

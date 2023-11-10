import { ThemeProvider } from "@mui/material";
import { AppWrapper } from "./components/Layout/Layout";
import LandingPage from "./pages/LandingPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { themeOptions } from "./components/Layout/themeOptions";
import { RecoilRoot } from "recoil";
import SideBar from "./components/SideBar";
import Header from "./components/Header";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ThemeProvider theme={themeOptions}>
          <Header />
          <AppWrapper>
            <SideBar />
            <LandingPage />
          </AppWrapper>
        </ThemeProvider>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;

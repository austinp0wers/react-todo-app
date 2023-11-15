import { ThemeProvider } from "@mui/material";
import { AppWrapper, ContentWrapper } from "./components/Layout/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { themeOptions } from "./components/Layout/themeOptions";
import { RecoilRoot } from "recoil";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import MainRouter from "./routes/Router";
import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ThemeProvider theme={themeOptions}>
          <BrowserRouter>
            <AppWrapper>
              <SideBar />
              <ContentWrapper>
                <Header />
                <MainRouter />
              </ContentWrapper>
            </AppWrapper>
          </BrowserRouter>
        </ThemeProvider>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;

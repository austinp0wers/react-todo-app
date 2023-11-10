import { Box, Card, Typography } from "@mui/material";
import { LandingPageWrapper } from "../components/Layout/Layout";
import TodoList from "../components/Todo-List";

const LandingPage = () => {
  return (
    <LandingPageWrapper>
      <TodoList />
    </LandingPageWrapper>
  );
};

export default LandingPage;

import AddIcon from "@mui/icons-material/Add";
import { NewTaskButtonWrapper } from "./styled";
import { Box, Typography } from "@mui/material";

const NewTaskButton = () => {
  return (
    <NewTaskButtonWrapper>
      <AddIcon />
      <Typography>New Task...</Typography>
    </NewTaskButtonWrapper>
  );
};

export default NewTaskButton;

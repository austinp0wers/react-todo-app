import NewTaskButton from "../components/Buttons/NewTask/NewTask";
import { TodoListWrapper } from "../components/Layout/Layout";
import TodoList from "../components/Todo-List";

const LandingPage = () => {
  return (
    <TodoListWrapper>
      <TodoList />
      <NewTaskButton />
    </TodoListWrapper>
  );
};

export default LandingPage;

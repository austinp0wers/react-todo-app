import styled from "styled-components";

export const AppWrapper = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;

  * {
    font-family: "Pretendard Variable", Pretendard, -apple-system,
      BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI",
      "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic",
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  }
`;

export const TodoListWrapper = styled.div`
  background-color: #1a1b1d;
  color: white;
  padding: 30px;
  height: 100vh;
`;

export const ContentWrapper = styled.div`
  flex-direction: column;
  flex: 7;
`;

import styled from "styled-components";

export const TaskList = styled.ul`
  list-style-type: none;
  margin-top: 2.5rem;
  padding: 0.2rem;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 0.3rem;
  }
  ::-webkit-scrollbar-track {
    background: #fff;
  }
  ::-webkit-scrollbar-thumb {
    background: #fb937d;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #fa9e9e;
  }
`;

export const TaskItem = styled.li`
  background-color: #fff;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3rem;
  margin-bottom: 1rem;
  padding: 1.5rem;
  border-radius: 0.2rem;
  :last-child {
    margin-bottom: 0;
  }
`;

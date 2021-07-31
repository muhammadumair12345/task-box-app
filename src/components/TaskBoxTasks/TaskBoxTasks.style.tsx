import styled from "styled-components";

export const TaskList = styled.ul`
  list-style-type: none;
  flex-grow: 1;
  margin-top: 2.5rem;
  padding: 0.2rem;
  overflow-y: auto;

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
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3rem;
  margin-bottom: 1.2rem;
  padding: 0 1.5rem;
  border-radius: 0.2rem;
  :last-child {
    margin-bottom: 0;
  }
`;

export const Item = styled.div`
  color: #fb937d;
  :nth-child(odd) {
    cursor: pointer;
  }
`;

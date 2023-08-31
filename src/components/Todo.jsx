import React from "react";
import { useDispatch } from "react-redux";
import { styled } from "styled-components";
import { removeTodo, updateTodo } from "../redux/modules/todos";

function Todo({ todo }) {
  const dispatch = useDispatch();
  return (
    <>
      <TodoBox>
        <TodoContent title={todo.title} content={todo.content} />
        <ButtonBox>
          <Button
            style={{ backgroundColor: "#FDE5EC" }}
            onClick={() => {
              dispatch(removeTodo(todo.id));
            }}
          >
            삭제하기
          </Button>
          <Button
            style={{ backgroundColor: "#CECE5A" }}
            onClick={() => {
              dispatch(updateTodo(todo.id));
            }}
          >
            {todo.isDone ? '취소' : '완료'}
          </Button>
        </ButtonBox>
      </TodoBox>
    </>
  );
}

const TodoContent = ({ title, content }) => {
  return (
    <>
      <h3>{title}</h3>
      <p>{content}</p>
    </>
  );
};

export default Todo;


const TodoBox = styled.div`
  border: 3px solid green;
  border-radius: 3px;
  margin: 1rem;
  padding: 1rem;
  width: 300px;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Button = styled.button`
  width: 120px;
  height: 35px;
  background-color: white;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  font-weight: 600;
`;

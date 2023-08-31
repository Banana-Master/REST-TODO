import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Todo from "./Todo";
import star from "../image/star.gif";
import jelly from "../image/jelly.gif";
import { styled } from "styled-components";

function Todos() {
  const todos = useSelector((state) => state.todos);

  return (
    <div>
      <H2Tag>
        <Image src={jelly} alt="젤리" />
        <h2>Working...</h2>
      </H2Tag>
      <TodoList>
        {todos
          .filter((todo) => !todo.isDone)
          .map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
      </TodoList>

      <H2Tag>
        <Image src={star} alt="별" />
        <h2>Done...</h2>
      </H2Tag>
      <TodoList>
        {todos
          .filter((todo) => todo.isDone)
          .map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
      </TodoList>
    </div>
  );
}

export default Todos;

const H2Tag = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

const TodoList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const TestTodo = ({ todo }) => {
  const navigate = useNavigate();

  return (
    <>
      <h3 onClick={() => navigate(`detail/${todo.id}`, { state: todo })}>
        {todo.title}
      </h3>
      <div>{todo.content}</div>
      <button>삭제하기</button>
      <button>{todo.isDone ? "완료" : "취소"}</button>
    </>
  );
};

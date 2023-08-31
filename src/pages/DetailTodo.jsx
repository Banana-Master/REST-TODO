import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { styled } from "styled-components";

function DetailTodo() {
  const navigate = useNavigate();
  const location = useLocation();
  const todo = location.state;

  return (
    <Container>
      <div>
        <span>{todo.id}</span>
        <button onClick={() => navigate(-1)}>이전으로</button>
      </div>
      <div>{todo.title}</div>
      <div>{todo.content}</div>
    </Container>
  );
}

export default DetailTodo;

const Container = styled.div``;

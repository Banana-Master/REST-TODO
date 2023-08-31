import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function DetailTodo() {
  const navigate = useNavigate();
  const location = useLocation();
  const todo = location.state;

  return (
    <div>
      <div>
        <span>{todo.id}</span>
        <button onClick={() => navigate(-1)}>이전으로</button>
      </div>
      <div>{todo.title}</div>
      <div>{todo.content}</div>
    </div>
  );
}

export default DetailTodo;

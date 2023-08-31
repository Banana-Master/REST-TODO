import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Todos() {
  const todos = useSelector((state) => state.todos);

  return (
    <div>
      <h2>working...</h2>
      {todos
        .filter((todo) => !todo.isDone)
        .map((todo) => (
          <TestTodo key={todo.id} todo={todo} />
        ))}
      <h2>done...</h2>
      {todos
        .filter((todo) => todo.isDone)
        .map((todo) => (
          <TestTodo key={todo.id} todo={todo} />
        ))}
    </div>
  );
}

export default Todos;

const TestTodo = ({ todo }) => {
  const navigate = useNavigate();

  return (
    <>
      <h3 onClick={() => navigate(`detail/${todo.id}`, { state: todo })}>
        {todo.title}
      </h3>
      <div>{todo.content}</div>
      <button>삭제하기</button>
      <button>{todo.isDone ? '완료' : '취소'}</button>
    </>
  );
};

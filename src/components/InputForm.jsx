import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/modules/todos';
import { v4 as uuid } from 'uuid';

function InputForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const dispatch = useDispatch();

  const handleClick = () => {
    const todo = { id: uuid(), title, content, isDone: false };
    dispatch(addTodo(todo));
    setTitle('');
    setContent('');
  };

  return (
    <div>
      <input
        value={title}
        placeholder='제목을 입력하세요'
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        value={content}
        placeholder='내용을 입력하세요'
        onChange={(event) => setContent(event.target.value)}
      />
      <button onClick={handleClick}>추가하기</button>
    </div>
  );
}

export default InputForm;

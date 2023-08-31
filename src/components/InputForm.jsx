import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/modules/todos";
import { v4 as uuid } from "uuid";
import { styled } from "styled-components";

function InputForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();

  const handleClick = () => {
    const todo = { id: uuid(), title, content, isDone: false };
    dispatch(addTodo(todo));
    setTitle("");
    setContent("");
  };

  return (
    <InputsDiv>
      <div style={{
        display: 'flex',
        flexWrap: 'nowrap'
    }}>
        <Input
          value={title}
          placeholder="제목을 입력하세요"
          onChange={(event) => setTitle(event.target.value)}
        />
        <Input
          style={{width: '500px'}}
          value={content}
          placeholder="내용을 입력하세요"
          onChange={(event) => setContent(event.target.value)}
        />
      </div>

      <InputButton onClick={handleClick}>추가하기</InputButton>
    </InputsDiv>
  );
}

export default InputForm;

const InputsDiv = styled.div`
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
`;
const InputButton = styled.button`
  background-color: #ffc436;
  border: none;
  padding: 10px;
  border-radius: 8px;
  font-weight: 600;
  white-space: nowrap;
`;

const Input = styled.input`
  padding: 10px;
  border: none;
  border-radius: 8px;
  margin-right: 10px;
  width: 300px;
  box-shadow: 1px 1px 3px black;
  &:focus {
    outline: none;
    box-shadow: 1px 1px 3px #d89803;
  }
`;

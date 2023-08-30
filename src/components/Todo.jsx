import React from 'react'
import { useDispatch } from 'react-redux'
import { styled } from 'styled-components' 
import { removeTodo, updateTodo } from '../redux/modules/todos'

function Todo() {

  const TodoBox = styled.div`
    border: 3px solid green;
    border-radius: 3px;
    margin: 1rem;
    padding: 1rem;
    width: 300px;
  `

  const ButtonBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `

  const Button = styled.button`
    width: 120px;
    height: 35px;
    background-color: white;
    border-radius: 5px;
    cursor: pointer;
    border: none;
    font-weight: 600;
  `

  const dispatch = useDispatch();

  return (
    <>
      <TodoBox>
        <h3>제목입니다.</h3>
        <p>내용입니다.</p>
        <ButtonBox>
          <Button style={{backgroundColor: '#FDE5EC'}}
          onClick={() => {dispatch(removeTodo())}}
          >삭제하기</Button>
          <Button style={{backgroundColor: '#CECE5A'}}
          onClick={() => {dispatch(updateTodo())}}
          >완료</Button>
        </ButtonBox>
      </TodoBox>
    </>
  )
}

export default Todo
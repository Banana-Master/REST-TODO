import React from 'react';
import Todo from '../components/Todo';
import { styled } from 'styled-components';
import Todos from '../components/Todos';
import InputForm from '../components/InputForm';

function Home() {
  const Body = styled.div`
    max-width: 1200px;
    min-width: 800px;
    margin-left: auto;
    margin-right: auto;
    /* background-color: beige; */
  `;
  const Title = styled.div`
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
  `;
  return (
    <Body>
      <Title>
        <span style={{fontSize: '20px', fontWeight: '700'}}>
          My Todo List
          </span>
        <span>React</span>
      </Title>
      <InputForm></InputForm>

      <Todos></Todos>
      {/* <Todo></Todo> */}
    </Body>
  );
}

export default Home;

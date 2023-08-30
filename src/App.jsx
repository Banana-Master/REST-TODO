import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from './redux/modules/todos';
import Router from './shared/Router';

function App() {

  return (
    <>
      <Router/>
    </>
  );
}

export default App;

import { v4 as uuid } from "uuid";

const initialState = [
  {
    id: uuid(),
    title: "열라면 먹고 싶다",
    content: "열라면 4개 한 번에 먹고 싶다",
    isDone: false,
  },
  {
    id: uuid(),
    title: "피자먹기",
    content: "치즈크러스트는 꼭 추기하기",
    isDone: true,
  },
];
// const [count, setCount] = useState(0);
// setCount(count + 1);
// initialState , Reducer

const TODO_SAVE = "todos/TODO_SAVE";
const TODO_REMOVE = "todos/TODO_REMOVE";
const TODO_UPDATE = "todos/TODO_UPDATE";

export const addTodo = (payload) => {
  return { type: TODO_SAVE, payload };
};

export const removeTodo = (payload) => {
  return { type: TODO_REMOVE, payload };
};

export const updateTodo = (payload) => {
  return {
    type: TODO_UPDATE,
    payload,
  };
};

const todos = (state = initialState, action) => {
  console.log( action );
  console.log(state);
  switch (action.type) {
    case TODO_SAVE:
      return state;
    case TODO_REMOVE:
      state.map((item) => {
        
      })
      return state;

    case TODO_UPDATE:
      return state;

    default:
      return state;
  }
};

export default todos;

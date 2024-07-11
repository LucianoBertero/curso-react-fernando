console.log("hola mundo");

const initialState = [
  {
    id: 1,
    todo: "Recolectar la piedra del Alma",
    done: false,
  },
];

const todoReducer = (state = initialState, action = {}) => {
  if (action.type === "TODO") {
    return [...state, action.payload];
  }

  return state;
};

const newTodo = {
  id: 2,
  todo: "Recolectar la piedra del poder",
  done: false,
};

const addTodoAction = {
  type: "TODO",
  payload: newTodo,
};

let todos = todoReducer();

todos = todoReducer(todos, addTodoAction);
console.log({ state: todos });

import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const initialState = [
  //   {
  //     id: new Date().getTime(),
  //     description: "Recolectar la piedra del alma",
  //     done: false,
  //   },
  //   {
  //     id: new Date().getTime() + 100,
  //     description: "Recolectar la piedra del alma",
  //     done: false,
  //   },
];

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodos = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "Add Todo",
      payload: todo,
    };
    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    console.log(id);
    dispatch({
      type: "Remove Todo",
      payload: id,
    });
  };

  const handleToggleTodo = (id) => {
    dispatch({
      type: "Toggle Todo",
      payload: id,
    });
  };

  const pendingTodosCount = () => {
    return todos.filter((todo) => !todo.done).length;
  };

  const todosCount = () => {
    return todos.length;
  };

  return {
    todos,
    handleDeleteTodo,
    handleToggleTodo,
    handleNewTodo,
    pendingTodosCount,
    todosCount,
  };
};

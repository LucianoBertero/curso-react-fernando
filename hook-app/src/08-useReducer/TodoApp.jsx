import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

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

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

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

  return (
    <>
      <h1>
        TodoApp (10), <small>Pendientes: 2</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} onDeleteTodo={handleDeleteTodo}></TodoList>
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo}></TodoAdd>
        </div>
      </div>
    </>
  );
};
